import { calculateIntensityByMaxScore } from '../domain/debtScenarios';

const MAX_SCORE = 81;

export const OTHER_QUESTIONNAIRE = {
  questions: [
    {
      id: 'main_goal',
      label: 'Qual é seu principal objetivo hoje?',
      options: [
        {
          id: 'reorganize_financial_life',
          label:
            'Tenho compromissos financeiros acumulados e preciso de uma solução segura para reorganizar minha vida financeira',
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
    },
    {
      id: 'other_main_situation',
      label: 'Qual é sua situação principal?',
      options: [
        { id: 'other_goals', label: 'Outros objetivos', weight: 2 },
        { id: 'travel_or_move', label: 'Viagem ou mudança', weight: 5 },
        { id: 'education', label: 'Educação', weight: 8 },
        { id: 'family_support', label: 'Apoio familiar', weight: 12 },
        { id: 'health', label: 'Saúde', weight: 16 },
        { id: 'legal_pending', label: 'Pendências jurídicas', weight: 20 }
      ]
    },
    {
      id: 'other_sought_solution',
      label: 'Qual solução você está procurando?',
      options: [
        { id: 'unsure_how_to_proceed', label: 'Não sabe caminho seguir', weight: 2 },
        { id: 'considered_selling_property', label: 'Pensou em vender imóvel', weight: 5 },
        { id: 'bank_loan', label: 'Empréstimo bancário', weight: 8 },
        { id: 'tried_home_equity', label: 'Tentou Home Equity', weight: 12 }
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
      id: 'current_monthly_revenue',
      type: 'currency',
      label: 'Qual o faturamento médio mensal atual?',
      placeholder: 'Ex.: 200000'
    },
    {
      id: 'potential_monthly_revenue',
      type: 'currency',
      label: 'Com a liquidez disponível, qual faturamento mensal acredita que poderia alcançar?',
      placeholder: 'Ex.: 400000'
    },
    {
      id: 'monthly_property_cost',
      type: 'currency',
      label: 'Qual o custo mensal aproximado que esse imóvel gera hoje?',
      placeholder: 'Ex.: 5000',
      allowZero: true
    },
    {
      id: 'property_value',
      type: 'currency',
      label: 'Qual o valor aproximado do imóvel?',
      placeholder: 'Ex.: 2000000'
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
  calculateIntensity: (score) => calculateIntensityByMaxScore(score, MAX_SCORE)
};
