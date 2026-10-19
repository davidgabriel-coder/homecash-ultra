import { ChartGridTemplate } from '../charts/ChartLibrary';
import { CHART_IDS } from '../charts/chartRegistry';

const RESULT_CHARTS = [
  {
    id: CHART_IDS.FINANCIAL_PRESSURE,
    props: {
      config: {
        disclaimer:
          'O gráfico ilustra como situações de pressão financeira tendem a se agravar ao longo do tempo quando não existe uma intervenção estruturada. A modelagem considera fatores frequentemente observados em cenários de endividamento, como acúmulo de encargos, aumento da urgência, perda gradual de poder de negociação e redução das alternativas disponíveis. Os múltiplos apresentados representam um índice relativo de deterioração utilizado para demonstrar visualmente a aceleração do problema ao longo do tempo.'
      }
    }
  },
  {
    id: CHART_IDS.AVAILABLE_OPTIONS,
    props: {
      disclaimer:
        'O gráfico representa a redução progressiva das alternativas disponíveis para resolução da situação ao longo do tempo. A modelagem considera fatores observados em cenários de pressão financeira e patrimonial, como restrição de crédito, redução do poder de negociação, avanço de processos, aumento da urgência e diminuição da atratividade para potenciais compradores ou financiadores. Os percentuais representam um índice de disponibilidade relativa de alternativas utilizado para fins de diagnóstico estratégico.'
    }
  },
  { id: CHART_IDS.INERTIA_COST },
  { id: CHART_IDS.SOLUTIONS_COMPARISON }
];

export const ResultsSlide = (chartContext) => <ChartGridTemplate charts={RESULT_CHARTS} context={chartContext} />;
