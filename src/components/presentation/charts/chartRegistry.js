import { AvailableOptionsPanel } from '../shared/AvailableOptionsPanel';
import { FinancialPressurePanel } from '../shared/FinancialPressurePanel';
import { OpportunityCostPanel } from '../shared/OpportunityCostPanel';
import {
  ActNowVsWaitChart,
  GrowthPotentialChart,
  IdlePropertyCostChart,
  PropertyErosionChart,
  RiskExposureMapChart
} from './AdditionalCharts';
import { EquityComparisonChart, LegalRiskChart, ProductiveCapitalChart } from './ProfileInsightCharts';
import { InertiaCostChart, SolutionsComparisonChart } from './StandardCharts';

export const CHART_IDS = {
  FINANCIAL_PRESSURE: 'financial-pressure',
  AVAILABLE_OPTIONS: 'available-options',
  INERTIA_COST: 'inertia-cost',
  SOLUTIONS_COMPARISON: 'solutions-comparison',
  OPPORTUNITY_COST: 'opportunity-cost',
  EQUITY_COMPARISON: 'equity-comparison',
  LEGAL_RISK: 'legal-risk',
  PRODUCTIVE_CAPITAL: 'productive-capital',
  GROWTH_POTENTIAL: 'growth-potential',
  ACT_NOW_VS_WAIT: 'act-now-vs-wait',
  IDLE_PROPERTY_COST: 'idle-property-cost',
  PROPERTY_EROSION: 'property-erosion',
  RISK_EXPOSURE_MAP: 'risk-exposure-map'
};

export const DISABLED_CHART_IDS = new Set([CHART_IDS.AVAILABLE_OPTIONS]);

export const CHART_TITLES = {
  [CHART_IDS.FINANCIAL_PRESSURE]: 'Pressão Financeira',
  [CHART_IDS.INERTIA_COST]: 'Custo Mensal da Inércia',
  [CHART_IDS.SOLUTIONS_COMPARISON]: 'Comparativo de solucoes',
  [CHART_IDS.OPPORTUNITY_COST]: 'Custo da Oportunidade',
  [CHART_IDS.EQUITY_COMPARISON]: 'Patrimônio Preservado vs Patrimônio Perdido',
  [CHART_IDS.LEGAL_RISK]: 'Risco Jurídico Progressivo',
  [CHART_IDS.PRODUCTIVE_CAPITAL]: 'Capital Parado vs Capital Produtivo',
  [CHART_IDS.GROWTH_POTENTIAL]: 'Potencial de crescimento',
  [CHART_IDS.ACT_NOW_VS_WAIT]: 'Agir agora vs esperar',
  [CHART_IDS.IDLE_PROPERTY_COST]: 'Custo do Imóvel Parado',
  [CHART_IDS.PROPERTY_EROSION]: 'Corrosão Patrimonial',
  [CHART_IDS.RISK_EXPOSURE_MAP]: 'Mapa de Exposição ao Risco'
};

export const CHART_NUMBERS = {
  [CHART_IDS.FINANCIAL_PRESSURE]: '1',
  [CHART_IDS.INERTIA_COST]: '3',
  [CHART_IDS.SOLUTIONS_COMPARISON]: '4',
  [CHART_IDS.OPPORTUNITY_COST]: '3',
  [CHART_IDS.EQUITY_COMPARISON]: '1',
  [CHART_IDS.LEGAL_RISK]: '2',
  [CHART_IDS.PRODUCTIVE_CAPITAL]: '4',
  [CHART_IDS.GROWTH_POTENTIAL]: '1',
  [CHART_IDS.ACT_NOW_VS_WAIT]: '3',
  [CHART_IDS.IDLE_PROPERTY_COST]: '1',
  [CHART_IDS.PROPERTY_EROSION]: '2',
  [CHART_IDS.RISK_EXPOSURE_MAP]: '1'
};

export const ACTIVE_CHART_IDS = Object.values(CHART_IDS).filter((chartId) => !DISABLED_CHART_IDS.has(chartId));

export const CHART_LIBRARY = {
  [CHART_IDS.FINANCIAL_PRESSURE]: FinancialPressurePanel,
  [CHART_IDS.AVAILABLE_OPTIONS]: AvailableOptionsPanel,
  [CHART_IDS.INERTIA_COST]: InertiaCostChart,
  [CHART_IDS.SOLUTIONS_COMPARISON]: SolutionsComparisonChart,
  [CHART_IDS.OPPORTUNITY_COST]: OpportunityCostPanel,
  [CHART_IDS.EQUITY_COMPARISON]: EquityComparisonChart,
  [CHART_IDS.LEGAL_RISK]: LegalRiskChart,
  [CHART_IDS.PRODUCTIVE_CAPITAL]: ProductiveCapitalChart,
  [CHART_IDS.GROWTH_POTENTIAL]: GrowthPotentialChart,
  [CHART_IDS.ACT_NOW_VS_WAIT]: ActNowVsWaitChart,
  [CHART_IDS.IDLE_PROPERTY_COST]: IdlePropertyCostChart,
  [CHART_IDS.PROPERTY_EROSION]: PropertyErosionChart,
  [CHART_IDS.RISK_EXPOSURE_MAP]: RiskExposureMapChart
};
