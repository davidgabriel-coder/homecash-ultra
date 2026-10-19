export const SCENARIO_IDS = {
  LOW: 'low',
  MODERATE: 'moderate',
  ACCELERATED: 'accelerated',
  CRITICAL: 'critical'
};

export const DEFAULT_SCENARIO_ID = SCENARIO_IDS.LOW;

export function calculateIntensityByMaxScore(score, maxScore) {
  const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;

  if (percentage <= 25) return SCENARIO_IDS.LOW;
  if (percentage <= 50) return SCENARIO_IDS.MODERATE;
  if (percentage <= 75) return SCENARIO_IDS.ACCELERATED;
  return SCENARIO_IDS.CRITICAL;
}

export const DEBT_SCENARIOS = {
  [SCENARIO_IDS.LOW]: {
    id: SCENARIO_IDS.LOW,
    label: 'Baixa (V1)',
    rate: 0.01,
    color: '#3b82f6'
  },
  [SCENARIO_IDS.MODERATE]: {
    id: SCENARIO_IDS.MODERATE,
    label: 'Moderada (V2)',
    rate: 0.02,
    color: '#8b5cf6'
  },
  [SCENARIO_IDS.ACCELERATED]: {
    id: SCENARIO_IDS.ACCELERATED,
    label: 'Alta (V3)',
    rate: 0.035,
    color: '#f97316'
  },
  [SCENARIO_IDS.CRITICAL]: {
    id: SCENARIO_IDS.CRITICAL,
    label: 'Crítica (V4)',
    rate: 0.05,
    color: '#ef4444'
  }
};

export function getDebtScenario(scenarioId) {
  return DEBT_SCENARIOS[scenarioId] ?? DEBT_SCENARIOS[DEFAULT_SCENARIO_ID];
}
