import Calendar from 'lucide-react/dist/esm/icons/calendar.mjs';
import Gauge from 'lucide-react/dist/esm/icons/gauge.mjs';
import { ChartPanel, PanelShell } from '../shared/ChartPanel';
import { formatCompactCurrency } from '../shared/formatters';

export const InertiaCostChart = ({
  scenarioLabel,
  scenarioColor,
  inertiaCostData,
  panelNumber = '3',
  compact = false,
  gradientId = 'inertiaGradient'
}) => {
  const yAxisMin = Math.min(...inertiaCostData.map((point) => point.value));
  const yAxisMax = Math.max(...inertiaCostData.map((point) => point.value));
  const firstPoint = inertiaCostData[0]?.value ?? 0;
  const lastPoint = inertiaCostData.at(-1)?.value ?? 0;
  const yAxisLowerBound = yAxisMin;
  const yAxisUpperBound = Math.max(yAxisMax, yAxisLowerBound + 1);
  const yAxisTicks = [0, 1, 2, 3, 4].map(
    (step) => yAxisLowerBound + ((yAxisUpperBound - yAxisLowerBound) / 4) * step
  );
  const yAxisDomain = [yAxisLowerBound, yAxisUpperBound];

  return (
    <PanelShell
      number={panelNumber}
      title="Custo Mensal da Inércia"
      subtitle="O custo de esperar é silencioso, mas seu impacto é enorme."
      badge="Acúmulo do custo da inércia"
      disclaimer="O gráfico demonstra o impacto da inércia por meio de um índice proporcional à evolução da pressão financeira, distribuído ao longo do período analisado."
      compact={compact}
    >
      <ChartPanel
        data={inertiaCostData}
        stroke={scenarioColor}
        gradientId={gradientId}
        dotFormat={formatCompactCurrency}
        yTickFormat={formatCompactCurrency}
        yAxisDomain={yAxisDomain}
        yAxisTicks={yAxisTicks}
        yAxisInterval={0}
        dotLabelSize={compact ? 12 : 14}
        className="h-full"
        compact={compact}
        insightItems={[
          { label: 'Custo inicial', value: formatCompactCurrency(firstPoint), color: '#235ce9' },
          { label: 'Após 36 meses', value: formatCompactCurrency(lastPoint), color: scenarioColor },
          { label: 'Leitura', value: 'custo acumulado da espera' }
        ]}
        infoItems={[
          {
            label: 'Período do gráfico',
            value: '3 ANOS',
            iconWrapClassName: 'flex h-11 w-11 items-center justify-center rounded-xl bg-[#1c2d7f] text-white',
            icon: (
              <div className="flex flex-col items-center justify-center leading-none">
                <Calendar size={16} strokeWidth={2.5} />
                <span className="mt-0.5 text-[10px] font-bold">12</span>
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

const SOLUTION_COLUMNS = ['Velocidade', 'Previsibilidade', 'Manutenção do imóvel', 'Flexibilidade', 'Risco jurídico'];
const SOLUTION_ROWS = [
  { label: 'Banco', values: [true, false, true, false, false] },
  { label: 'Home Equity', values: [true, false, true, false, false] },
  { label: 'Venda do imóvel', values: [false, true, false, false, false] },
  { label: 'HomeCash', values: [true, true, true, true, true] }
];

export const SolutionsComparisonChart = ({ panelNumber = '4', scenarioLabel, scenarioColor, compact = false }) => (
  <PanelShell
    number={panelNumber}
    title="Comparativo de soluções"
    subtitle="Compare as principais opções do mercado e entenda por que o HomeCash é diferente."
    badge="Comparação qualitativa das soluções"
    disclaimer="Comparação qualitativa das soluções considerando velocidade, previsibilidade, preservação, flexibilidade e risco."
    className="min-h-0 pb-0"
    compact={compact}
  >
    <div className="flex h-full min-h-0 flex-col">
      <div className="mb-2 grid shrink-0 grid-cols-1 overflow-hidden rounded-[10px] border border-[rgba(28,45,127,0.5)] bg-white">
        <div className="flex min-w-0 items-center gap-3 px-3 py-2.5 uppercase">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: `${scenarioColor}20`, color: scenarioColor }}
          >
            <Gauge size={26} />
          </div>
          <div className="min-w-0">
            <div className="text-[9px] leading-tight text-[rgba(28,45,127,0.7)]">Intensidade</div>
            <div className="mt-1 truncate text-[17px] font-bold leading-tight" style={{ color: scenarioColor }}>
              {scenarioLabel}
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
        <div className="w-full rounded-[18px] border-2 border-[rgba(28,45,127,0.5)] px-[clamp(10px,1.2vw,18px)] py-[clamp(8px,1.2vh,16px)]">
          <div className="grid grid-cols-[minmax(104px,1.7fr)_repeat(5,minmax(54px,1fr))] items-end text-[#1c2d7f]">
            <div />
            {SOLUTION_COLUMNS.map((column) => (
              <div
                key={column}
                className="px-1 pb-[clamp(6px,0.9vh,12px)] text-center text-[clamp(8px,0.7vw,10px)] leading-[1.1]"
              >
                {column}
              </div>
            ))}
          </div>

          <div>
            {SOLUTION_ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[minmax(104px,1.7fr)_repeat(5,minmax(54px,1fr))] items-center border-t border-[#cbd5e1] py-[clamp(7px,1.2vh,13px)] first:border-t-0"
              >
                <div className="pr-3 text-[clamp(10px,0.85vw,13px)] font-bold leading-tight text-[#1c2d7f]">{row.label}</div>
                {row.values.map((value, index) => (
                  <div key={`${row.label}-${index}`} className="flex justify-center px-1">
                    <span
                      className={`h-[clamp(10px,0.9vw,14px)] w-[clamp(10px,0.9vw,14px)] rounded-full ${
                        value ? 'bg-[#13b51e]' : 'bg-[#d1d5db]'
                      }`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex shrink-0 justify-center">
        <div className="rounded-[5px] bg-[#1c2d7f] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#f0f0f0]">
          HomeCash combina velocidade, previsibilidade e preservação do patrimônio.
        </div>
      </div>
    </div>
  </PanelShell>
);
