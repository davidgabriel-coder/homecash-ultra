import { Bank } from '@phosphor-icons/react/dist/csr/Bank';
import { FileText } from '@phosphor-icons/react/dist/csr/FileText';
import { Gavel } from '@phosphor-icons/react/dist/csr/Gavel';
import { Scales } from '@phosphor-icons/react/dist/csr/Scales';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Calendar from 'lucide-react/dist/esm/icons/calendar.mjs';
import CircleDollarSign from 'lucide-react/dist/esm/icons/circle-dollar-sign.mjs';
import DollarSign from 'lucide-react/dist/esm/icons/dollar-sign.mjs';
import Gauge from 'lucide-react/dist/esm/icons/gauge.mjs';
import { PanelShell } from '../shared/ChartPanel';
import { formatCurrency } from '../shared/formatters';
import { SCENARIO_IDS } from '../../../domain/debtScenarios';
import { calculateProductiveCapital } from '../../../domain/chartCalculations';

// =============================================================================
// COMPONENTES COMPARTILHADOS DO SLIDE
// =============================================================================

const SummaryItem = ({ icon, label, value, iconWrapClassName, style, valueClassName }) => (
  <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 uppercase">
    <div className={iconWrapClassName} style={style}>
      {icon}
    </div>
    <div className="min-w-0">
      <div className="text-[10px] leading-tight text-[rgba(28,45,127,0.7)]">{label}</div>
      <div className={valueClassName ?? 'mt-1 truncate text-[17px] font-bold leading-tight text-[#1c2d7f]'}>{value}</div>
    </div>
  </div>
);

const MetricBand = ({ left, right }) => (
  <div className="grid shrink-0 grid-cols-2 overflow-hidden rounded-[10px] border border-[rgba(28,45,127,0.5)] bg-white">
    {left}
    <div className="border-l border-[#e2e8f0]">{right}</div>
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

// =============================================================================
// GRAFICO 1 E GRAFICO 4 - COMPARATIVOS DE BARRAS
// =============================================================================

const PRESERVED_EQUITY_CONFIG = {
  number: '1',
  title: 'Patrimônio Preservado vs Patrimônio Perdido',
  subtitle: 'Entenda como a inércia aumenta o custo do seu problema ao longo do tempo.',
  badge: 'Comparativo em 36 meses',
  metricLabel: 'Valor do imóvel',
  chartHeading: null,
  propertyValue: 2000000,
  preservedValue: 1500000,
  lostValue: 1000000,
  savedValue: 700000,
  calloutTitle: 'Economia de',
  calloutSubtitle: '(35% de patrimônio)',
  leftLabel: 'Agindo agora',
  leftSublabel: '(com solução)',
  rightLabel: 'Mantendo Inércia',
  rightSublabel: '(Sem solução)',
  disclaimer:
    'Comparativo baseado na liquidez média da solução e na projeção da preservação patrimonial ao longo do tempo.'
};

const PRESERVED_EQUITY_PERCENTAGES = {
  [SCENARIO_IDS.LOW]: { actingNow: 55, maintainingInertia: 35 },
  [SCENARIO_IDS.MODERATE]: { actingNow: 55, maintainingInertia: 30 },
  [SCENARIO_IDS.ACCELERATED]: { actingNow: 55, maintainingInertia: 20 },
  [SCENARIO_IDS.CRITICAL]: { actingNow: 55, maintainingInertia: 0 }
};

const PRODUCTIVE_CAPITAL_CONFIG = {
  number: '4',
  title: 'Capital Parado vs Capital Produtivo',
  subtitle: 'Seu patrimônio pode estar parado hoje, enquanto poderia gerar resultados.',
  badge: 'Potencial econômico do capital',
  metricLabel: 'Capital parado',
  chartHeading: 'Potencial de geração de valor em 36 meses',
  propertyValue: 1000000,
  preservedValue: 1000000,
  lostValue: 180000000,
  savedValue: 5000000,
  calloutTitle: 'Potencial informado',
  calloutSubtitle: 'por mês',
  leftLabel: 'Capital Parado',
  leftSublabel: '(valor do imóvel)',
  rightLabel: 'Potencial Destravado',
  rightSublabel: '(potencial informado x 36 meses)',
  disclaimer:
    'O capital parado corresponde ao valor do imóvel. O potencial destravado é calculado a partir dos objetivos e projeções informados pelo cliente durante o diagnóstico inicial.'
};

export const EquityComparisonChart = ({
  config = PRESERVED_EQUITY_CONFIG,
  panelNumber,
  scenarioId,
  scenarioLabel,
  scenarioColor,
  propertyValue: answeredPropertyValue,
  compact = false
}) => {
  const {
    number: configuredNumber,
    title,
    subtitle,
    badge,
    metricLabel,
    chartHeading,
    propertyValue: configuredPropertyValue,
    preservedValue: configuredPreservedValue,
    lostValue: configuredLostValue,
    savedValue: configuredSavedValue,
    calloutTitle,
    calloutSubtitle,
    leftLabel,
    leftSublabel,
    rightLabel,
    rightSublabel,
    disclaimer
  } = config;
  const number = panelNumber ?? configuredNumber;
  const propertyValue = config === PRESERVED_EQUITY_CONFIG ? answeredPropertyValue ?? configuredPropertyValue : configuredPropertyValue;
  const scenarioPercentages =
    config === PRESERVED_EQUITY_CONFIG
      ? PRESERVED_EQUITY_PERCENTAGES[scenarioId] ?? PRESERVED_EQUITY_PERCENTAGES[SCENARIO_IDS.LOW]
      : null;
  const actingNowPercentage = scenarioPercentages ? scenarioPercentages.actingNow : null;
  const preservedValue = scenarioPercentages ? propertyValue * (actingNowPercentage / 100) : configuredPreservedValue;
  const lostValue = scenarioPercentages ? propertyValue * (scenarioPercentages.maintainingInertia / 100) : configuredLostValue;
  const savedValue = scenarioPercentages ? preservedValue - lostValue : configuredSavedValue;
  const savedPercentage = scenarioPercentages
    ? actingNowPercentage - scenarioPercentages.maintainingInertia
    : null;
  const maxBarValue = Math.max(preservedValue, lostValue);
  const preservedHeight = `${(preservedValue / maxBarValue) * 100}%`;
  const lostHeight = `${(lostValue / maxBarValue) * 100}%`;

  return (
    <PanelShell number={number} title={title} subtitle={subtitle} badge={badge} disclaimer={disclaimer} compact={compact}>
      <div className="flex h-full min-h-0 flex-col">
        <MetricBand
          left={
            <SummaryItem
              icon={<CircleDollarSign size={26} />}
              label={metricLabel}
              value={formatCurrency(propertyValue)}
              iconWrapClassName="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600"
            />
          }
          right={<ScenarioSummaryItem scenarioLabel={scenarioLabel} scenarioColor={scenarioColor} />}
        />

        <div className="relative mt-3 min-h-0 flex-1 px-10 pb-3 pt-5">
          <div className={`grid h-full ${chartHeading ? 'grid-rows-[24px_1fr_2px_32px]' : 'grid-rows-[1fr_2px_32px]'}`}>
            {chartHeading ? (
              <div className="text-center text-[11px] font-bold uppercase leading-tight tracking-[0.04em] text-[#1c2d7f]">
                {chartHeading}
              </div>
            ) : null}

            <div className="grid min-h-0 grid-cols-[1fr_160px_1fr] items-end gap-8">
              <div className="flex h-full min-h-0 flex-col items-center justify-end">
                <div className="mb-2 text-[22px] font-semibold leading-none tracking-[-0.03em] text-[#1c2d7f]">
                  {formatCurrency(preservedValue)}
                </div>
                <div className="w-[92px] rounded-t-[5px] bg-[#235ce9]" style={{ height: preservedHeight }} />
              </div>

              <div className="relative mb-[42px] flex min-h-[72px] flex-col items-center justify-center rounded-[10px] border border-[rgba(28,45,127,0.5)] bg-white px-3 text-center">
                <div className="absolute left-[-12px] top-1/2 h-px w-3 -translate-y-1/2 bg-[#aab4d7]" />
                <div className="absolute right-[-12px] top-1/2 h-px w-3 -translate-y-1/2 bg-[#aab4d7]" />
                <div className="absolute left-[-16px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l border-[#aab4d7]" />
                <div className="absolute right-[-16px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#aab4d7]" />
                <div className="text-[11px] font-medium uppercase leading-none text-[#1c2d7f]">{calloutTitle}</div>
                <div className="mt-2 text-[22px] font-bold leading-none text-[#16803c]">{formatCurrency(savedValue)}</div>
                <div className="mt-2 text-[11px] font-medium uppercase leading-none text-[#1c2d7f]">
                  {savedPercentage == null ? calloutSubtitle : `(${savedPercentage}% de patrimônio)`}
                </div>
              </div>

              <div className="flex h-full min-h-0 flex-col items-center justify-end">
                <div className="mb-2 text-[22px] font-semibold leading-none tracking-[-0.03em] text-[#1c2d7f]">
                  {formatCurrency(lostValue)}
                </div>
                <div
                  className="w-[92px] rounded-t-[5px]"
                  style={{ height: lostHeight, backgroundColor: scenarioColor }}
                />
              </div>
            </div>

            <div className="h-[2px] bg-[#aab4d7]" />

            <div className="grid grid-cols-[1fr_160px_1fr] gap-8">
              <div className="pt-2 text-center text-[12px] font-medium leading-tight text-[#1c2d7f]">
                {leftLabel}
                <br />
                {leftSublabel}
              </div>
              <div />
              <div className="pt-2 text-center text-[12px] font-medium leading-tight text-[#1c2d7f]">
                {rightLabel}
                <br />
                {rightSublabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  );
};

// =============================================================================
// GRAFICO 2 - RISCO JURIDICO PROGRESSIVO
// =============================================================================

const LEGAL_RISK_CONFIG = {
  number: '2',
  title: 'Risco Jurídico Progressivo',
  subtitle: 'Veja como o risco jurídico evolui e pode impactar seu patrimônio.',
  badge: 'Evolução do risco jurídico',
  currentSituation: 'Cobrança Judicial',
  disclaimer: 'Sequência ilustrativa das etapas de agravamento jurídico, da cobrança inicial até o risco de leilão.',
  stages: [
    { label: ['Atraso', 'Inicial'], color: '#235ce9', icon: FileText },
    { label: ['Cobrança', 'Extrajudicial'], color: '#06bc0c', icon: Bank },
    { label: ['Ação', 'Judicial'], color: '#ff4a13', icon: Scales },
    { label: ['Execução de', 'Bens'], color: '#ef1d1d', icon: Gavel },
    { label: ['Hasta Pública/', 'Leilão'], color: '#ef1d1d', icon: DollarSign }
  ]
};

const LEGAL_STAGE_LABELS = {
  none: 'Nenhuma',
  initial_delay: 'Atraso Inicial',
  extrajudicial_collection: 'Cobrança Extrajudicial',
  legal_action: 'Ação Judicial',
  asset_enforcement: 'Execução de Bens',
  public_auction: 'Hasta Pública / Leilão'
};

const LEGAL_STAGE_INDEXES = {
  none: -1,
  initial_delay: 0,
  extrajudicial_collection: 1,
  legal_action: 2,
  asset_enforcement: 3,
  public_auction: 4
};

export const LegalRiskChart = ({ panelNumber, scenarioLabel, scenarioColor, questionnaireAnswers, compact = false }) => {
  const { number: configuredNumber, title, subtitle, badge, currentSituation, stages, disclaimer } = LEGAL_RISK_CONFIG;
  const number = panelNumber ?? configuredNumber;
  const answeredLegalStage = questionnaireAnswers?.legal_stage?.optionId;
  const displayedSituation = LEGAL_STAGE_LABELS[answeredLegalStage] ?? currentSituation;
  const currentStageIndex = LEGAL_STAGE_INDEXES[answeredLegalStage] ?? -1;

  return (
    <PanelShell number={number} title={title} subtitle={subtitle} badge={badge} disclaimer={disclaimer} compact={compact}>
      <div className="flex h-full min-h-0 flex-col">
        <MetricBand
          left={
            <SummaryItem
              icon={<Scales className="h-[27px] w-[27px]" weight="regular" />}
              label="Situação atual"
              value={displayedSituation}
              iconWrapClassName="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#1c2d7f]"
            />
          }
          right={<ScenarioSummaryItem scenarioLabel={scenarioLabel} scenarioColor={scenarioColor} />}
        />

        <div className={`flex min-h-0 flex-1 flex-col justify-center ${compact ? 'pt-2' : 'pt-[clamp(8px,1.5vh,22px)]'}`}>
          <div className="relative grid shrink-0 grid-cols-5 items-start gap-[clamp(4px,0.8vw,12px)] px-[clamp(0px,0.6vw,8px)]">
            <div
              className={`pointer-events-none absolute left-[10%] right-[10%] grid grid-cols-4 text-center font-medium leading-none text-[#8f9cc7] ${
                compact ? 'top-[18px] text-[13px]' : 'top-[clamp(20px,2.7vw,29px)] text-[clamp(16px,1.7vw,24px)]'
              }`}
            >
              <span>→</span>
              <span>→</span>
              <span>→</span>
              <span>→</span>
            </div>

            {stages.map((stage, stageIndex) => {
              const Icon = stage.icon;
              const isCurrentStage = stageIndex === currentStageIndex;
              const isPastStage = currentStageIndex >= 0 && stageIndex < currentStageIndex;
              const displayedColor = isCurrentStage ? stage.color : isPastStage ? '#9aa7c7' : '#cbd5e1';
              const iconProps =
                stage.icon === DollarSign
                  ? { className: compact ? 'h-5 w-5' : 'h-[clamp(25px,2.7vw,39px)] w-[clamp(25px,2.7vw,39px)]', strokeWidth: 2.1 }
                  : { className: compact ? 'h-5 w-5' : 'h-[clamp(25px,2.7vw,39px)] w-[clamp(25px,2.7vw,39px)]', weight: 'regular' };

              return (
                <div
                  key={stage.label.join(' ')}
                  className={`relative flex min-w-0 flex-col items-center text-center transition-all ${
                    isCurrentStage ? 'z-20 scale-[1.08]' : 'opacity-75'
                  }`}
                >
                  {isCurrentStage ? (
                    <div
                      className="absolute -top-[20px] whitespace-nowrap rounded-full border px-2 py-0.5 text-[7px] font-medium uppercase tracking-[0.1em]"
                      style={{
                        borderColor: `${stage.color}55`,
                        backgroundColor: `${stage.color}12`,
                        color: stage.color
                      }}
                    >
                      Etapa atual
                    </div>
                  ) : null}
                  <div
                    className={`relative z-10 flex items-center justify-center rounded-full border-2 bg-white transition-all ${
                      compact ? 'h-9 w-9' : 'h-[clamp(42px,4vw,58px)] w-[clamp(42px,4vw,58px)]'
                    } ${
                      isCurrentStage ? 'shadow-[0_0_0_5px_rgba(255,255,255,0.95),0_8px_22px_rgba(28,45,127,0.2)]' : ''
                    }`}
                    style={{ borderColor: displayedColor, color: displayedColor }}
                  >
                    <Icon {...iconProps} />
                  </div>

                  <div
                    className={`font-bold leading-tight ${
                      compact ? 'mt-1 min-h-[24px] text-[7px]' : 'mt-[clamp(6px,1vh,12px)] min-h-[clamp(28px,3vh,36px)] text-[clamp(8px,0.75vw,11px)]'
                    }`}
                    style={{ color: isCurrentStage ? stage.color : displayedColor }}
                  >
                    {stage.label[0]}
                    <br />
                    {stage.label[1]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PanelShell>
  );
};

export const ProductiveCapitalChart = ({ questionnaireAnswers, propertyValue, ...props }) => {
  const answeredCurrentRevenue = questionnaireAnswers?.current_monthly_revenue?.value;
  const answeredPotentialRevenue = questionnaireAnswers?.potential_monthly_revenue?.value;
  const currentRevenue = answeredCurrentRevenue ?? 0;
  const potentialRevenue = answeredPotentialRevenue ?? PRODUCTIVE_CAPITAL_CONFIG.savedValue;
  const workedCapital = propertyValue ?? PRODUCTIVE_CAPITAL_CONFIG.propertyValue;
  const { productiveCapital, unlockedPotential } = calculateProductiveCapital(workedCapital, currentRevenue, potentialRevenue);

  return (
    <EquityComparisonChart
      {...props}
      config={{
        ...PRODUCTIVE_CAPITAL_CONFIG,
        disclaimer: PRODUCTIVE_CAPITAL_CONFIG.disclaimer,
        propertyValue: workedCapital,
        preservedValue: workedCapital,
        lostValue: productiveCapital,
        savedValue: unlockedPotential
      }}
    />
  );
};

// =============================================================================
// GRAFICO 3 - CUSTO DA OPORTUNIDADE
// Configuracao, calculo, formatacao e renderizacao ficam juntos nesta secao.
// =============================================================================

const OPPORTUNITY_COST_CONFIG = {
  number: '3',
  title: 'Custo da Oportunidade',
  subtitle: 'Cada mês de espera representa oportunidades que não voltam mais.',
  badge: 'Impacto acumulativo em 36 meses',
  currentRevenue: 200000,
  growthLabel: 'Agindo agora (crescimento possível)',
  waitingLabel: 'Esperando (oportunidades perdidas)',
  lossSubtitle: 'em 36 meses',
  disclaimer:
    'Compara o faturamento atual com o potencial informado pelo cliente, evidenciando o custo acumulado da inércia ao longo do tempo.',
  timeline: {
    months: [0, 6, 12, 24, 36],
    growthMultipliers: [5, 9, 15.5, 24.5, 36],
    waitingMultipliers: [5, 7.5, 10, 13, 16]
  }
};

const OPPORTUNITY_GROWTH_COLOR = null;

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

const toSafeOpportunityNumber = (value) => {
  const number = Number(value);

  return Number.isFinite(number) ? number : 0;
};

const formatOpportunityValue = (value) => {
  const safeValue = toSafeOpportunityNumber(value);

  if (safeValue === 0) return '0';
  if (safeValue >= 1000000) return `R$ ${(safeValue / 1000000).toFixed(1).replace('.', ',')} mi`;

  return formatCurrency(safeValue);
};

const formatOpportunityAxis = (value) => {
  const safeValue = toSafeOpportunityNumber(value);

  return safeValue === 0 ? '0' : `${safeValue / 1000000}M`;
};

const OpportunityDot = ({ cx, cy, payload, index, dataKey, color }) => {
  if (cx == null || cy == null || !payload) return null;

  const value = toSafeOpportunityNumber(payload[dataKey]);
  const isLast = index === OPPORTUNITY_COST_CONFIG.timeline.months.length - 1;
  const isFirst = index === 0;
  const showLabel = !(isFirst && dataKey === 'growth');
  const labelX = isLast ? cx - 8 : isFirst ? cx + 8 : cx;
  const textAnchor = isLast ? 'end' : isFirst ? 'start' : 'middle';
  const labelY = cy + (dataKey === 'growth' ? -16 : 18);

  return (
    <g>
      <circle cx={cx} cy={cy} r={5.5} fill={color} stroke="#fff" strokeWidth={2.5} />
      {showLabel ? (
        <text
          x={labelX}
          y={labelY}
          textAnchor={textAnchor}
          fill={color}
          fontSize={12}
          fontWeight={700}
          dominantBaseline={dataKey === 'growth' ? 'auto' : 'hanging'}
        >
          {formatOpportunityValue(value)}
        </text>
      ) : null}
    </g>
  );
};

const OpportunityCostPanel = ({ scenarioLabel, scenarioColor }) => {
  const { number, title, subtitle, badge, currentRevenue, timeline, disclaimer } = OPPORTUNITY_COST_CONFIG;
  const { data, opportunityLoss } = calculateOpportunityCostData({ currentRevenue, timeline });
  const growthColor = OPPORTUNITY_GROWTH_COLOR ?? scenarioColor;

  return (
    <PanelShell number={number} title={title} subtitle={subtitle} badge={badge} disclaimer={disclaimer}>
      <div className="flex h-full min-h-0 flex-col">
        <MetricBand
          left={
            <SummaryItem
              icon={<Calendar size={22} strokeWidth={2.5} />}
              label="Faturamento atual"
              value={`${formatCurrency(currentRevenue)}/mês`}
              iconWrapClassName="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#235ce9]"
            />
          }
          right={<ScenarioSummaryItem scenarioLabel={scenarioLabel} scenarioColor={scenarioColor} />}
        />

        <div className="mt-3 grid min-h-0 flex-1 grid-cols-[1fr_112px] gap-3">
          <div className="relative min-h-0">
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center gap-5 text-[9px] font-bold leading-tight text-[#1c2d7f]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-5 rounded-full" style={{ backgroundColor: growthColor }} />
                {OPPORTUNITY_COST_CONFIG.growthLabel}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-5 rounded-full" style={{ backgroundColor: scenarioColor }} />
                {OPPORTUNITY_COST_CONFIG.waitingLabel}
              </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 48, right: 54, left: 2, bottom: 12 }}>
                <defs>
                  <linearGradient id="opportunityGrowthGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={growthColor} stopOpacity={0.55} />
                    <stop offset="100%" stopColor={growthColor} stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="opportunityGrowthFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={growthColor} stopOpacity={0.32} />
                    <stop offset="100%" stopColor={growthColor} stopOpacity={0.04} />
                  </linearGradient>
                  <linearGradient id="opportunityWaitingFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={scenarioColor} stopOpacity={0.22} />
                    <stop offset="100%" stopColor={scenarioColor} stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#e2e8f0" />
                <XAxis
                  dataKey="monthLabel"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: 400 }}
                  tickMargin={6}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: 400 }}
                  tickFormatter={formatOpportunityAxis}
                  domain={[0, 8000000]}
                  ticks={[0, 2000000, 4000000, 6000000, 8000000]}
                  width={46}
                />
                <Area
                  type="monotone"
                  dataKey="growth"
                  stroke="url(#opportunityGrowthGlow)"
                  strokeWidth={2}
                  fill="url(#opportunityGrowthFill)"
                  fillOpacity={1}
                  dot={<OpportunityDot dataKey="growth" color={growthColor} />}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Area
                  type="monotone"
                  dataKey="waiting"
                  stroke={scenarioColor}
                  strokeWidth={2}
                  fill="url(#opportunityWaitingFill)"
                  fillOpacity={1}
                  dot={<OpportunityDot dataKey="waiting" color={scenarioColor} />}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full rounded-[10px] border border-[rgba(28,45,127,0.5)] bg-white px-3 py-4 text-center text-[#1c2d7f] shadow-[0_8px_22px_rgba(28,45,127,0.06)]">
              <div className="text-[9px] font-bold uppercase leading-tight text-[rgba(28,45,127,0.7)]">Perda de</div>
              <div className="mt-1 text-[18px] font-semibold leading-none text-[#e31417]">{formatOpportunityValue(opportunityLoss)}</div>
              <div className="mt-2 text-[9px] font-bold uppercase leading-tight text-[#1c2d7f]">
                {OPPORTUNITY_COST_CONFIG.lossSubtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  );
};

// =============================================================================
// COMPOSICAO DO SLIDE 11
// =============================================================================

export const LegacyProfileInsightsGrid = ({ scenarioId, scenarioLabel, scenarioColor }) => (
  <div className="grid h-full min-h-0 grid-cols-2 grid-rows-2 gap-[4px] overflow-hidden">
    <section className="min-h-0 overflow-hidden bg-white">
      <EquityComparisonChart scenarioId={scenarioId} scenarioLabel={scenarioLabel} scenarioColor={scenarioColor} />
    </section>

    <section className="min-h-0 overflow-hidden bg-white">
      <LegalRiskChart scenarioLabel={scenarioLabel} scenarioColor={scenarioColor} />
    </section>

    <OpportunityCostPanel scenarioLabel={scenarioLabel} scenarioColor={scenarioColor} />

    <EquityComparisonChart config={PRODUCTIVE_CAPITAL_CONFIG} scenarioLabel={scenarioLabel} scenarioColor={scenarioColor} />
  </div>
);
