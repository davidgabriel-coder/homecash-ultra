const currencyFormatter = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 });
const percentFormatter = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

// "R$ 60.458"
export const formatBRL = (value) => `R$ ${currencyFormatter.format(Math.round(value))}`;

// "58,3%"
export const formatPercent = (value) => `${percentFormatter.format(value)}%`;

// Economia do HomeCash sobre o custo total do Home Equity, calculada a partir dos dois totais.
export const getSavings = (homeEquityTotal, homeCashTotal) => {
  const amount = homeEquityTotal - homeCashTotal;
  const percent = homeEquityTotal > 0 ? (amount / homeEquityTotal) * 100 : 0;
  return { amount, percent };
};
