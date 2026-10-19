import { CHART_IDS, CHART_LIBRARY, DISABLED_CHART_IDS } from './chartRegistry';

export const ChartLibraryItem = ({ chartId, context, props }) => {
  if (DISABLED_CHART_IDS.has(chartId)) {
    return null;
  }

  const ChartComponent = CHART_LIBRARY[chartId];

  if (!ChartComponent) {
    throw new Error(`Grafico nao registrado na biblioteca: ${chartId}`);
  }

  return <ChartComponent {...context} {...props} />;
};

export const ChartGridTemplate = ({ charts, context, className = '' }) => {
  const enabledCharts = charts.filter((chart) => !DISABLED_CHART_IDS.has(chart.id));
  const isSixChartGrid = enabledCharts.length === 6;
  const gridClassName = {
    1: 'grid-cols-1 grid-rows-1',
    2: 'grid-cols-2 grid-rows-1',
    3: 'grid-cols-2 grid-rows-2',
    4: 'grid-cols-2 grid-rows-2',
    5: 'grid-cols-6 grid-rows-[1.12fr_0.88fr]',
    6: 'grid-cols-3 grid-rows-2'
  }[enabledCharts.length];

  if (!gridClassName) {
    throw new Error(`Um template de perfil deve conter entre 1 e 5 graficos. Recebidos: ${enabledCharts.length}`);
  }

  return (
    <div className={`grid h-full min-h-0 gap-[5px] overflow-hidden bg-[#e7ebf5] ${gridClassName} ${className}`}>
      {enabledCharts.map((chart, index) => (
        <div
          key={chart.key ?? `${chart.id}-${index}`}
          className={
            isSixChartGrid
              ? 'min-h-0'
              : enabledCharts.length === 5
              ? `${index < 2 ? 'col-span-3' : 'col-span-2'} min-h-0`
              : enabledCharts.length === 3 && index === 0
                ? 'col-span-2 min-h-0'
                : 'min-h-0'
          }
        >
          <ChartLibraryItem
            chartId={chart.id}
            context={context}
            props={{
              panelNumber: String(index + 1),
              compact:
                chart.id === CHART_IDS.RISK_EXPOSURE_MAP ||
                isSixChartGrid ||
                (enabledCharts.length === 5 && index >= 2),
              ...chart.props
            }}
          />
        </div>
      ))}
    </div>
  );
};
