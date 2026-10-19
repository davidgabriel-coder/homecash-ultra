export const DIAGNOSTIC_PROFILE_IDS = {
  DEBT_HOLDER: 'debt_holder',
  DEBT_HOLDER_LEGAL: 'debt_holder_legal',
  INDEBTED_ENTREPRENEUR: 'indebted_entrepreneur',
  INDEBTED_ENTREPRENEUR_EXPANSION: 'indebted_entrepreneur_expansion',
  ENTREPRENEUR_WITHOUT_DEBT: 'entrepreneur_without_debt',
  SELLER_ALL: 'seller_all',
  OTHER_ALL: 'other_all'
};

const DEBT_HOLDER_LEGAL_TRIGGER_QUESTIONS = ['main_situation', 'sought_solution'];

export const INDEBTED_ENTREPRENEUR_SEQUENCE = {
  main_goal: 'invest_in_company',
  business_main_situation: 'company_debts',
  business_sought_solution: 'increase_revenue'
};

export const INDEBTED_ENTREPRENEUR_EXPANSION_SEQUENCE = {
  main_goal: 'invest_in_company',
  business_main_situation: 'expansion_or_new_projects',
  business_sought_solution: 'pay_debts'
};

export const ENTREPRENEUR_WITHOUT_DEBT_SEQUENCE = {
  main_goal: 'invest_in_company'
};

export const SELLER_ALL_SEQUENCE = {
  main_goal: 'anticipate_property_sale'
};

export const OTHER_ALL_SEQUENCE = {
  main_goal: 'understand_homecash'
};

export function matchesAnswerSequence(answers, sequence) {
  return Object.entries(sequence).every(([questionId, optionId]) => answers[questionId]?.optionId === optionId);
}

const hasCompletedEntrepreneurPath = (answers) =>
  matchesAnswerSequence(answers, ENTREPRENEUR_WITHOUT_DEBT_SEQUENCE) &&
  Boolean(answers.business_main_situation?.optionId) &&
  Boolean(answers.business_sought_solution?.optionId);

export const isIndebtedEntrepreneurExpansionProfile = (answers) =>
  matchesAnswerSequence(answers, INDEBTED_ENTREPRENEUR_EXPANSION_SEQUENCE);

export const isEntrepreneurWithoutDebtProfile = (answers) =>
  hasCompletedEntrepreneurPath(answers) &&
  answers.business_main_situation.optionId === 'expansion_or_new_projects' &&
  answers.business_sought_solution.optionId !== 'pay_debts';

export const isIndebtedEntrepreneurProfile = (answers) =>
  hasCompletedEntrepreneurPath(answers) && !isEntrepreneurWithoutDebtProfile(answers);

export function classifyDiagnosticProfile(profileId, answers) {
  if (profileId !== DIAGNOSTIC_PROFILE_IDS.DEBT_HOLDER) return profileId;

  if (isIndebtedEntrepreneurExpansionProfile(answers)) {
    return DIAGNOSTIC_PROFILE_IDS.INDEBTED_ENTREPRENEUR_EXPANSION;
  }

  if (isEntrepreneurWithoutDebtProfile(answers)) {
    return DIAGNOSTIC_PROFILE_IDS.ENTREPRENEUR_WITHOUT_DEBT;
  }

  if (isIndebtedEntrepreneurProfile(answers)) {
    return DIAGNOSTIC_PROFILE_IDS.INDEBTED_ENTREPRENEUR;
  }

  if (matchesAnswerSequence(answers, SELLER_ALL_SEQUENCE)) {
    return DIAGNOSTIC_PROFILE_IDS.SELLER_ALL;
  }

  if (matchesAnswerSequence(answers, OTHER_ALL_SEQUENCE)) {
    return DIAGNOSTIC_PROFILE_IDS.OTHER_ALL;
  }

  const matchesLegalTemplate = DEBT_HOLDER_LEGAL_TRIGGER_QUESTIONS.some(
    (questionId) => answers[questionId]?.optionId
  );

  return matchesLegalTemplate ? DIAGNOSTIC_PROFILE_IDS.DEBT_HOLDER_LEGAL : DIAGNOSTIC_PROFILE_IDS.DEBT_HOLDER;
}
