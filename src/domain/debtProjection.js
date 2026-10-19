import { SCENARIO_IDS } from './debtScenarios';

const PROJECTION_MONTHS = [0, 6, 12, 18, 24, 30, 36];

const FINANCIAL_PRESSURE_LINES = [
  {
    key: 'workingCapital',
    label: 'Capital de Giro',
    baseValue: 5000,
    annualRate: 0.2,
    color: '#2563eb'
  },
  {
    key: 'overdraft',
    label: 'Cheque Especial',
    baseValue: 15000,
    annualRate: 1.4,
    color: '#8FC856'
  },
  {
    key: 'creditCard',
    label: 'Cartao de Credito',
    baseValue: 7000,
    annualRate: 4.3,
    color: '#7c3aed'
  },
  {
    key: 'cgi',
    label: 'CGI',
    baseValue: 755000,
    annualRate: 0.3,
    color: '#0891b2'
  },
  {
    key: 'otherDebts',
    label: 'Outros',
    baseValue: 80000,
    annualRate: 0.15,
    color: '#64748b'
  }
];

const INTENSITY_SURCHARGE_RATE_BY_SCENARIO = {
  [SCENARIO_IDS.LOW]: 0.05,
  [SCENARIO_IDS.MODERATE]: 0.1,
  [SCENARIO_IDS.ACCELERATED]: 0.15,
  [SCENARIO_IDS.CRITICAL]: 0.25
};

function getIntensitySurchargeRate(scenarioId) {
  return INTENSITY_SURCHARGE_RATE_BY_SCENARIO[scenarioId] ?? INTENSITY_SURCHARGE_RATE_BY_SCENARIO[SCENARIO_IDS.LOW];
}

const AVAILABLE_OPTIONS_BY_SCENARIO = {
  [SCENARIO_IDS.LOW]: [100, 92, 84, 76, 68, 60, 55],
  [SCENARIO_IDS.MODERATE]: [100, 86, 72, 60, 50, 42, 35],
  [SCENARIO_IDS.ACCELERATED]: [100, 78, 58, 44, 34, 28, 22],
  [SCENARIO_IDS.CRITICAL]: [100, 68, 44, 32, 24, 18, 12]
};

const formatMonthLabel = (month) => (month === 0 ? '0 meses' : `${month} meses`);

export function buildDebtProjection({ scenarioId, initialDebt, debtBreakdown }) {
  const pressureData = buildPressureData(scenarioId, initialDebt, debtBreakdown);

  return {
    pressureData,
    availableOptionsData: buildAvailableOptionsData(scenarioId),
    inertiaCostData: buildInertiaCostData(pressureData)
  };
}

function buildPressureData(scenarioId, initialDebt, debtBreakdown) {
  const referenceDebt = FINANCIAL_PRESSURE_LINES.reduce((total, line) => total + line.baseValue, 0);
  const hasDebtBreakdown = debtBreakdown != null;
  const pressureLines = hasDebtBreakdown
    ? FINANCIAL_PRESSURE_LINES.filter((line) => (Number(debtBreakdown?.[line.key]) || 0) > 0)
    : FINANCIAL_PRESSURE_LINES;
  const scale = referenceDebt > 0 && initialDebt > 0 ? initialDebt / referenceDebt : 0;
  const intensitySurchargeRate = getIntensitySurchargeRate(scenarioId);
  const totalKey = 'total';

  const data = PROJECTION_MONTHS.map((month) => {
    const years = month / 12;
    const point = {
      month: formatMonthLabel(month)
    };
    const compoundedDebt = FINANCIAL_PRESSURE_LINES.reduce((total, line) => {
      const principal =
        hasDebtBreakdown ? Number(debtBreakdown?.[line.key]) || 0 : line.baseValue * scale;
      const projectedValue = principal * (1 + line.annualRate) ** years;
      point[line.key] = projectedValue;
      return total + projectedValue;
    }, 0);
    const intensitySurcharge = compoundedDebt * intensitySurchargeRate;

    point.defensiveCost = intensitySurcharge;
    point.intensitySurcharge = intensitySurcharge;
    point.compoundedDebt = compoundedDebt;
    point[totalKey] = compoundedDebt + intensitySurcharge;
    point.value = point[totalKey];

    return point;
  });

  data.series = [
    ...pressureLines.map(({ key, label, color, annualRate }) => ({
      key,
      label,
      color,
      detail: `${Math.round(annualRate * 100)}% a.a.`
    })),
    {
      key: totalKey,
      label: 'Total projetado',
      color: null,
      detail: 'soma + intensidade',
      isTotal: true,
      showLabels: true
    }
  ];
  data.defensiveCostRate = intensitySurchargeRate;
  data.intensitySurchargeRate = intensitySurchargeRate;
  data.finalCompoundedDebt = data.at(-1)?.compoundedDebt ?? 0;
  data.finalDefensiveCost = data.at(-1)?.defensiveCost ?? 0;
  data.finalIntensitySurcharge = data.at(-1)?.intensitySurcharge ?? 0;

  return data;
}

function buildAvailableOptionsData(scenarioId) {
  const options = AVAILABLE_OPTIONS_BY_SCENARIO[scenarioId] ?? AVAILABLE_OPTIONS_BY_SCENARIO[SCENARIO_IDS.LOW];

  return PROJECTION_MONTHS.map((month, index) => ({
    month: formatMonthLabel(month),
    value: options[index] ?? 0
  }));
}

function buildInertiaCostData(pressureData) {
  return pressureData.map((point) => ({
    month: point.month,
    value: (point.total ?? 0) / 36
  }));
}
