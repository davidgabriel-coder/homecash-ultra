import { ChartGridTemplate } from '../charts/ChartLibrary';
import { CHART_IDS } from '../charts/chartRegistry';

const PROFILE_INSIGHT_CHARTS = [
  { id: CHART_IDS.EQUITY_COMPARISON },
  { id: CHART_IDS.LEGAL_RISK },
  { id: CHART_IDS.OPPORTUNITY_COST },
  { id: CHART_IDS.PRODUCTIVE_CAPITAL }
];

export const ProfileInsightsSlide = (chartContext) => (
  <ChartGridTemplate charts={PROFILE_INSIGHT_CHARTS} context={chartContext} />
);
