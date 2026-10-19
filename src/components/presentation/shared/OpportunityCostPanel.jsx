import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import CircleDollarSign from 'lucide-react/dist/esm/icons/circle-dollar-sign.mjs';
import Gauge from 'lucide-react/dist/esm/icons/gauge.mjs';
import { PanelShell } from './ChartPanel';
import { formatCurrency } from './formatters';
import { buildOpportunityCostProjection } from '../../../domain/chartCalculations';

const OPPORTUNITY_GROWTH_COLOR = '#16a34a';
const OPPORTUNITY_WAITING_COLOR = '#ef4444';

const OPPORTUNITY_COST_CONFIG = {
  number: '3',
  title: 'Custo da Oportunidade',
  subtitle: 'Cada mês de espera representa oportunidades que não voltam mais.',
  badge: 'Impacto acumulativo em 36 meses',
  currentRevenue: 200000,
  growthLabel: 'Agindo agora (crescimento possível)',
  waitingLabel: 'Esperando (oportunidades perdidas)',
  lossSubtitle: 'em 36 meses',
  lossTitle: 'Perda de',
  lossColor: '#e31417',
  growthColor: OPPORTUNITY_GROWTH_COLOR,
  waitingColor: OPPORTUNITY_WAITING_COLOR,
  showMetric: true,
  disclaimer:
    'Compara o faturamento atual com o potencial informado pelo cliente, evidenciando o custo acumulado da inércia ao longo do tempo.',
  yAxisDomain: [0, 8000000],
  yAxisTicks: [0, 2000000, 4000000, 6000000, 8000000],
  timeline: {
    months: [0, 6, 12, 24, 36],
    growthMultipliers: [5, 9, 15.5, 24.5, 36],
    waitingMultipliers: [5, 7.5, 10, 13, 16]
  }
};

const SummaryItem = ({ icon, label, value, iconWrapClassName, style, valueClassName }) => (
  <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 uppercase">
    <div className={iconWrapClassName} style={style}>
      {icon}
    </div>
    <div className="min-w-0">
      <div className="text-[9px] leading-tight text-[rgba(28,45,127,0.7)]">{label}</div>
      <div className={valueClassName ?? 'mt-1 truncate text-[17px] font-bold leading-tight text-[#1c2d7f]'}>{value}</div>
    </div>
  </div>
);

const MetricBand = ({ items }) => (
  <div className="grid shrink-0 grid-cols-3 overflow-hidden rounded-[10px] border border-[rgba(28,45,127,0.5)] bg-white">
    {items.map((item, index) => (
      <div key={item.key} className={index > 0 ? 'border-l border-[#e2e8f0]' : ''}>
        {item.content}
      </div>
    ))}
  </div>
);

const ScenarioSummaryItem = ({ scenarioLabel, scenarioColor }) => (
  <SummaryItem
    icon={<Gauge size={26} />}
    label="Intensidade"
    value={<span style={{ color: scenarioColor }}>{scenarioLabel}</span>}
    iconWrapClassName="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
    valueClassName="mt-1 truncate text-[17px] font-bold leading-tight"
    style={{ backgroundColor: `${scenarioColor}20`, color: scenarioColor }}
  />
);

const calculateOpportunityCostData = ({ currentRevenue, timeline }) => {
  const { months, growthMultipliers, waitingMultipliers } = timeline;
  const data = months.map((month, index) => ({
    month,
    monthLabel: `${month} meses`,
    growth: currentRevenue * growthMultipliers[index],
    waiting: currentRevenue * waitingMultipliers[index]
  }));
  const lastPoint = data[data.length - 1];

  return {
    data,
    opportunityLoss: lastPoint.growth - lastPoint.waiting
  };
};

const toSafeNumber = (value) => {
  const number = Number(value);

  return Number.isFinite(number) ? number : 0;
};

const formatOpportunityValue = (value) => {
  const safeValue = toSafeNumber(value);

  if (safeValue === 0) return '0';
  if (safeValue >= 1000000) return `R$ ${(safeValue / 1000000).toFixed(1).replace('.', ',')} mi`;

  return formatCurrency(safeValue);
};

const formatOpportunityAxis = (value) => {
  const safeValue = toSafeNumber(value);

  return safeValue === 0 ? '0' : `${safeValue / 1000000}M`;
};

const OpportunityDot = ({ cx, cy, payload, index, dataKey, color, dataLength }) => {
  if (cx == null || cy == null || !payload) return null;

  const value = toSafeNumber(payload[dataKey]);
  const isLast = index === dataLength - 1;
  const isFirst = index === 0;
  const labelX = isLast ? cx - 8 : isFirst ? cx + 8 : cx;
  const textAnchor = isLast ? 'end' : isFirst ? 'start' : 'middle';
  const isGrowth = dataKey === 'growth';
  const labelY = cy + (isGrowth ? (isFirst ? -30 : -14) : isFirst ? -12 : 14);
  const dotStroke = dataKey === 'waiting' ? color : '#fff';
  const dotStrokeWidth = dataKey === 'waiting' ? 1.5 : 2.5;

  return (
    <g>
      <circle cx={cx} cy={cy} r={5.5} fill={color} stroke={dotStroke} strokeWidth={dotStrokeWidth} />
      <text
        x={labelX}
        y={labelY}
        textAnchor={textAnchor}
        fill={color}
        stroke="#fff"
        strokeWidth={3}
        strokeLinejoin="round"
        paintOrder="stroke"
        fontSize={12}
        fontWeight={700}
        dominantBaseline={!isGrowth && !isFirst ? 'hanging' : 'auto'}
      >
        {formatOpportunityValue(value)}
      </text>
    </g>
  );
};

export const OpportunityCostPanel = ({
  scenarioLabel,
  scenarioColor,
  questionnaireAnswers,
  panelNumber = OPPORTUNITY_COST_CONFIG.number,
  compact = false,
  idPrefix = 'profile',
  config = {}
}) => {
  const answeredCurrentRevenue = questionnaireAnswers?.current_monthly_revenue?.value;
  const answeredPotentialRevenue = questionnaireAnswers?.potential_monthly_revenue?.value;
  const hasRevenueProjection = answeredCurrentRevenue > 0 && answeredPotentialRevenue > 0;
  const revenueProjection = hasRevenueProjection
    ? buildOpportunityCostProjection(answeredCurrentRevenue, answeredPotentialRevenue)
    : null;
  const revenueProjectionData = revenueProjection?.data;
  const lastRevenueProjection = revenueProjectionData?.[revenueProjectionData.length - 1];
  const dynamicMax = lastRevenueProjection ? Math.max(lastRevenueProjection.growth, lastRevenueProjection.waiting) : null;
  const panelConfig = {
    ...OPPORTUNITY_COST_CONFIG,
    ...config,
    ...(hasRevenueProjection
      ? {
          currentRevenue: answeredCurrentRevenue,
          data: revenueProjectionData,
          opportunityLoss: revenueProjection.accumulatedGap,
          growthLabel: 'Novo faturamento estimado',
          waitingLabel: 'Faturamento atual',
          lossTitle: 'PERDA DE',
          lossSubtitle: 'em 36 meses',
          yAxisDomain: [0, dynamicMax * 1.15],
          yAxisTicks: undefined,
          disclaimer: OPPORTUNITY_COST_CONFIG.disclaimer
        }
      : {})
  };
  const { title, subtitle, badge, currentRevenue, timeline, yAxisDomain, yAxisTicks } = panelConfig;
  const calculatedData = calculateOpportunityCostData({ currentRevenue, timeline });
  const data = panelConfig.data ?? calculatedData.data;
  const opportunityLoss = panelConfig.opportunityLoss ?? calculatedData.opportunityLoss;
  const projectedRevenue = answeredPotentialRevenue > 0 ? answeredPotentialRevenue : 0;
  const growthColor = panelConfig.growthColor ?? OPPORTUNITY_GROWTH_COLOR;
  const waitingColor = panelConfig.waitingColor ?? OPPORTUNITY_WAITING_COLOR;
  const growthGlowId = `${idPrefix}OpportunityGrowthGlow`;
  const growthFillId = `${idPrefix}OpportunityGrowthFill`;
  const waitingFillId = `${idPrefix}OpportunityWaitingFill`;

  return (
    <PanelShell
      number={panelNumber}
      title={title}
      subtitle={subtitle}
      badge={badge}
      disclaimer={panelConfig.disclaimer}
      compact={compact}
    >
      <div className="flex h-full min-h-0 flex-col">
        <MetricBand
          items={[
            {
              key: 'current-revenue',
              content: panelConfig.showMetric ? (
                <SummaryItem
                  icon={<CircleDollarSign size={26} />}
                  label="Faturamento atual"
                  value={`${formatCurrency(currentRevenue)}/mês`}
                  iconWrapClassName="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600"
                />
              ) : (
                <div />
              )
            },
            {
              key: 'projected-revenue',
              content: (
                <SummaryItem
                  icon={<CircleDollarSign size={26} />}
                  label="Faturamento projetado"
                  value={`${formatCurrency(projectedRevenue)}/mês`}
                  iconWrapClassName="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600"
                />
              )
            },
            {
              key: 'scenario',
              content: <ScenarioSummaryItem scenarioLabel={scenarioLabel} scenarioColor={scenarioColor} />
            }
          ]}
        />

        <div className={`${compact ? 'mt-1 grid-cols-[1fr_92px] gap-2' : 'mt-3 grid-cols-[1fr_112px] gap-3'} grid min-h-0 flex-1`}>
          <div className="relative min-h-0">
            <div
              className={`absolute left-0 right-0 top-0 z-10 flex justify-center font-bold leading-tight text-[#1c2d7f] ${
                compact ? 'gap-2 text-[10px]' : 'gap-5 text-[12px]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-5 rounded-full" style={{ backgroundColor: waitingColor }} />
                {panelConfig.waitingLabel}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-5 rounded-full" style={{ backgroundColor: growthColor }} />
                {panelConfig.growthLabel}
              </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={compact ? { top: 34, right: 28, left: -8, bottom: 4 } : { top: 48, right: 54, left: 2, bottom: 12 }}
              >
                <defs>
                  <linearGradient id={growthGlowId} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={growthColor} stopOpacity={0.55} />
                    <stop offset="100%" stopColor={growthColor} stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id={growthFillId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={growthColor} stopOpacity={0.32} />
                    <stop offset="100%" stopColor={growthColor} stopOpacity={0.04} />
                  </linearGradient>
                  <linearGradient id={waitingFillId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={waitingColor} stopOpacity={0.22} />
                    <stop offset="100%" stopColor={waitingColor} stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#e2e8f0" />
                <XAxis
                  dataKey="monthLabel"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#475569', fontSize: compact ? 10 : 12, fontWeight: 600 }}
                  tickMargin={6}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#475569', fontSize: compact ? 10 : 12, fontWeight: 600 }}
                  tickFormatter={formatOpportunityAxis}
                  domain={yAxisDomain}
                  ticks={yAxisTicks}
                  padding={{ top: compact ? 8 : 12, bottom: compact ? 24 : 30 }}
                  width={46}
                />
                <Area
                  type="monotone"
                  dataKey="growth"
                  stroke={`url(#${growthGlowId})`}
                  strokeWidth={2}
                  fill={`url(#${growthFillId})`}
                  fillOpacity={1}
                  dot={<OpportunityDot dataKey="growth" color={growthColor} dataLength={data.length} />}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Area
                  type="linear"
                  dataKey="waiting"
                  stroke={waitingColor}
                  strokeWidth={compact ? 3 : 2.5}
                  fill={waitingColor}
                  fillOpacity={0}
                  dot={<OpportunityDot dataKey="waiting" color={waitingColor} dataLength={data.length} />}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center">
            <div
              className={`w-full rounded-[10px] border border-red-200 bg-white text-center text-[#1c2d7f] shadow-[0_8px_22px_rgba(28,45,127,0.06)] ${
                compact ? 'px-2 py-3' : 'px-3 py-4'
              }`}
            >
              <div className={`${compact ? 'text-[9px]' : 'text-[10px]'} font-bold uppercase leading-tight text-[rgba(28,45,127,0.7)]`}>
                {panelConfig.lossTitle}
              </div>
              <div className={`${compact ? 'mt-1 text-[16px]' : 'mt-1 text-[20px]'} font-semibold leading-none`} style={{ color: panelConfig.lossColor }}>
                {formatOpportunityValue(opportunityLoss)}
              </div>
              <div className={`${compact ? 'mt-1 text-[9px]' : 'mt-2 text-[10px]'} font-bold uppercase leading-tight text-[#1c2d7f]`}>
                {panelConfig.lossSubtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  );
};
