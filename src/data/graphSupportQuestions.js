import { FINANCIAL_PRESSURE_DEBT_QUESTIONS } from './financialPressureQuestions';

export const GRAPH_SUPPORT_QUESTIONS = [
  {
    id: 'property_value',
    type: 'currency',
    label: 'Qual o valor aproximado do imóvel?',
    placeholder: 'Ex.: 2000000'
  },
  {
    id: 'current_debt_value',
    type: 'currency',
    label: 'Qual o valor aproximado da sua dívida hoje?',
    placeholder: 'Ex.: 300000',
    allowZero: true
  },
  ...FINANCIAL_PRESSURE_DEBT_QUESTIONS,
  {
    id: 'monthly_debt_cost',
    type: 'currency',
    label: 'Qual o valor médio mensal que essa dívida custa para você hoje?',
    placeholder: 'Ex.: 15000',
    allowZero: true
  },
  {
    id: 'current_monthly_revenue',
    type: 'currency',
    label: 'Qual o faturamento médio mensal atual?',
    placeholder: 'Ex.: 200000',
    allowZero: true
  },
  {
    id: 'potential_monthly_revenue',
    type: 'currency',
    label: 'Com a liquidez disponível, qual faturamento mensal acredita que poderia alcançar?',
    placeholder: 'Ex.: 350000',
    allowZero: true
  },
  {
    id: 'monthly_property_cost',
    type: 'currency',
    label: 'Qual o custo mensal aproximado que esse imóvel gera hoje?',
    placeholder: 'Ex.: 5000',
    allowZero: true
  },
  {
    id: 'initial_analysis_approved',
    type: 'boolean',
    label: 'Aprovado na análise inicial?',
    options: [
      { id: 'approved', label: 'Sim', value: true, weight: 0 },
      { id: 'not_approved', label: 'Não', value: false, weight: 0 }
    ]
  }
];

export function withGraphSupportQuestions(questionnaire) {
  const existingQuestionIds = new Set(questionnaire.questions.map((question) => question.id));
  const missingSupportQuestions = GRAPH_SUPPORT_QUESTIONS.filter((question) => !existingQuestionIds.has(question.id));

  return {
    ...questionnaire,
    questions: [...questionnaire.questions, ...missingSupportQuestions]
  };
}
