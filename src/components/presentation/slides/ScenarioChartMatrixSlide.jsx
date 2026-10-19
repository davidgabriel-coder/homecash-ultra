import { buildDebtProjection } from '../../../domain/debtProjection';
import { DEBT_SCENARIOS, SCENARIO_IDS } from '../../../domain/debtScenarios';
import { ChartLibraryItem } from '../charts/ChartLibrary';
import { CHART_NUMBERS, CHART_TITLES } from '../charts/chartRegistry';

const SCENARIO_ORDER = [SCENARIO_IDS.LOW, SCENARIO_IDS.MODERATE, SCENARIO_IDS.ACCELERATED, SCENARIO_IDS.CRITICAL];

export const ScenarioChartMatrixSlide = ({ chartId, chartProps }) => {
  const chartTitle = CHART_TITLES[chartId] ?? chartId;
  const chartNumber = CHART_NUMBERS[chartId];

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#e7ebf5]">
      <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-[#cbd5e1] bg-white px-7">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#64748b]">Teste de intensidade</div>
          <h1 className="mt-1 text-[26px] font-black leading-none tracking-[-0.04em] text-[#1c2d7f]">{chartTitle}</h1>
        </div>
        <div className="rounded-full bg-[#1c2d7f] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white">
          V1 - V4
        </div>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-[5px] p-[5px]">
        {SCENARIO_ORDER.map((scenarioId) => {
          const scenario = DEBT_SCENARIOS[scenarioId];
          const projectionData = buildDebtProjection({
            scenarioId,
            initialDebt: chartProps.initialDebt,
            debtBreakdown: chartProps.debtBreakdown
          });
          const scenarioContext = {
            ...chartProps,
            scenarioId,
            scenarioLabel: scenario.label,
            scenarioColor: scenario.color,
            pressureData: projectionData.pressureData,
            availableOptionsData: projectionData.availableOptionsData,
            inertiaCostData: projectionData.inertiaCostData
          };

          return (
            <section key={scenarioId} className="min-h-0 overflow-hidden border border-[#d5dbea] bg-white">
              <ChartLibraryItem
                chartId={chartId}
                context={scenarioContext}
                props={{
                  panelNumber: chartNumber,
                  compact: true,
                  gradientId: `${chartId}-${scenarioId}-gradient`,
                  idPrefix: `${chartId}-${scenarioId}`
                }}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
};
