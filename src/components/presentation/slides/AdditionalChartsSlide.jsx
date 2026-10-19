import { ChartGridTemplate } from '../charts/ChartLibrary';
import { CHART_IDS } from '../charts/chartRegistry';

const ADDITIONAL_CHARTS = [
  { id: CHART_IDS.GROWTH_POTENTIAL },
  { id: CHART_IDS.ACT_NOW_VS_WAIT },
  { id: CHART_IDS.IDLE_PROPERTY_COST },
  { id: CHART_IDS.PROPERTY_EROSION }
];

export const AdditionalChartsSlide = (chartContext) => (
  <ChartGridTemplate charts={ADDITIONAL_CHARTS} context={chartContext} />
);
