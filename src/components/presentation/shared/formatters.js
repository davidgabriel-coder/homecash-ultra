const toSafeNumber = (value) => {
  const number = Number(value);

  return Number.isFinite(number) ? number : 0;
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(toSafeNumber(value));

export const formatCompactCurrency = (value) => {
  const safeValue = toSafeNumber(value);
  const absoluteValue = Math.abs(safeValue);

  if (absoluteValue >= 1000000) {
    return `R$ ${(safeValue / 1000000).toFixed(1).replace('.', ',')} mi`;
  }

  if (absoluteValue >= 1000) {
    return `R$ ${Math.round(safeValue / 1000)} mil`;
  }

  return formatCurrency(safeValue);
};

export const formatPercentage = (value) => `${Math.round(toSafeNumber(value))}%`;
