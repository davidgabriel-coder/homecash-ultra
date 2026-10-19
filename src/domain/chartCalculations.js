export const PROJECTION_MONTHS = [0, 6, 12, 24, 36];
const IDLE_PROPERTY_COST_PROJECTION_MONTHS = [0, 6, 12, 18, 24, 30, 36];

export function buildOpportunityCostProjection(currentRevenue, potentialRevenue, months = PROJECTION_MONTHS) {
  const monthlyGap = potentialRevenue - currentRevenue;

  return {
    currentRevenue,
    estimatedRevenue: potentialRevenue,
    monthlyGap,
    accumulatedGap: monthlyGap * 36,
    data: months.map((month) => ({
      month,
      monthLabel: `${month} meses`,
      growth: potentialRevenue * month,
      waiting: currentRevenue * month
    }))
  };
}

export function calculateProductiveCapital(propertyValue, currentMonthlyRevenue, potentialMonthlyRevenue) {
  const productiveCapital = (potentialMonthlyRevenue - currentMonthlyRevenue) * 36 - propertyValue;
  const unlockedPotential = productiveCapital - propertyValue;

  return {
    idleCapital: propertyValue,
    productiveCapital,
    unlockedPotential
  };
}

export function buildIdlePropertyCostProjection(monthlyPropertyCost, months = IDLE_PROPERTY_COST_PROJECTION_MONTHS) {
  return months.map((month) => ({
    month: `${month} meses`,
    value: monthlyPropertyCost * month
  }));
}
