import { SCENARIO_IDS } from '../../../domain/debtScenarios';
import { buildIdlePropertyCostProjection } from '../../../domain/chartCalculations';
import { FinancialPressurePanel } from '../shared/FinancialPressurePanel';
import { OpportunityCostPanel } from '../shared/OpportunityCostPanel';
import { PanelShell } from '../shared/ChartPanel';
import { formatCurrency } from '../shared/formatters';
import { EquityComparisonChart } from './ProfileInsightCharts';
import Gauge from 'lucide-react/dist/esm/icons/gauge.mjs';
import ShieldAlert from 'lucide-react/dist/esm/icons/shield-alert.mjs';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts';

const CURRENT_REVENUE = 200000;
const CURRENT_PROPERTY_VALUE = 2000000;
const toSafeNumber = (value) => {
  const number = Number(value);

  return Number.isFinite(number) ? number : 0;
};

const EXPOSURE_QUESTION_CONFIG = {
  financial: {
    label: 'Financeiro',
    questionIds: ['main_situation', 'business_main_situation', 'selling_main_situation', 'other_main_situation'],
    optionCount: 6
  },
  legal: {
    label: 'Jurídico',
    questionIds: ['legal_stage'],
    optionCount: 6,
    zeroOptionIds: new Set(['none'])
  },
  time: {
    label: 'Tempo',
    questionIds: ['problem_duration', 'selling_duration'],
    optionCount: 5
  },
  patrimonial: {
    label: 'Patrimonial',
    questionIds: ['scenario_feeling'],
    optionCount: 5
  }
};

const EXPOSURE_AXIS_ORDER = ['financial', 'legal', 'time', 'patrimonial'];

const getAnswerScore = (answer, config) => {
  if (!answer) return 0;
  if (config.zeroOptionIds?.has(answer.optionId)) return 0;

  const optionIndex = Number(answer.optionIndex);
  const optionCount = Math.max(config.optionCount ?? 1, 1);
  const hasZeroOption = config.zeroOptionIds?.size > 0;
  const scaleIndex = hasZeroOption ? optionIndex - 1 : optionIndex;
  const scaleSteps = hasZeroOption ? optionCount - 2 : optionCount - 1;

  if (!Number.isFinite(scaleIndex) || scaleIndex < 0) return 0;
  if (scaleSteps <= 0) return 100;

  return Math.round(10 + (Math.min(scaleIndex, scaleSteps) / scaleSteps) * 90);
};

const getExposureAnswer = (answers, questionIds) => questionIds.map((questionId) => answers?.[questionId]).find(Boolean);

const buildRiskExposureData = (questionnaireAnswers) =>
  EXPOSURE_AXIS_ORDER.map((key) => {
    const config = EXPOSURE_QUESTION_CONFIG[key];
    const answer = getExposureAnswer(questionnaireAnswers, config.questionIds);

    return {
      key,
      area: config.label,
      value: getAnswerScore(answer, config)
    };
  });

const getDominantExposure = (data) =>
  data.reduce((dominant, item) => (item.value > dominant.value ? item : dominant), data[0] ?? { area: 'Sem dados', value: 0 });

const getExposureMessage = (dominantExposure, scenarioLabel) => {
  if (!dominantExposure?.value) {
    return 'As respostas ainda não indicam uma área dominante de exposição ao risco.';
  }

  return `A combinação de exposição ${dominantExposure.area.toLowerCase()} e intensidade ${scenarioLabel.toLowerCase()} indica quais áreas exigem mais atenção neste momento.`;
};

const GROWTH_POTENTIAL_DATA = [
  { month: '0 meses', value: CURRENT_REVENUE },
  { month: '6 meses', value: 260000 },
  { month: '12 meses', value: 340000 },
  { month: '18 meses', value: 440000 },
  { month: '24 meses', value: 560000 },
  { month: '30 meses', value: 680000 },
  { month: '36 meses', value: 800000 }
];

const formatGrowthValue = (value) => `R$ ${Math.round(toSafeNumber(value) / 1000)} mil`;
const formatGrowthAxis = (value) => {
  const safeValue = toSafeNumber(value);

  return safeValue === 1000000 ? '1,0 mi' : safeValue === 0 ? '0' : `${safeValue / 1000} mil`;
};

const GROWTH_POTENTIAL_CONFIG = {
  title: 'Potencial de crescimento',
  subtitle: 'Veja o quanto seu negócio pode crescer com o capital certo no momento certo.',
  badge: 'Crescimento potencial projetado',
  metricLabel: 'Faturamento atual',
  metricValue: `${formatCurrency(CURRENT_REVENUE)}/mês`,
  gradientId: 'growthPotentialGradient',
  problemTimeLabel: '3 ANOS',
  calendarDayLabel: '36',
  dotFormat: formatGrowthValue,
  yTickFormat: formatGrowthAxis,
  yAxisDomain: [CURRENT_REVENUE, 1000000],
  yAxisTicks: [CURRENT_REVENUE, 400000, 600000, 800000, 1000000],
  disclaimer:
    'O gráfico demonstra a diferença entre a situação atual e o potencial de crescimento informado pelo cliente. A modelagem considera os objetivos declarados durante o diagnóstico e o impacto esperado da utilização dos recursos pretendidos. Seu objetivo é ilustrar visualmente o crescimento potencial associado à redução das restrições financeiras ou operacionais atualmente existentes.'
};

const formatIdlePropertyCostValue = (value) => {
  const safeValue = toSafeNumber(value);

  return safeValue === 0 ? 'R$ 0' : `R$ ${Math.round(safeValue / 1000)} mil`;
};
const formatIdlePropertyCostAxis = (value) => {
  const safeValue = toSafeNumber(value);

  if (safeValue === 0) return '0';
  if (Math.abs(safeValue) >= 1000000) {
    return `${(safeValue / 1000000).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} mi`;
  }

  return `${Math.round(safeValue / 1000).toLocaleString('pt-BR')} mil`;
};

const IDLE_PROPERTY_COST_CONFIG = {
  title: 'Custo do Imóvel Parado',
  subtitle: 'Um imóvel parado gera custos todos os meses e reduz seu patrimônio.',
  badge: 'Custo mensal acumulado',
  metricLabel: 'Custo mensal estimado',
  metricValue: formatCurrency(5000),
  gradientId: 'idlePropertyCostGradient',
  problemTimeLabel: '3 ANOS',
  calendarDayLabel: '36',
  dotFormat: formatIdlePropertyCostValue,
  yTickFormat: formatIdlePropertyCostAxis,
  yAxisDomain: [0, 500000],
  yAxisTicks: [0, 100000, 200000, 300000, 400000, 500000],
  disclaimer:
    'Projeção baseada no custo mensal informado pelo cliente, acumulado ao longo do período analisado.'
};

const ACT_NOW_VS_WAIT_CONFIG = {
  title: 'Agir agora vs Esperar',
  subtitle: 'A diferença entre agir e esperar pode definir o futuro do seu negócio.',
  badge: 'Impacto comparado em 36 meses',
  growthLabel: 'Agindo agora (recuperação e crescimento)',
  waitingLabel: 'Esperando (deterioração do cenário)',
  lossTitle: 'Diferença de',
  lossSubtitle: 'no resultado final',
  data: [
    { month: 0, monthLabel: '0 meses', growth: 1500000, waiting: 1500000 },
    { month: 6, monthLabel: '6 meses', growth: 2500000, waiting: 1500000 },
    { month: 12, monthLabel: '12 meses', growth: 3800000, waiting: 1500000 },
    { month: 24, monthLabel: '24 meses', growth: 5000000, waiting: 1500000 },
    { month: 36, monthLabel: '36 meses', growth: 6000000, waiting: 1500000 }
  ],
  opportunityLoss: 4500000,
  yAxisDomain: [0, 8000000],
  yAxisTicks: [0, 2000000, 4000000, 6000000, 8000000],
  disclaimer:
    'O gráfico compara dois cenários estratégicos: atuação imediata e permanência da situação atual. A modelagem considera os efeitos acumulados do tempo sobre custos financeiros, redução de alternativas, deterioração patrimonial e perda de oportunidades econômicas. Seu objetivo é demonstrar visualmente como pequenas diferenças de tempo podem produzir impactos relevantes sobre o resultado final disponível ao proprietário.'
};

const ACT_NOW_VS_WAIT_MULTIPLIERS = {
  [SCENARIO_IDS.LOW]: { actingNow: 1.05, waiting: 0.9 },
  [SCENARIO_IDS.MODERATE]: { actingNow: 1.15, waiting: 0.75 },
  [SCENARIO_IDS.ACCELERATED]: { actingNow: 1.3, waiting: 0.55 },
  [SCENARIO_IDS.CRITICAL]: { actingNow: 1.45, waiting: 0.3 }
};

const PROPERTY_EROSION_PERCENTAGES = {
  [SCENARIO_IDS.LOW]: [100, 98, 96, 94, 92, 91, 90],
  [SCENARIO_IDS.MODERATE]: [100, 94, 88, 84, 80, 77, 75],
  [SCENARIO_IDS.ACCELERATED]: [100, 92, 85, 76, 68, 61, 55],
  [SCENARIO_IDS.CRITICAL]: [100, 88, 76, 64, 52, 43, 35]
};

const getPropertyCorrosionPercentage = (scenarioId) => {
  const percentages = PROPERTY_EROSION_PERCENTAGES[scenarioId] ?? PROPERTY_EROSION_PERCENTAGES[SCENARIO_IDS.LOW];

  return percentages.at(-1) ?? 100;
};

const PROPERTY_CORROSION_CONFIG = {
  number: '2',
  title: 'Corrosão Patrimonial',
  subtitle: 'Veja o efeito da corrosão sobre o valor percebido do imóvel ao longo do tempo.',
  badge: 'Comparativo em 36 meses',
  metricLabel: 'Valor atual do imóvel',
  chartHeading: 'Impacto potencial da corrosão patrimonial',
  propertyValue: CURRENT_PROPERTY_VALUE,
  preservedValue: CURRENT_PROPERTY_VALUE,
  lostValue: CURRENT_PROPERTY_VALUE * 0.9,
  savedValue: CURRENT_PROPERTY_VALUE * 0.1,
  calloutTitle: 'Corrosão de',
  calloutSubtitle: 'em 36 meses',
  leftLabel: 'Valor atual',
  leftSublabel: '(hoje)',
  rightLabel: 'Valor projetado',
  rightSublabel: '(após 36 meses)',
  disclaimer:
    'Modelagem que projeta a preservação patrimonial com base na intensidade identificada no diagnóstico e em índices de deterioração observados em cenários semelhantes.'
};

const RISK_EXPOSURE_CONFIG = {
  title: 'Mapa de Exposição ao Risco',
  subtitle: 'Entenda onde estão os principais riscos do seu cenário atual.',
  badge: 'Exposição por área',
  disclaimer:
    'Índice calculado pela consolidação das informações coletadas na entrevista inicial.'
};

const RiskExposureSummaryItem = ({ icon, label, value, iconWrapClassName, style, valueClassName }) => (
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

const RiskExposureMetricBand = ({ left, right }) => (
  <div className="grid shrink-0 grid-cols-2 overflow-hidden rounded-[10px] border border-[rgba(28,45,127,0.5)] bg-white">
    {left}
    <div className="border-l border-[#e2e8f0]">{right}</div>
  </div>
);

const ExposureAxisTick = ({ x, y, payload, data }) => {
  const item = data.find((entry) => entry.area === payload.value);
  const value = item?.value ?? 0;
  const tickLayout = {
    Financeiro: { textAnchor: 'middle', horizontalOffset: 0, labelY: -36, valueY: -16 },
    Jurídico: { textAnchor: 'start', horizontalOffset: 16, labelY: -12, valueY: 10 },
    Tempo: { textAnchor: 'middle', horizontalOffset: 0, labelY: 24, valueY: 44 },
    Patrimonial: { textAnchor: 'end', horizontalOffset: -16, labelY: -12, valueY: 10 }
  };
  const { textAnchor, horizontalOffset, labelY, valueY } = tickLayout[payload.value] ?? tickLayout.Financeiro;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={horizontalOffset} y={labelY} textAnchor={textAnchor} fill="#1c2d7f" fontSize={12} fontWeight={700}>
        {payload.value}
      </text>
      <text
        x={horizontalOffset}
        y={valueY}
        textAnchor={textAnchor}
        fill="#ef1d1d"
        fontSize={12}
        fontWeight={700}
      >
        {value}
      </text>
    </g>
  );
};

export const RiskExposureMapChart = ({
  questionnaireAnswers,
  scenarioLabel,
  scenarioColor,
  panelNumber = '1',
  compact = false
}) => {
  const exposureData = buildRiskExposureData(questionnaireAnswers);
  const dominantExposure = getDominantExposure(exposureData);
  const radarColor = scenarioColor ?? '#ef1d1d';
  const summaryMessage = getExposureMessage(dominantExposure, scenarioLabel);

  return (
    <PanelShell
      number={panelNumber}
      title={RISK_EXPOSURE_CONFIG.title}
      subtitle={RISK_EXPOSURE_CONFIG.subtitle}
      badge={RISK_EXPOSURE_CONFIG.badge}
      disclaimer={RISK_EXPOSURE_CONFIG.disclaimer}
      compact={compact}
    >
      <div className="flex h-full min-h-0 flex-col">
        <RiskExposureMetricBand
          left={
            <RiskExposureSummaryItem
              icon={<ShieldAlert size={27} strokeWidth={2.3} />}
              label="Risco predominante"
              value={dominantExposure.area}
              iconWrapClassName="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#1c2d7f]"
              valueClassName="mt-1 truncate text-[17px] font-bold leading-tight text-[#1c2d7f]"
            />
          }
          right={
            <RiskExposureSummaryItem
              icon={<Gauge size={26} />}
              label="Intensidade"
              value={<span style={{ color: radarColor }}>{scenarioLabel}</span>}
              iconWrapClassName="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
              valueClassName="mt-1 truncate text-[17px] font-bold leading-tight"
              style={{ backgroundColor: `${radarColor}20`, color: radarColor }}
            />
          }
        />

      <div className="mt-3 min-h-0 flex-1">
        <div className="text-center text-[13px] font-medium uppercase tracking-[0.02em] text-[#1c2d7f]">
          Nível de exposição por área (0 a 100)
        </div>
        <div className="h-[calc(100%-22px)] min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={exposureData} outerRadius={compact ? "58%" : "64%"}>
              <PolarGrid gridType="polygon" stroke="#d8e0ef" />
              <PolarAngleAxis
                dataKey="area"
                tick={(props) => <ExposureAxisTick {...props} data={exposureData} />}
              />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tickCount={5} stroke="#cbd5e1" tick={false} />
              <Radar
                dataKey="value"
                stroke={radarColor}
                fill={radarColor}
                fillOpacity={0.18}
                strokeWidth={2.5}
                dot={{ r: 5, fill: radarColor, stroke: '#fff', strokeWidth: 2 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {!compact ? (
        <div className="mt-3 shrink-0 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-[16px] font-bold leading-snug text-red-600">
          {summaryMessage}
        </div>
      ) : null}
      </div>
    </PanelShell>
  );
};

export const GrowthPotentialChart = ({ questionnaireAnswers, gradientId, ...props }) => {
  const currentRevenue = questionnaireAnswers?.current_monthly_revenue?.value ?? CURRENT_REVENUE;
  const potentialRevenue = questionnaireAnswers?.potential_monthly_revenue?.value;
  const targetRevenue = potentialRevenue > 0 ? potentialRevenue : GROWTH_POTENTIAL_DATA.at(-1).value;
  const growthData = GROWTH_POTENTIAL_DATA.map(({ month }, index) => ({
    month,
    value: currentRevenue + (targetRevenue - currentRevenue) * (index / (GROWTH_POTENTIAL_DATA.length - 1))
  }));

  return (
    <FinancialPressurePanel
      {...props}
      questionnaireAnswers={questionnaireAnswers}
      initialDebt={currentRevenue}
      pressureData={growthData}
      config={{
        ...GROWTH_POTENTIAL_CONFIG,
        ...(gradientId ? { gradientId } : {}),
        metricValue: `${formatCurrency(currentRevenue)}/mês`,
        yAxisDomain: [Math.min(currentRevenue, targetRevenue), Math.max(currentRevenue, targetRevenue)],
        yAxisTicks: undefined
      }}
    />
  );
};

export const ActNowVsWaitChart = ({ questionnaireAnswers, idPrefix, scenarioId, ...props }) => {
  const currentRevenue = questionnaireAnswers?.current_monthly_revenue?.value;
  const hasRevenueProjection = currentRevenue > 0;
  const multipliers = ACT_NOW_VS_WAIT_MULTIPLIERS[scenarioId] ?? ACT_NOW_VS_WAIT_MULTIPLIERS[SCENARIO_IDS.LOW];
  const data = hasRevenueProjection
    ? [0, 6, 12, 24, 36].map((month) => ({
        month,
        monthLabel: `${month} meses`,
        growth: currentRevenue * (1 + (multipliers.actingNow - 1) * (month / 36)),
        waiting: currentRevenue * (1 + (multipliers.waiting - 1) * (month / 36))
      }))
    : ACT_NOW_VS_WAIT_CONFIG.data;
  const lastPoint = data[data.length - 1];
  const maxValue = Math.max(...data.flatMap((point) => [point.growth, point.waiting]));

  return (
    <OpportunityCostPanel
      {...props}
      idPrefix={idPrefix ?? 'actNowVsWait'}
      config={{
        ...ACT_NOW_VS_WAIT_CONFIG,
        data,
        opportunityLoss: lastPoint.growth - lastPoint.waiting,
        yAxisDomain: [0, maxValue * 1.15],
        yAxisTicks: undefined
      }}
    />
  );
};

export const IdlePropertyCostChart = ({ questionnaireAnswers, gradientId, ...props }) => {
  const monthlyPropertyCost = questionnaireAnswers?.monthly_property_cost?.value;
  const hasAnsweredCost = monthlyPropertyCost != null;
  const displayedMonthlyPropertyCost = hasAnsweredCost ? monthlyPropertyCost : 5000;
  const pressureData = buildIdlePropertyCostProjection(displayedMonthlyPropertyCost);
  const maxCost = Math.max(...pressureData.map((point) => point.value), 0);
  const yAxisMax = maxCost || 1;
  const yAxisTicks = maxCost > 0 ? [0, 0.25, 0.5, 0.75, 1].map((ratio) => maxCost * ratio) : [0];

  return (
    <FinancialPressurePanel
      {...props}
      questionnaireAnswers={questionnaireAnswers}
      initialDebt={0}
      pressureData={pressureData}
      config={{
        ...IDLE_PROPERTY_COST_CONFIG,
        ...(gradientId ? { gradientId } : {}),
        metricValue: formatCurrency(displayedMonthlyPropertyCost),
        yAxisDomain: [0, yAxisMax],
        yAxisTicks
      }}
    />
  );
};

export const PropertyErosionChart = ({ scenarioId, propertyValue, ...props }) => {
  const answeredPropertyValue = toSafeNumber(propertyValue) || CURRENT_PROPERTY_VALUE;
  const finalPercentage = getPropertyCorrosionPercentage(scenarioId);
  const corrodedPropertyValue = answeredPropertyValue * (finalPercentage / 100);
  const corrosionValue = answeredPropertyValue - corrodedPropertyValue;

  return (
    <EquityComparisonChart
    {...props}
    scenarioId={scenarioId}
    config={{
      ...PROPERTY_CORROSION_CONFIG,
      propertyValue: answeredPropertyValue,
      preservedValue: answeredPropertyValue,
      lostValue: corrodedPropertyValue,
      savedValue: corrosionValue,
      calloutSubtitle: `(${100 - finalPercentage}% do valor atual)`
    }}
    />
  );
};
