import { ChartGridTemplate } from '../charts/ChartLibrary';
import { CHART_IDS } from '../charts/chartRegistry';
import { getProfileChartTemplate } from '../charts/profileChartTemplates';

export const ProfileChartsSlide = ({
  profileId,
  diagnosticProfileId,
  questionnaireAnswers,
  profileChartPage = 0,
  ...chartContext
}) => {
  const charts = getProfileChartTemplate(diagnosticProfileId ?? profileId, profileChartPage);
  const visibleCharts =
    questionnaireAnswers?.legal_stage?.optionId === 'none'
      ? charts.filter((chart) => chart.id !== CHART_IDS.LEGAL_RISK)
      : charts;

  return (
    <ChartGridTemplate
      charts={visibleCharts}
      context={{ profileId, diagnosticProfileId, questionnaireAnswers, ...chartContext }}
    />
  );
};
