// Public chart library. Keep presentation internals behind this single import path.
export {
  AvailableOptionsPanel,
  AvailableOptionsPanel as AvailableOptionsChart
} from '../../components/presentation/shared/AvailableOptionsPanel';
export {
  FinancialPressurePanel,
  FinancialPressurePanel as FinancialPressureChart
} from '../../components/presentation/shared/FinancialPressurePanel';
export {
  OpportunityCostPanel,
  OpportunityCostPanel as OpportunityCostChart
} from '../../components/presentation/shared/OpportunityCostPanel';

export {
  ActNowVsWaitChart,
  GrowthPotentialChart,
  IdlePropertyCostChart,
  PropertyErosionChart
} from '../../components/presentation/charts/AdditionalCharts';
export {
  EquityComparisonChart,
  EquityComparisonChart as PreservedEquityChart,
  LegacyProfileInsightsGrid,
  LegalRiskChart,
  ProductiveCapitalChart
} from '../../components/presentation/charts/ProfileInsightCharts';
export {
  InertiaCostChart,
  SolutionsComparisonChart
} from '../../components/presentation/charts/StandardCharts';

export {
  ChartGridTemplate,
  ChartLibraryItem
} from '../../components/presentation/charts/ChartLibrary';
export {
  CHART_IDS,
  CHART_LIBRARY
} from '../../components/presentation/charts/chartRegistry';
export {
  PROFILE_CHART_TEMPLATES,
  getProfileChartTemplate
} from '../../components/presentation/charts/profileChartTemplates';
