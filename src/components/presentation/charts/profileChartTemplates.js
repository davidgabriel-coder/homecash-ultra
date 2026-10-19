import { CHART_IDS } from './chartRegistry';

const RISK_EXPOSURE_DEBT_ASSOCIATED_PROFILES = new Set([
  'debt_holder',
  'debt_holder_legal',
  'indebted_entrepreneur',
  'indebted_entrepreneur_expansion'
]);

export const PROFILE_CHART_TEMPLATES = {
  other_all: [
    { id: CHART_IDS.IDLE_PROPERTY_COST },
    { id: CHART_IDS.PROPERTY_EROSION }
  ],
  seller_all: [
    { id: CHART_IDS.IDLE_PROPERTY_COST },
    { id: CHART_IDS.PROPERTY_EROSION }
  ],
  entrepreneur_without_debt: [
    { id: CHART_IDS.PRODUCTIVE_CAPITAL },
    { id: CHART_IDS.OPPORTUNITY_COST },
    { id: CHART_IDS.RISK_EXPOSURE_MAP }
  ],
  indebted_entrepreneur_expansion: [
    { id: CHART_IDS.PRODUCTIVE_CAPITAL },
    { id: CHART_IDS.OPPORTUNITY_COST },
    { id: CHART_IDS.FINANCIAL_PRESSURE },
    { id: CHART_IDS.RISK_EXPOSURE_MAP }
  ],
  indebted_entrepreneur: [
    { id: CHART_IDS.PRODUCTIVE_CAPITAL },
    { id: CHART_IDS.OPPORTUNITY_COST },
    { id: CHART_IDS.FINANCIAL_PRESSURE },
    { id: CHART_IDS.RISK_EXPOSURE_MAP }
  ],
  debt_holder_legal: [
    { id: CHART_IDS.LEGAL_RISK },
    { id: CHART_IDS.FINANCIAL_PRESSURE },
    { id: CHART_IDS.INERTIA_COST },
    { id: CHART_IDS.RISK_EXPOSURE_MAP },
    { id: CHART_IDS.EQUITY_COMPARISON },
    { id: CHART_IDS.AVAILABLE_OPTIONS }
  ],
  debt_holder: [
    { id: CHART_IDS.LEGAL_RISK },
    { id: CHART_IDS.FINANCIAL_PRESSURE },
    { id: CHART_IDS.INERTIA_COST },
    { id: CHART_IDS.RISK_EXPOSURE_MAP },
    { id: CHART_IDS.EQUITY_COMPARISON },
    { id: CHART_IDS.AVAILABLE_OPTIONS }
  ],
  entrepreneur: [
    { id: CHART_IDS.PRODUCTIVE_CAPITAL },
    { id: CHART_IDS.OPPORTUNITY_COST },
    { id: CHART_IDS.FINANCIAL_PRESSURE },
    { id: CHART_IDS.RISK_EXPOSURE_MAP }
  ],
  seller: [
    { id: CHART_IDS.AVAILABLE_OPTIONS },
    { id: CHART_IDS.EQUITY_COMPARISON },
    { id: CHART_IDS.FINANCIAL_PRESSURE },
    { id: CHART_IDS.SOLUTIONS_COMPARISON },
    { id: CHART_IDS.RISK_EXPOSURE_MAP }
  ],
  other: [
    { id: CHART_IDS.FINANCIAL_PRESSURE },
    { id: CHART_IDS.AVAILABLE_OPTIONS },
    { id: CHART_IDS.INERTIA_COST },
    { id: CHART_IDS.SOLUTIONS_COMPARISON },
    { id: CHART_IDS.RISK_EXPOSURE_MAP }
  ]
};

export const getProfileChartPages = (profileId) => {
  const template = PROFILE_CHART_TEMPLATES[profileId] ?? PROFILE_CHART_TEMPLATES.other;
  const pages = Array.isArray(template[0]) ? template : [template];

  return pages.map((page) =>
    page.filter(
      (chart) =>
        chart.id !== CHART_IDS.RISK_EXPOSURE_MAP ||
        RISK_EXPOSURE_DEBT_ASSOCIATED_PROFILES.has(profileId)
    )
  );
};

export const getProfileChartTemplate = (profileId, pageIndex = 0) =>
  getProfileChartPages(profileId)[pageIndex] ?? getProfileChartPages(profileId)[0];
