import Calendar from 'lucide-react/dist/esm/icons/calendar.mjs';
import CircleDollarSign from 'lucide-react/dist/esm/icons/circle-dollar-sign.mjs';
import Gauge from 'lucide-react/dist/esm/icons/gauge.mjs';
import { ChartPanel, PanelShell } from './ChartPanel';
import { formatCompactCurrency, formatCurrency } from './formatters';

const formatPressureCurrency = (value) => {
  const safeValue = Number(value) || 0;
  const absoluteValue = Math.abs(safeValue);

  if (absoluteValue >= 1000000) {
    return `R$ ${(safeValue / 1000000).toFixed(2).replace('.', ',')} mi`;
  }

  return formatCompactCurrency(safeValue);
};

const DEFAULT_CONFIG = {
  title: 'Pressão Financeira',
  subtitle: 'Projeção de 36 meses com juros compostos e intensidade do cenário.',
  badge: 'Soma das modalidades + intensidade',
  metricLabel: 'Passivo inicial',
  metricValue: null,
  gradientId: 'pressureGradient',
  problemTimeLabel: '3 ANOS',
  calendarDayLabel: '36',
  chartStroke: null,
  dotFormat: formatPressureCurrency,
  yTickFormat: formatPressureCurrency,
  yAxisDomain: null,
  yAxisTicks: null,
  disclaimer:
    'Projeção baseada nas informações do diagnóstico e calibrada por parâmetros estatísticos da nossa base histórica.'
};

export const FinancialPressurePanel = ({
  scenarioLabel,
  scenarioColor,
  initialDebt,
  pressureData,
  panelNumber = '1',
  compact = false,
  gradientId,
  config = DEFAULT_CONFIG
}) => {
  const panelConfig = {
    ...DEFAULT_CONFIG,
    ...config,
    ...(gradientId ? { gradientId } : {}),
    problemTimeLabel: '3 ANOS'
  };
  const pressureSeries = pressureData.series;
  const hasMultiplePressureSeries = pressureSeries?.length > 0;
  const pressureValues = pressureData.flatMap((point) =>
    pressureSeries?.length ? pressureSeries.map((serie) => point[serie.key] ?? 0) : [point.value]
  );
  const pressureYAxisMin = hasMultiplePressureSeries ? Math.min(...pressureValues) : initialDebt;
  const pressureYAxisMax = Math.max(...pressureValues);
  const pressureYAxisTicks = hasMultiplePressureSeries
    ? [0, 1, 2, 3, 4].map((step) => pressureYAxisMin + ((pressureYAxisMax - pressureYAxisMin) / 4) * step)
    : initialDebt > 0
      ? [0, 1, 2, 3, 4].map((step) => initialDebt + ((pressureYAxisMax - initialDebt) / 4) * step)
      : undefined;
  const pressureYAxisDomain = hasMultiplePressureSeries
    ? [pressureYAxisMin, pressureYAxisMax]
    : initialDebt > 0
      ? [initialDebt, pressureYAxisMax]
      : [0, 'dataMax'];
  const metricValue = panelConfig.metricValue ?? formatCurrency(initialDebt);
  const chartStroke = panelConfig.chartStroke ?? scenarioColor;
  const hasPressureMethodology = pressureData.series?.some((serie) => serie.isTotal) && pressureData.defensiveCostRate != null;
  const debtModalityCount = pressureData.series?.filter((serie) => !serie.isTotal).length ?? 0;
  const pressureInsightItems = hasPressureMethodology
    ? [
        {
          label: 'Modalidades',
          value: debtModalityCount > 0 ? `${debtModalityCount} ativas` : 'sem detalhe',
          color: chartStroke
        },
        {
          label: 'Intensidade',
          value: `${Math.round(pressureData.defensiveCostRate * 100)}%`,
          color: scenarioColor
        },
        {
          label: 'Acréscimo 36m',
          value: formatPressureCurrency(pressureData.finalDefensiveCost),
          color: scenarioColor
        }
      ]
    : undefined;

  return (
    <PanelShell
      number={panelNumber}
      title={panelConfig.title}
      subtitle={panelConfig.subtitle}
      badge={panelConfig.badge}
      disclaimer={panelConfig.disclaimer}
      compact={compact}
    >
      <ChartPanel
        data={pressureData}
        stroke={chartStroke}
        series={pressureSeries}
        gradientId={panelConfig.gradientId}
        dotFormat={panelConfig.dotFormat}
        yTickFormat={panelConfig.yTickFormat}
        yAxisDomain={panelConfig.yAxisDomain ?? pressureYAxisDomain}
        yAxisTicks={panelConfig.yAxisTicks ?? pressureYAxisTicks}
        yAxisInterval={0}
        xAxisInterval={hasMultiplePressureSeries && compact ? 1 : 0}
        axisTickWeight={500}
        dotLabelSize={12}
        dotLabelWeight={500}
        badge={null}
        insightItems={pressureInsightItems}
        className="h-full"
        compact={compact}
        infoItems={[
          {
            label: panelConfig.metricLabel,
            value: metricValue,
            iconWrapClassName: 'flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600',
            icon: <CircleDollarSign size={26} />,
            valueClassName: 'mt-1 text-[17px] font-bold leading-tight text-[#1c2d7f]'
          },
          {
            label: 'Período do gráfico',
            value: panelConfig.problemTimeLabel,
            iconWrapClassName: 'flex h-11 w-11 items-center justify-center rounded-xl bg-[#1c2d7f] text-white',
            icon: (
              <div className="flex flex-col items-center justify-center leading-none">
                <Calendar size={16} strokeWidth={2.5} />
                <span className="mt-0.5 text-[10px] font-bold">{panelConfig.calendarDayLabel}</span>
              </div>
            ),
            valueClassName: 'mt-1 text-[17px] font-bold leading-tight text-[#1c2d7f]'
          },
          {
            label: 'Intensidade',
            value: <span style={{ color: scenarioColor }}>{scenarioLabel}</span>,
            iconWrapClassName: 'flex h-11 w-11 items-center justify-center rounded-full text-white',
            icon: <Gauge size={26} />,
            valueClassName: 'mt-1 text-[17px] font-bold leading-tight',
            style: { backgroundColor: `${scenarioColor}20`, color: scenarioColor }
          }
        ]}
      />
    </PanelShell>
  );
};
