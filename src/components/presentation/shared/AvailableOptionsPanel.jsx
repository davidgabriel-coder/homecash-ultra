import Calendar from 'lucide-react/dist/esm/icons/calendar.mjs';
import Gauge from 'lucide-react/dist/esm/icons/gauge.mjs';
import { ChartPanel, PanelShell } from './ChartPanel';
import { formatPercentage } from './formatters';

export const AvailableOptionsPanel = ({
  scenarioLabel,
  scenarioColor,
  availableOptionsData,
  panelNumber = '2',
  title = 'Tempo vs Opções disponíveis',
  gradientId = 'availableOptionsGradient',
  subtitle = 'Quanto mais tempo passa, menos alternativas você possui para resolver.',
  badge = 'Redução progressiva das alternativas',
  metricLabel = 'Período do gráfico',
  metricValue,
  metricIcon = <Calendar size={16} strokeWidth={2.5} />,
  metricIconWrapClassName = 'flex h-11 w-11 items-center justify-center rounded-full bg-[#1c2d7f] text-white',
  dotFormat = formatPercentage,
  yTickFormat = formatPercentage,
  yAxisDomain,
  yAxisTicks,
  compact = false,
  disclaimer = 'O gráfico representa a redução progressiva das alternativas disponíveis para resolução da situação ao longo do tempo. A modelagem considera fatores observados em cenários de pressão financeira e patrimonial, como restrição de crédito, redução do poder de negociação, avanço de processos, aumento da urgência e diminuição da atratividade para potenciais compradores ou financiadores. Os percentuais representam um índice de disponibilidade relativa de alternativas utilizado para fins de diagnóstico estratégico.'
}) => {
  const displayedMetricValue = metricValue ?? '3 ANOS';
  const firstPoint = availableOptionsData[0]?.value ?? 0;
  const lastPoint = availableOptionsData.at(-1)?.value ?? 0;

  return (
  <PanelShell
    number={panelNumber}
    title={title}
    subtitle={subtitle}
    badge={badge}
    disclaimer={disclaimer}
    compact={compact}
  >
    <ChartPanel
      data={availableOptionsData}
      stroke={scenarioColor}
      gradientId={gradientId}
      dotFormat={dotFormat}
      yTickFormat={yTickFormat}
      yAxisDomain={yAxisDomain}
      yAxisTicks={yAxisTicks}
      badge={null}
      compact={compact}
      dotLabelSize={compact ? 12 : 14}
      insightItems={[
        { label: 'Início', value: dotFormat(firstPoint), color: '#235ce9' },
        { label: 'Após 36 meses', value: dotFormat(lastPoint), color: scenarioColor },
        { label: 'Leitura', value: 'menos alternativas' }
      ]}
      infoItems={[
        {
          label: metricLabel,
          value: displayedMetricValue,
          iconWrapClassName: metricIconWrapClassName,
          icon: metricIcon,
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
