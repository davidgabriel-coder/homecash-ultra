export const FINANCIAL_PRESSURE_DEBT_QUESTIONS = [
  {
    id: 'working_capital_debt',
    type: 'currency',
    label: 'Qual o valor atual em Capital de Giro?',
    placeholder: 'Ex.: 5000',
    allowZero: true
  },
  {
    id: 'overdraft_debt',
    type: 'currency',
    label: 'Qual o valor atual em Cheque Especial?',
    placeholder: 'Ex.: 15000',
    allowZero: true
  },
  {
    id: 'credit_card_debt',
    type: 'currency',
    label: 'Qual o valor atual em Cartao de Credito?',
    placeholder: 'Ex.: 7000',
    allowZero: true
  },
  {
    id: 'cgi_debt',
    type: 'currency',
    label: 'Qual o valor atual em CGI?',
    placeholder: 'Ex.: 755000',
    allowZero: true
  },
  {
    id: 'other_debts',
    type: 'currency',
    label: 'Qual o valor atual em Outras dividas?',
    placeholder: 'Ex.: 80000',
    allowZero: true
  }
];

export const FINANCIAL_PRESSURE_DEBT_QUESTION_IDS = new Set(
  FINANCIAL_PRESSURE_DEBT_QUESTIONS.map((question) => question.id)
);
