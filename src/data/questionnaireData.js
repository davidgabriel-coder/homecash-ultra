import { SCENARIO_IDS } from '../domain/debtScenarios';
import {
  ENTREPRENEUR_WITHOUT_DEBT_SEQUENCE,
  OTHER_ALL_SEQUENCE,
  SELLER_ALL_SEQUENCE,
  isEntrepreneurWithoutDebtProfile,
  isIndebtedEntrepreneurExpansionProfile,
  matchesAnswerSequence
} from '../domain/profileClassification';
import { DEBT_HOLDER_QUESTIONNAIRE } from './debtHolderQuestionnaire';
import {
  ENTREPRENEUR_WITHOUT_DEBT_QUESTIONNAIRE,
  INDEBTED_ENTREPRENEUR_EXPANSION_QUESTIONNAIRE,
  INDEBTED_ENTREPRENEUR_QUESTIONNAIRE
} from './indebtedEntrepreneurQuestionnaire';
import { SELLER_QUESTIONNAIRE } from './sellerQuestionnaire';
import { OTHER_QUESTIONNAIRE } from './otherQuestionnaire';
import { FINANCIAL_PRESSURE_DEBT_QUESTION_IDS } from './financialPressureQuestions';

export const PROFILES = [
  { id: 'debt_holder', label: 'Endividado' },
  { id: 'entrepreneur', label: 'Empreendedor' },
  { id: 'seller', label: 'Quero Vender' },
  { id: 'other', label: 'Outros' }
];

export const QUESTIONNAIRE_DATA = {
  debt_holder: DEBT_HOLDER_QUESTIONNAIRE,
  legacy_debt_holder: {
    questions: [
      {
        id: 'main_situation',
        label: 'Qual a sua situação principal?',
        options: [
          { label: 'Parcelas atrasadas', weight: 2 },
          { label: 'Intimado judicialmente', weight: 5 },
          { label: 'Reduzir custo da dívida', weight: 1 },
          { label: 'Renegociar antes que piore', weight: 3 }
        ]
      },
      {
        id: 'attempted_solution',
        label: 'O que você já tentou?',
        options: [
          { label: 'Banco', weight: 2 },
          { label: 'Vender imóvel', weight: 2 },
          { label: 'Empréstimo', weight: 3 },
          { label: 'Nada ainda', weight: 1 }
        ]
      },
      {
        id: 'debt_value_range',
        label: 'Qual o valor aproximado da dívida?',
        options: [
          { label: 'Até R$ 100k', weight: 1 },
          { label: 'R$ 100k a 300k', weight: 2 },
          { label: 'R$ 300k a 700k', weight: 3 },
          { label: 'R$ 700k a 1,5M', weight: 4 },
          { label: 'Mais de R$ 1,5M', weight: 5 }
        ]
      },
      {
        id: 'problem_duration',
        label: 'Há quanto tempo existe esse problema?',
        options: [
          { label: 'Menos de 3 meses', weight: 1 },
          { label: '3 a 12 meses', weight: 2 },
          { label: '1 a 3 anos', weight: 4 },
          { label: 'Mais de 3 anos', weight: 5 }
        ]
      },
      {
        id: 'scenario_feeling',
        label: 'Qual a sua sensação sobre o cenário?',
        options: [
          { label: 'Controlado', weight: 1 },
          { label: 'Piorando', weight: 3 },
          { label: 'Saindo do controle', weight: 4 },
          { label: 'Problema jurídico iminente/real', weight: 5 }
        ]
      },
      {
        id: 'legal_stage',
        label: 'Qual o estágio jurídico?',
        options: [
          { label: 'Não tem', weight: 0 },
          { label: 'Notificações', weight: 2 },
          { label: 'Cobrança judicial', weight: 4 },
          { label: 'Leilão/Intimação', weight: 6 }
        ]
      }
    ],
    calculateIntensity: (score) => {
      if (score <= 5) return SCENARIO_IDS.LOW; // V1
      if (score <= 10) return SCENARIO_IDS.MODERATE; // V2
      if (score <= 15) return SCENARIO_IDS.ACCELERATED; // V3
      return SCENARIO_IDS.CRITICAL; // V4
    }
  },
  entrepreneur: {
    questions: [
      {
        id: 'main_goal',
        label: 'Qual o objetivo principal?',
        options: [
          { label: 'Dívidas da empresa', weight: 3 },
          { label: 'Expansão', weight: 2 },
          { label: 'Momento difícil', weight: 4 },
          { label: 'Operacional/Jurídico', weight: 5 }
        ]
      },
      {
        id: 'capital_impact',
        label: 'Qual seria o impacto do capital?',
        options: [
          { label: 'Pouco', weight: 1 },
          { label: 'Relevante', weight: 2 },
          { label: 'Muito relevante', weight: 4 },
          { label: 'Transformaria o negócio', weight: 5 }
        ]
      },
      {
        id: 'current_business_status',
        label: 'Como está a empresa hoje?',
        options: [
          { label: 'Crescendo', weight: 1 },
          { label: 'Estável', weight: 2 },
          { label: 'Pressionada', weight: 4 },
          { label: 'Travada', weight: 5 }
        ]
      },
      {
        id: 'bottleneck',
        label: 'Qual o principal gargalo?',
        options: [
          { label: 'Caixa', weight: 3 },
          { label: 'Dívida', weight: 4 },
          { label: 'Operação', weight: 2 },
          { label: 'Contratação', weight: 1 },
          { label: 'Marketing/Vendas', weight: 1 },
          { label: 'Jurídico', weight: 5 }
        ]
      },
      {
        id: 'monthly_revenue',
        label: 'Qual o faturamento mensal?',
        options: [
          { label: 'Até R$ 50k', weight: 1 },
          { label: 'R$ 50k a 200k', weight: 2 },
          { label: 'R$ 200k a 500k', weight: 3 },
          { label: 'Mais de R$ 500k', weight: 4 }
        ]
      }
    ],
    calculateIntensity: (score) => {
      if (score <= 5) return SCENARIO_IDS.LOW;
      if (score <= 10) return SCENARIO_IDS.MODERATE;
      if (score <= 15) return SCENARIO_IDS.ACCELERATED;
      return SCENARIO_IDS.CRITICAL;
    }
  },
  seller: {
    questions: [
      {
        id: 'selling_duration',
        label: 'Há quanto tempo tenta vender?',
        options: [
          { label: 'Menos de 3 meses', weight: 1 },
          { label: '3 a 6 meses', weight: 2 },
          { label: '6 a 12 meses', weight: 4 },
          { label: 'Mais de 12 meses', weight: 5 }
        ]
      },
      {
        id: 'received_offer',
        label: 'Já recebeu alguma proposta?',
        options: [
          { label: 'Não', weight: 3 },
          { label: 'Sim, abaixo do esperado', weight: 4 },
          { label: 'Sim, muito abaixo', weight: 5 }
        ]
      },
      {
        id: 'financial_urgency',
        label: 'Qual a sua urgência financeira?',
        options: [
          { label: 'Baixa', weight: 1 },
          { label: 'Média', weight: 3 },
          { label: 'Alta', weight: 5 }
        ]
      },
      {
        id: 'property_cost_level',
        label: 'O imóvel gera muito custo (IPTU, cond., manutenção)?',
        options: [
          { label: 'Baixo', weight: 1 },
          { label: 'Médio', weight: 2 },
          { label: 'Alto', weight: 4 }
        ]
      }
    ],
    calculateIntensity: (score) => {
      if (score <= 4) return SCENARIO_IDS.LOW;
      if (score <= 8) return SCENARIO_IDS.MODERATE;
      if (score <= 12) return SCENARIO_IDS.ACCELERATED;
      return SCENARIO_IDS.CRITICAL;
    }
  },
  other: {
    questions: [
      {
        id: 'resource_goal',
        label: 'Qual o objetivo do recurso?',
        options: [
          { label: 'Saúde', weight: 3 },
          { label: 'Educação', weight: 1 },
          { label: 'Viagem', weight: 1 },
          { label: 'Apoio familiar', weight: 2 },
          { label: 'Jurídico', weight: 5 }
        ]
      },
      {
        id: 'urgency',
        label: 'Qual a sua urgência?',
        options: [
          { label: 'Baixa', weight: 1 },
          { label: 'Média', weight: 3 },
          { label: 'Alta', weight: 5 }
        ]
      },
      {
        id: 'previous_solution_attempt',
        label: 'Já tentou alguma solução?',
        options: [
          { label: 'Banco', weight: 2 },
          { label: 'Venda', weight: 2 },
          { label: 'Home Equity', weight: 3 },
          { label: 'Nada', weight: 1 }
        ]
      }
    ],
    calculateIntensity: (score) => {
      // Max score is 5+5+3 = 13.
      if (score <= 4) return SCENARIO_IDS.LOW;
      if (score <= 7) return SCENARIO_IDS.MODERATE;
      if (score <= 10) return SCENARIO_IDS.ACCELERATED;
      return SCENARIO_IDS.CRITICAL;
    }
  }
};

const DEBT_HOLDER_PROFILE_QUESTION_IDS = [
  'main_goal',
  'main_situation',
  'sought_solution',
  'problem_duration',
  'scenario_feeling',
  'legal_stage',
  'property_value',
  'current_debt_value',
  ...FINANCIAL_PRESSURE_DEBT_QUESTION_IDS,
  'monthly_debt_cost',
  'initial_analysis_approved'
];

const INDEBTED_ENTREPRENEUR_PROFILE_QUESTION_IDS = [
  'main_goal',
  'business_main_situation',
  'business_sought_solution',
  'problem_duration',
  'scenario_feeling',
  'legal_stage',
  'property_value',
  ...FINANCIAL_PRESSURE_DEBT_QUESTION_IDS,
  'current_monthly_revenue',
  'potential_monthly_revenue',
  'initial_analysis_approved'
];

const PROFILE_QUESTION_IDS = {
  debt_holder: DEBT_HOLDER_PROFILE_QUESTION_IDS,
  debt_holder_legal: DEBT_HOLDER_PROFILE_QUESTION_IDS,
  indebted_entrepreneur: INDEBTED_ENTREPRENEUR_PROFILE_QUESTION_IDS,
  indebted_entrepreneur_expansion: INDEBTED_ENTREPRENEUR_PROFILE_QUESTION_IDS,
  entrepreneur_without_debt: [
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
  ],
  seller_all: [
    'main_goal',
    'selling_main_situation',
    'selling_sought_solution',
    'selling_duration',
    'property_value',
    'monthly_property_cost',
    'initial_analysis_approved'
  ],
  other_all: [
    'main_goal',
    'other_main_situation',
    'other_sought_solution',
    'problem_duration',
    'scenario_feeling',
    'property_value',
    'monthly_property_cost',
    'initial_analysis_approved'
  ]
};

const filterQuestionsByProfile = (questionnaire, profileId) => {
  const questionIds = PROFILE_QUESTION_IDS[profileId];

  if (!questionIds) {
    return questionnaire;
  }

  const allowedQuestionIds = new Set(questionIds);

  return {
    ...questionnaire,
    questions: questionnaire.questions.filter((question) => allowedQuestionIds.has(question.id))
  };
};

export function getQuestionnaireData(profileId, answers = {}) {
  if (profileId === 'debt_holder' && matchesAnswerSequence(answers, OTHER_ALL_SEQUENCE)) {
    return filterQuestionsByProfile(OTHER_QUESTIONNAIRE, 'other_all');
  }

  if (profileId === 'debt_holder' && matchesAnswerSequence(answers, SELLER_ALL_SEQUENCE)) {
    return filterQuestionsByProfile(SELLER_QUESTIONNAIRE, 'seller_all');
  }

  if (profileId === 'debt_holder' && matchesAnswerSequence(answers, ENTREPRENEUR_WITHOUT_DEBT_SEQUENCE)) {
    if (isIndebtedEntrepreneurExpansionProfile(answers)) {
      return filterQuestionsByProfile(INDEBTED_ENTREPRENEUR_EXPANSION_QUESTIONNAIRE, 'indebted_entrepreneur_expansion');
    }

    if (isEntrepreneurWithoutDebtProfile(answers)) {
      return filterQuestionsByProfile(ENTREPRENEUR_WITHOUT_DEBT_QUESTIONNAIRE, 'entrepreneur_without_debt');
    }

    return filterQuestionsByProfile(INDEBTED_ENTREPRENEUR_QUESTIONNAIRE, 'indebted_entrepreneur');
  }

  return filterQuestionsByProfile(QUESTIONNAIRE_DATA[profileId], profileId);
}
