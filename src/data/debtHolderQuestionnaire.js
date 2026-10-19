import { calculateIntensityByMaxScore } from '../domain/debtScenarios';
import { FINANCIAL_PRESSURE_DEBT_QUESTIONS } from './financialPressureQuestions';

const MAX_SCORE = 111;

export const DEBT_HOLDER_QUESTIONNAIRE = {
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
      id: 'main_situation',
      label: 'Qual é sua situação principal?',
      options: [
        { id: 'reduce_debt_cost', label: 'Reduzir custo da dívida', weight: 5 },
        { id: 'late_installments', label: 'Parcelas atrasadas', weight: 10 },
        { id: 'renegotiate_early', label: 'Renegociar antes que piore', weight: 15 },
        { id: 'legally_summoned', label: 'Intimado judicialmente', weight: 20 }
      ]
    },
    {
      id: 'sought_solution',
      label: 'Qual solução você está procurando?',
      options: [
        { id: 'no_search_yet', label: 'Não buscou nada ainda', weight: 2 },
        { id: 'seeking_loan', label: 'Buscando empréstimo', weight: 5 },
        { id: 'selling_property', label: 'Tentando vender imóvel', weight: 8 },
        { id: 'tried_bank', label: 'Já tentou negociar com banco', weight: 12 }
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
    {
      id: 'current_debt_value',
      type: 'currency',
      label: 'Qual o valor aproximado da sua dívida hoje?',
      placeholder: 'Ex.: 300000'
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
