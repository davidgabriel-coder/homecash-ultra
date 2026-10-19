import { calculateIntensityByMaxScore } from '../domain/debtScenarios';

const MAX_SCORE = 51;

export const SELLER_QUESTIONNAIRE = {
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
      id: 'selling_main_situation',
      label: 'Qual é a situação principal da venda?',
      options: [
        { id: 'just_curious', label: 'Apenas curioso', weight: 2 },
        { id: 'starting_to_sell', label: 'Começando a vender', weight: 5 },
        { id: 'selling_for_months', label: 'Vendendo há meses', weight: 8 },
        { id: 'anticipate_part_value', label: 'Quer antecipar parte do valor', weight: 12 }
      ]
    },
    {
      id: 'selling_sought_solution',
      label: 'Qual solução você está procurando?',
      options: [
        { id: 'not_listed_yet', label: 'Ainda não anunciou', weight: 2 },
        { id: 'buyer_difficulty', label: 'Dificuldade com compradores', weight: 5 },
        { id: 'property_without_offers', label: 'Imóvel sem propostas', weight: 8 },
        { id: 'offers_below_value', label: 'Propostas abaixo do valor', weight: 12 },
        { id: 'sell_with_discount', label: 'Vender com desconto', weight: 15 }
      ]
    },
    {
      id: 'selling_duration',
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
      id: 'property_value',
      type: 'currency',
      label: 'Qual o valor aproximado do imóvel?',
      placeholder: 'Ex.: 2000000'
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
  calculateIntensity: (score) => calculateIntensityByMaxScore(score, MAX_SCORE)
};
