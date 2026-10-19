# Chart library

Importe os graficos por este ponto unico:

```jsx
import {
  CHART_IDS,
  ChartGridTemplate,
  FinancialPressurePanel,
  InertiaCostChart
} from './lib/charts';
```

Os componentes continuam em suas pastas originais para preservar a aplicacao
atual. Esta pasta define apenas a API publica e centralizada dos graficos.

## Graficos disponiveis

- `FinancialPressureChart` - Pressao financeira
- `AvailableOptionsChart` - Tempo vs opcoes disponiveis
- `LegalRiskChart` - Risco juridico
- `PreservedEquityChart` - Patrimonio preservado vs patrimonio perdido
- `InertiaCostChart` - Custo da inercia
- `ProductiveCapitalChart` - Capital parado vs capital produtivo
- `OpportunityCostChart` - Custo da oportunidade
- `GrowthPotentialChart` - Potencial de crescimento
- `ActNowVsWaitChart` - Agir agora vs esperar
- `IdlePropertyCostChart` - Custo do imovel parado
- `PropertyErosionChart` - CORROSAO PATRIMONIAL
