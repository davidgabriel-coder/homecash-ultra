import { lazy, Suspense, useState } from 'react';
import Questionnaire from './components/Questionnaire';
import { DEFAULT_SCENARIO_ID, getDebtScenario } from './domain/debtScenarios';

const PresentationStudio = lazy(() => import('./components/PresentationStudio'));

const LoadingPresentation = () => (
  <div className="flex h-full w-full items-center justify-center bg-[#f3f3f3] text-sm font-semibold text-slate-500">
    Carregando apresentação...
  </div>
);

function App() {
  const [hasCompletedQuestionnaire, setHasCompletedQuestionnaire] = useState(false);
  const [initialDebt, setInitialDebt] = useState(100000);
  const [initialMonthlyCost, setInitialMonthlyCost] = useState(0);
  const [debtBreakdown, setDebtBreakdown] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [diagnosticProfileId, setDiagnosticProfileId] = useState(null);
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState({});
  const [propertyValue, setPropertyValue] = useState(2000000);
  const [initialAnalysisApproved, setInitialAnalysisApproved] = useState(null);
  const [scenarioId, setScenarioId] = useState(DEFAULT_SCENARIO_ID);

  const selectedScenario = getDebtScenario(scenarioId);

  const handleQuestionnaireComplete = (data) => {
    setProfileId(data.profileId);
    setDiagnosticProfileId(data.diagnosticProfileId);
    setQuestionnaireAnswers(data.answers);
    setPropertyValue(data.propertyValue);
    setInitialAnalysisApproved(data.initialAnalysisApproved);
    setScenarioId(data.scenarioId);
    setInitialDebt(data.initialDebt);
    setDebtBreakdown(data.debtBreakdown ?? null);
    setInitialMonthlyCost(data.initialMonthlyCost ?? 0);
    setHasCompletedQuestionnaire(true);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f3f3f3] font-sans">
      {!hasCompletedQuestionnaire ? (
        <Questionnaire onComplete={handleQuestionnaireComplete} />
      ) : (
        <Suspense fallback={<LoadingPresentation />}>
          <PresentationStudio
            profileId={profileId}
            diagnosticProfileId={diagnosticProfileId}
            questionnaireAnswers={questionnaireAnswers}
            propertyValue={propertyValue}
            initialAnalysisApproved={initialAnalysisApproved}
            scenarioId={selectedScenario.id}
            scenarioLabel={selectedScenario.label}
            scenarioColor={selectedScenario.color}
            initialDebt={initialDebt}
            debtBreakdown={debtBreakdown}
            initialMonthlyCost={initialMonthlyCost}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
