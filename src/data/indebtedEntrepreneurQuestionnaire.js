import { calculateIntensityByMaxScore } from '../domain/debtScenarios';
import { FINANCIAL_PRESSURE_DEBT_QUESTIONS } from './financialPressureQuestions';

const INDEBTED_ENTREPRENEUR_MAX_SCORE = 111;
const ENTREPRENEUR_WITHOUT_DEBT_MAX_SCORE = 111;

const MAIN_GOAL_QUESTION = {
  id: 'main_goal',
  label: 'Qual é seu principal objetivo hoje?',
  options: [
    {
      id: 'reorganize_financial_life',
      label: 'Tenho compromissos financeiros acumulados e preciso de uma solução segura para reorganizar minha vida financeira',
          weight: 12
    },
    {
      id: 'invest_in_company',
      label: 'Tenho um imóvel e quero usar seu valor para investir na operação e no crescimento da minha empresa',
          weight: 5
    },
    {
      id: 'anticipate_property_sale',
      label: 'Estou tentando vender meu imóvel há algum tempo e gostaria de antecipar parte do valor agora',
          weight: 8
    },
    {
      id: 'understand_homecash',
      label: 'Nenhuma opção acima, mas quero entender como o HomeCash pode ajudar a tirar meus planos do papel',
      weight: 2
    }
  ]
};

export const INDEBTED_ENTREPRENEUR_QUESTIONNAIRE = {
  questions: [
    MAIN_GOAL_QUESTION,
    {
      id: 'business_main_situation',
      label: 'Qual é a situação principal da empresa?',
      options: [
        { id: 'expansion_or_new_projects', label: 'Expansão ou novos projetos', weight: 5 },
        { id: 'cash_flow_relief', label: 'Fôlego para atravessar momento difícil', weight: 10 },
        { id: 'company_debts', label: 'Dívidas da empresa', weight: 15 },
        { id: 'legal_or_operational_issues', label: 'Questões jurídicas/operacionais', weight: 20 }
      ]
    },
    {
      id: 'business_sought_solution',
      label: 'Qual solução você está procurando?',
      options: [
        { id: 'unclear_return', label: 'Sem clareza de retorno', weight: 2 },
        { id: 'increase_revenue', label: 'Aumentar faturamento', weight: 5 },
        { id: 'improve_structure', label: 'Melhorar estrutura', weight: 8 },
        { id: 'pay_debts', label: 'Quitar pendências', weight: 12 }
      ]
    },
    {
      id: 'problem_duration',
      label: 'Há quanto tempo essa situação acontece?',
      options: [
        { id: 'under_3_months', label: 'Menos de 3 meses', weight: 2 },
        { id: '3_to_6_months', label: '3 a 6 meses', weight: 5 },
        { id: '6_to_12_months', label: '6 a 12 meses', weight: 8 },
        { id: '1_to_2_years', label: '1 a 2 anos', weight: 10 },
        { id: 'over_2_years', label: 'Mais de 2 anos', weight: 12 }
      ]
    },
    {
      id: 'scenario_feeling',
      label: 'Como você sente essa situação hoje?',
      options: [
        { id: 'under_control', label: 'Sob controle', weight: 0 },
        { id: 'requires_attention', label: 'Exige atenção', weight: 5 },
        { id: 'concerning', label: 'Preocupante', weight: 10 },
        { id: 'serious', label: 'Grave', weight: 18 },
        { id: 'critical', label: 'Crítica', weight: 25 }
      ]
    },
    {
      id: 'legal_stage',
      label: 'Existe algum estágio jurídico hoje?',
      options: [
        { id: 'none', label: 'Nenhuma', weight: 0 },
        { id: 'initial_delay', label: 'Atraso inicial', weight: 6 },
        { id: 'extrajudicial_collection', label: 'Cobrança extrajudicial', weight: 12 },
        { id: 'legal_action', label: 'Ação judicial', weight: 18 },
        { id: 'asset_enforcement', label: 'Execução de bens', weight: 24 },
        { id: 'public_auction', label: 'Hasta pública / Leilão', weight: 30 }
      ]
    },
    {
      id: 'property_value',
      type: 'currency',
      label: 'Qual o valor aproximado do imóvel?',
      placeholder: 'Ex.: 2000000'
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
      label: 'Qual o faturamento médio mensal atual da empresa?',
      placeholder: 'Ex.: 200000'
    },
    {
      id: 'potential_monthly_revenue',
      type: 'currency',
      label: 'Com a liquidez disponível, qual faturamento mensal acredita que poderia alcançar?',
      placeholder: 'Ex.: 350000'
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
  ],
  calculateIntensity: (score) => calculateIntensityByMaxScore(score, INDEBTED_ENTREPRENEUR_MAX_SCORE)
};

const ENTREPRENEUR_WITHOUT_DEBT_QUESTION_IDS = new Set([
  'main_goal',
  'business_main_situation',
  'business_sought_solution',
  'problem_duration',
  'scenario_feeling',
  'legal_stage',
  'property_value',
  'current_monthly_revenue',
  'potential_monthly_revenue',
  'initial_analysis_approved'
]);

export const INDEBTED_ENTREPRENEUR_EXPANSION_QUESTIONNAIRE = {
  ...INDEBTED_ENTREPRENEUR_QUESTIONNAIRE,
  questions: INDEBTED_ENTREPRENEUR_QUESTIONNAIRE.questions
};

export const ENTREPRENEUR_WITHOUT_DEBT_QUESTIONNAIRE = {
  ...INDEBTED_ENTREPRENEUR_QUESTIONNAIRE,
  questions: INDEBTED_ENTREPRENEUR_QUESTIONNAIRE.questions.filter((question) =>
    ENTREPRENEUR_WITHOUT_DEBT_QUESTION_IDS.has(question.id)
  ),
  calculateIntensity: (score) => calculateIntensityByMaxScore(score, ENTREPRENEUR_WITHOUT_DEBT_MAX_SCORE)
};
