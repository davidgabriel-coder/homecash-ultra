import { useState } from 'react';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left.mjs';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right.mjs';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2.mjs';
import DollarSign from 'lucide-react/dist/esm/icons/dollar-sign.mjs';
import ListChecks from 'lucide-react/dist/esm/icons/list-checks.mjs';
import { getQuestionnaireData } from '../data/questionnaireData';
import { classifyDiagnosticProfile } from '../domain/profileClassification';

const ROOT_PROFILE_ID = 'debt_holder';
const GUIDED_QUESTION_COUNT = 4;

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0
});

const parseCurrencyInput = (value) => {
  const digits = String(value).replace(/\D/g, '');

  return digits ? Number(digits) : 0;
};

const formatCurrencyInput = (value) => (value === '' || value == null ? '' : currencyFormatter.format(value));

const getFinancialPressureDebtBreakdown = (answers) => ({
  workingCapital: answers.working_capital_debt?.value ?? 0,
  overdraft: answers.overdraft_debt?.value ?? 0,
  creditCard: answers.credit_card_debt?.value ?? 0,
  cgi: answers.cgi_debt?.value ?? 0,
  otherDebts: answers.other_debts?.value ?? 0
});

const sumDebtBreakdown = (debtBreakdown) =>
  Object.values(debtBreakdown).reduce((total, value) => total + (Number(value) || 0), 0);

const isQuestionAnswered = (question, answer, answers) => {
  if (!question || answer === undefined) return false;
  if (question.type !== 'currency') return true;

  const hasValidCurrency = question.allowZero || answer.value > 0;
  const hasValidPotentialRevenue =
    question.id !== 'potential_monthly_revenue' ||
    (question.allowZero && answer.value === 0) ||
    answer.value > (answers.current_monthly_revenue?.value ?? 0);

  return hasValidCurrency && hasValidPotentialRevenue;
};

const NavigationBack = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="mb-6 flex items-center text-sm font-semibold text-gray-400 transition-colors hover:text-gray-700"
  >
    <ArrowLeft size={16} className="mr-1" /> Voltar
  </button>
);

export default function Questionnaire({ onComplete }) {
  const [step, setStep] = useState('guided');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [debtValue, setDebtValue] = useState(100000);
  const [monthlyCostValue, setMonthlyCostValue] = useState(0);

  const currentProfileData = getQuestionnaireData(ROOT_PROFILE_ID, answers);
  const activeQuestionIndex = currentProfileData
    ? Math.min(questionIndex, Math.max(currentProfileData.questions.length - 1, 0))
    : 0;
  const currentQuestion = currentProfileData?.questions[activeQuestionIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isPotentialRevenueValid =
    currentQuestion?.id !== 'potential_monthly_revenue' ||
    (currentQuestion.allowZero && currentAnswer?.value === 0) ||
    currentAnswer?.value > (answers.current_monthly_revenue?.value ?? 0);
  const isCurrentQuestionAnswered =
    currentQuestion && isQuestionAnswered(currentQuestion, currentAnswer, answers) && isPotentialRevenueValid;
  const questionProgress = currentProfileData
    ? ((activeQuestionIndex + 1) / currentProfileData.questions.length) * 100
    : 0;
  const remainingQuestions = currentProfileData?.questions.slice(GUIDED_QUESTION_COUNT) ?? [];
  const remainingAnsweredCount = remainingQuestions.filter((question) =>
    isQuestionAnswered(question, answers[question.id], answers)
  ).length;
  const isOverviewComplete = remainingQuestions.length > 0 && remainingAnsweredCount === remainingQuestions.length;
  const overviewProgress = remainingQuestions.length > 0 ? (remainingAnsweredCount / remainingQuestions.length) * 100 : 100;
  const isCompactOverview = remainingQuestions.length <= 4;

  const handleAnswer = (questionId, optionIndex, option) => {
    setAnswers((current) => {
      const nextAnswers = {
        ...current,
        [questionId]: {
          optionIndex,
          optionId: option.id ?? String(optionIndex),
          label: option.label,
          value: option.value,
          weight: option.weight ?? 0
        }
      };
      const activeQuestionIds = new Set(
        getQuestionnaireData(ROOT_PROFILE_ID, nextAnswers).questions.map((question) => question.id)
      );

      return Object.fromEntries(Object.entries(nextAnswers).filter(([answerId]) => activeQuestionIds.has(answerId)));
    });

  };

  const handleOpenAnswer = (questionId, value) => {
    setAnswers((current) => ({
      ...current,
      [questionId]: { value: parseCurrencyInput(value), weight: 0 }
    }));
  };

  const handlePreviousQuestion = () => {
    if (activeQuestionIndex === 0) return;

    setQuestionIndex(activeQuestionIndex - 1);
  };

  const handleNextQuestion = () => {
    if (!isCurrentQuestionAnswered) return;

    if (activeQuestionIndex === GUIDED_QUESTION_COUNT - 1) {
      if (remainingQuestions.length === 0) {
        handleFinish();
        return;
      }

      setQuestionIndex(GUIDED_QUESTION_COUNT);
      setStep('overview');
      return;
    }

    if (activeQuestionIndex < currentProfileData.questions.length - 1) {
      setQuestionIndex(activeQuestionIndex + 1);
      return;
    }

    if (ROOT_PROFILE_ID === 'debt_holder') {
      handleFinish();
      return;
    }

    setStep('debt-details');
  };

  const handleQuestionnaireKeyDown = (event) => {
    if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;

    const optionIndex = event.target.dataset?.optionIndex;
    const selectedOptionIndex = currentQuestion ? answers[currentQuestion.id]?.optionIndex : undefined;

    if (
      currentQuestion?.type !== 'currency' &&
      optionIndex !== undefined &&
      Number(optionIndex) !== selectedOptionIndex
    ) {
      return;
    }

    if (step === 'guided' && isCurrentQuestionAnswered) {
      event.preventDefault();
      handleNextQuestion();
      return;
    }

    if (step === 'overview' && isOverviewComplete) {
      event.preventDefault();
      handleFinish();
      return;
    }

    if (step === 'debt-details') {
      event.preventDefault();
      handleFinish();
    }
  };

  const handleFinish = () => {
    const diagnosticProfileId = classifyDiagnosticProfile(ROOT_PROFILE_ID, answers);
    const score = Object.values(answers).reduce((total, answer) => total + answer.weight, 0);
    const answeredDebtValue = answers.current_debt_value?.value ?? debtValue;
    const answeredMonthlyCost = answers.monthly_debt_cost?.value ?? monthlyCostValue;
    const debtBreakdown = getFinancialPressureDebtBreakdown(answers);
    const debtBreakdownTotal = sumDebtBreakdown(debtBreakdown);
    const pressureBase =
      diagnosticProfileId.startsWith('indebted_entrepreneur') && answers.current_debt_value?.value == null
        ? debtBreakdownTotal || answeredMonthlyCost * 12 || debtValue
        : debtBreakdownTotal || answeredDebtValue;

    onComplete({
      profileId: ROOT_PROFILE_ID,
      diagnosticProfileId,
      answers,
      scenarioId: currentProfileData.calculateIntensity(score),
      propertyValue: answers.property_value?.value ?? 2000000,
      initialAnalysisApproved: answers.initial_analysis_approved?.value ?? null,
      initialDebt: pressureBase,
      debtBreakdown,
      initialMonthlyCost: answeredMonthlyCost
    });
  };

  const handleBackFromOverview = () => {
    setQuestionIndex(GUIDED_QUESTION_COUNT - 1);
    setStep('guided');
  };

  return (
    <div className="flex h-full w-full items-center justify-center px-3 py-3 sm:px-6">
      <div
        className={`w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl ${
          step === 'overview'
            ? isCompactOverview
              ? 'max-w-5xl p-5 sm:p-6'
              : 'h-full max-w-7xl p-4 sm:p-5 lg:p-6'
            : 'max-w-5xl p-8'
        }`}
        onKeyDown={handleQuestionnaireKeyDown}
      >
        {step === 'guided' && currentProfileData && currentQuestion ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <NavigationBack onClick={handlePreviousQuestion} />

            <div className="mb-7 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-600">
                  Pergunta {activeQuestionIndex + 1} de {currentProfileData.questions.length}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#1e293b]">{currentQuestion.label}</h2>
                <p className="mt-2 text-[#64748b]">Selecione a opção que melhor representa sua situação atual.</p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-[#64748b]">{Math.round(questionProgress)}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full rounded-full bg-blue-600 transition-all duration-300" style={{ width: `${questionProgress}%` }} />
            </div>

            {currentQuestion.type === 'currency' ? (
              <div className="mt-8 rounded-2xl bg-gray-50 p-8">
                <div className="mx-auto flex max-w-lg items-center gap-4 border-b-2 border-gray-300 pb-3 focus-within:border-blue-500">
                  <DollarSign className="text-gray-400" size={32} />
                  <input
                    type="text"
                    inputMode="numeric"
                    value={formatCurrencyInput(currentAnswer?.value ?? '')}
                    placeholder={formatCurrencyInput(parseCurrencyInput(currentQuestion.placeholder))}
                    onChange={(event) => handleOpenAnswer(currentQuestion.id, event.target.value)}
                    className="w-full bg-transparent text-4xl font-bold text-[#1e293b] outline-none placeholder:text-gray-300"
                    autoFocus
                  />
                </div>
                {currentQuestion.id === 'potential_monthly_revenue' && currentAnswer?.value > 0 && !isPotentialRevenueValid ? (
                  <p className="mx-auto mt-4 max-w-lg text-sm font-semibold text-red-500">
                    O novo faturamento estimado deve ser maior que o faturamento atual.
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = answers[currentQuestion.id]?.optionIndex === optionIndex;

                return (
                  <button
                    type="button"
                    key={`${currentQuestion.id}-${option.id ?? optionIndex}`}
                    data-option-index={optionIndex}
                    onClick={() => handleAnswer(currentQuestion.id, optionIndex, option)}
                    className={`flex min-h-[72px] items-center justify-between rounded-2xl border-2 px-5 py-4 text-left text-base font-semibold transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md shadow-blue-100'
                        : 'border-gray-100 bg-gray-50 text-gray-700 hover:border-blue-200 hover:bg-white'
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 shadow-sm'
                        }`}
                      >
                        {optionIndex + 1}
                      </span>
                      <span>{option.label}</span>
                    </span>
                    {isSelected ? <CheckCircle2 size={20} className="shrink-0 text-blue-500" /> : null}
                  </button>
                );
              })}
              </div>
            )}

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={handleNextQuestion}
                disabled={!isCurrentQuestionAnswered}
                className={`flex items-center rounded-xl px-8 py-4 font-bold text-white transition-all ${
                  isCurrentQuestionAnswered
                    ? 'bg-blue-600 shadow-lg shadow-blue-200 hover:bg-blue-700'
                    : 'cursor-not-allowed bg-gray-300'
                }`}
              >
                {activeQuestionIndex === GUIDED_QUESTION_COUNT - 1 ? 'Abrir visão completa' : 'Próxima pergunta'}
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        ) : null}

        {step === 'overview' && currentProfileData ? (
          <div
            className={`flex min-h-0 flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 ${
              isCompactOverview ? '' : 'h-full'
            }`}
          >
            <div className="mb-4 flex shrink-0 items-start justify-between gap-4">
              <div className="min-w-0">
                <button
                  type="button"
                  onClick={handleBackFromOverview}
                  className="mb-3 flex items-center text-sm font-semibold text-gray-400 transition-colors hover:text-gray-700"
                >
                  <ArrowLeft size={16} className="mr-1" /> Voltar para pergunta 4
                </button>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
                  Perfil rastreado - perguntas finais
                </p>
                <h2 className="mt-1 text-2xl font-black leading-tight tracking-[-0.03em] text-[#1e293b] sm:text-3xl">
                  Complete os dados restantes em uma visão única
                </h2>
              </div>

              <div className="hidden shrink-0 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-right sm:block">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-500">Progresso</div>
                <div className="mt-1 text-2xl font-black text-blue-700">
                  {remainingAnsweredCount}/{remainingQuestions.length}
                </div>
              </div>
            </div>

            <div className="mb-4 h-2 shrink-0 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full rounded-full bg-blue-600 transition-all duration-300" style={{ width: `${overviewProgress}%` }} />
            </div>

            <div
              className={`grid min-h-0 gap-2 pr-1 sm:gap-3 ${
                isCompactOverview
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'flex-1 auto-rows-min grid-cols-2 overflow-y-auto xl:grid-cols-3'
              }`}
            >
              {remainingQuestions.map((question, questionOffset) => {
                const answer = answers[question.id];
                const answered = isQuestionAnswered(question, answer, answers);
                const hasPotentialRevenueError =
                  question.id === 'potential_monthly_revenue' && answer?.value > 0 && !answered;

                return (
                  <section
                    key={question.id}
                    className={`flex min-h-[150px] flex-col rounded-2xl border p-2.5 transition-colors sm:p-3 ${
                      answered ? 'border-blue-200 bg-blue-50/50' : 'border-gray-100 bg-gray-50'
                    }`}
                  >
                    <div className="mb-2 flex items-start justify-between gap-2 sm:gap-3">
                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-500 sm:text-[10px]">
                          Pergunta {GUIDED_QUESTION_COUNT + questionOffset + 1}
                        </p>
                        <h3 className="mt-1 text-[11px] font-bold leading-tight text-[#1e293b] sm:text-[15px]">
                          {question.label}
                        </h3>
                      </div>
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7 ${
                          answered ? 'bg-blue-600 text-white' : 'bg-white text-gray-300'
                        }`}
                      >
                        {answered ? <CheckCircle2 size={17} /> : <ListChecks size={16} />}
                      </span>
                    </div>

                    {question.type === 'currency' ? (
                      <div className="mt-auto rounded-xl bg-white px-2.5 py-2 shadow-sm sm:px-3 sm:py-3">
                        <div className="flex items-center gap-2 border-b border-gray-200 pb-2 focus-within:border-blue-500">
                          <DollarSign className="shrink-0 text-gray-400" size={20} />
                          <input
                            type="text"
                            inputMode="numeric"
                            value={formatCurrencyInput(answer?.value ?? '')}
                            placeholder={formatCurrencyInput(parseCurrencyInput(question.placeholder))}
                            onChange={(event) => handleOpenAnswer(question.id, event.target.value)}
                            className="w-full min-w-0 bg-transparent text-base font-black text-[#1e293b] outline-none placeholder:text-gray-300 sm:text-xl"
                          />
                        </div>
                        {hasPotentialRevenueError ? (
                          <p className="mt-1 text-[10px] font-semibold text-red-500 sm:mt-2 sm:text-xs">
                            O novo faturamento deve ser maior que o atual.
                          </p>
                        ) : null}
                      </div>
                    ) : (
                      <div className="mt-auto grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-2">
                        {question.options.map((option, optionIndex) => {
                          const isSelected = answer?.optionIndex === optionIndex;

                          return (
                            <button
                              type="button"
                              key={`${question.id}-${option.id ?? optionIndex}`}
                              onClick={() => handleAnswer(question.id, optionIndex, option)}
                              className={`flex min-h-8 items-center gap-2 rounded-xl border px-2 py-1.5 text-left text-[10px] font-bold leading-tight transition-all sm:min-h-10 sm:px-3 sm:py-2 sm:text-xs ${
                                isSelected
                                  ? 'border-blue-500 bg-blue-600 text-white shadow-md shadow-blue-100'
                                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50'
                              }`}
                            >
                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                                  isSelected ? 'bg-white text-blue-600' : 'bg-blue-50 text-blue-600'
                                }`}
                              >
                                {optionIndex + 1}
                              </span>
                              <span className="min-w-0">{option.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            <div className="mt-4 flex shrink-0 items-center justify-between gap-4">
              <p className="text-xs font-semibold text-[#64748b]">
                {isOverviewComplete
                  ? 'Tudo pronto para gerar a apresentação.'
                  : 'Responda todos os campos visíveis para continuar.'}
              </p>
              <button
                type="button"
                onClick={handleFinish}
                disabled={!isOverviewComplete}
                className={`flex items-center rounded-xl px-6 py-3 text-sm font-bold text-white transition-all ${
                  isOverviewComplete
                    ? 'bg-green-500 shadow-lg shadow-green-200 hover:bg-green-600'
                    : 'cursor-not-allowed bg-gray-300'
                }`}
              >
                Ver Resultados <CheckCircle2 size={18} className="ml-2" />
              </button>
            </div>
          </div>
        ) : null}

        {step === 'debt-details' && currentProfileData ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <NavigationBack
              onClick={() => {
                setQuestionIndex(currentProfileData.questions.length - 1);
                setStep('guided');
              }}
            />

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#1e293b]">Qual o valor da dívida?</h2>
              <p className="mt-2 text-[#64748b]">Precisamos desse valor para projetar os gráficos corretamente.</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-8">
              <div className="w-full max-w-sm space-y-8">
                {[
                  { label: 'Valor da dívida', value: debtValue, setValue: setDebtValue, autoFocus: true },
                  { label: 'Custo mensal estimado', value: monthlyCostValue, setValue: setMonthlyCostValue }
                ].map((field) => (
                  <div key={field.label} className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#64748b]">{field.label}</p>
                    <div className="flex items-center gap-4 border-b-2 border-gray-300 pb-2 transition-colors focus-within:border-blue-500">
                      <DollarSign className="text-gray-400" size={32} />
                      <input
                        type="text"
                        inputMode="numeric"
                        value={formatCurrencyInput(field.value)}
                        onChange={(event) => field.setValue(parseCurrencyInput(event.target.value))}
                        className="w-full bg-transparent text-4xl font-bold text-[#1e293b] outline-none"
                        autoFocus={field.autoFocus}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={handleFinish}
                className="flex items-center rounded-xl bg-green-500 px-8 py-4 font-bold text-white shadow-lg shadow-green-200 transition-all hover:bg-green-600"
              >
                Ver Resultados <CheckCircle2 size={20} className="ml-2" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
