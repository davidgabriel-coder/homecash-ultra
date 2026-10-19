import { AgendaSlide } from './slides/AgendaSlide';
import { ApprovalIndexSlide } from './slides/ApprovalIndexSlide';
import { BeginningSlide } from './slides/BeginningSlide';
import { CoverSlide } from './slides/CoverSlide';
import { DiagnosticsIntroSlide } from './slides/DiagnosticsIntroSlide';
import { MechanismSlide } from './slides/MechanismSlide';
import { ProfileChartsSlide } from './slides/ProfileChartsSlide';
import { SimulationPt2Slide } from './slides/SimulationPt2Slide';
import { SimulationPt3Slide } from './slides/SimulationPt3Slide';
import { SimulationSlide } from './slides/SimulationSlide';
import { TestimonialVideoSlide } from './slides/TestimonialVideoSlide';
import { ThreeStepsSlide } from './slides/ThreeStepsSlide';
import { WhoWeAreSlide } from './slides/WhoWeAreSlide';
import { HomeCashUltraAgendaSlide } from './slides/homecash-ultra/HomeCashUltraAgendaSlide';
import { HomeCashUltraBenefitsSlide } from './slides/homecash-ultra/HomeCashUltraBenefitsSlide';
import { HomeCashUltraCoverSlide } from './slides/homecash-ultra/HomeCashUltraCoverSlide';
import { AfterContemplationSlide } from './slides/homecash-ultra/AfterContemplationSlide';
import { AudienceFitSlide } from './slides/homecash-ultra/AudienceFitSlide';
import { CombinationIdeaSlide } from './slides/homecash-ultra/CombinationIdeaSlide';
import { MarketComparisonSlide } from './slides/homecash-ultra/MarketComparisonSlide';
import { MonthlyValuesSlide } from './slides/homecash-ultra/MonthlyValuesSlide';
import { NextStepsSlide } from './slides/homecash-ultra/NextStepsSlide';
import { OperationFlowSlide } from './slides/homecash-ultra/OperationFlowSlide';
import { OperationSafetySlide } from './slides/homecash-ultra/OperationSafetySlide';
import { PartnersTrackRecordSlide } from './slides/homecash-ultra/PartnersTrackRecordSlide';
import { PropertyStartingPointSlide } from './slides/homecash-ultra/PropertyStartingPointSlide';
import { RepurchaseModelsSlide } from './slides/homecash-ultra/RepurchaseModelsSlide';
import { SimulationSummarySlide } from './slides/homecash-ultra/SimulationSummarySlide';
import { WhoWithYouSlide } from './slides/homecash-ultra/WhoWithYouSlide';
import { HomeCashUltraAgendaSlide as CartaContempladaAgendaSlide } from './slides/homecash-ultra-carta-contemplada/HomeCashUltraAgendaSlide';
import { HomeCashUltraBenefitsSlide as CartaContempladaBenefitsSlide } from './slides/homecash-ultra-carta-contemplada/HomeCashUltraBenefitsSlide';
import { HomeCashUltraCoverSlide as CartaContempladaCoverSlide } from './slides/homecash-ultra-carta-contemplada/HomeCashUltraCoverSlide';
import { AfterContemplationSlide as CartaContempladaAfterContemplationSlide } from './slides/homecash-ultra-carta-contemplada/AfterContemplationSlide';
import { AudienceFitSlide as CartaContempladaAudienceFitSlide } from './slides/homecash-ultra-carta-contemplada/AudienceFitSlide';
import { CombinationIdeaSlide as CartaContempladaCombinationIdeaSlide } from './slides/homecash-ultra-carta-contemplada/CombinationIdeaSlide';
import { MarketComparisonSlide as CartaContempladaMarketComparisonSlide } from './slides/homecash-ultra-carta-contemplada/MarketComparisonSlide';
import { MonthlyValuesSlide as CartaContempladaMonthlyValuesSlide } from './slides/homecash-ultra-carta-contemplada/MonthlyValuesSlide';
import { NextStepsSlide as CartaContempladaNextStepsSlide } from './slides/homecash-ultra-carta-contemplada/NextStepsSlide';
import { OperationFlowSlide as CartaContempladaOperationFlowSlide } from './slides/homecash-ultra-carta-contemplada/OperationFlowSlide';
import { OperationSafetySlide as CartaContempladaOperationSafetySlide } from './slides/homecash-ultra-carta-contemplada/OperationSafetySlide';
import { PartnersTrackRecordSlide as CartaContempladaPartnersTrackRecordSlide } from './slides/homecash-ultra-carta-contemplada/PartnersTrackRecordSlide';
import { PropertyStartingPointSlide as CartaContempladaPropertyStartingPointSlide } from './slides/homecash-ultra-carta-contemplada/PropertyStartingPointSlide';
import { RepurchaseModelsSlide as CartaContempladaRepurchaseModelsSlide } from './slides/homecash-ultra-carta-contemplada/RepurchaseModelsSlide';
import { SimulationSummarySlide as CartaContempladaSimulationSummarySlide } from './slides/homecash-ultra-carta-contemplada/SimulationSummarySlide';
import { WhoWithYouSlide as CartaContempladaWhoWithYouSlide } from './slides/homecash-ultra-carta-contemplada/WhoWithYouSlide';
import { DEFAULT_PRESENTATION_TEXT_CONTENT } from './presentationTextLibrary';

const SLIDE_COMPONENTS = {
  cover: CoverSlide,
  'who-we-are': WhoWeAreSlide,
  beginning: BeginningSlide,
  agenda: AgendaSlide,
  'approval-index': ApprovalIndexSlide,
  'approval-referral': ApprovalIndexSlide,
  mechanism: MechanismSlide,
  'three-steps': ThreeStepsSlide,
  simulation: SimulationSlide,
  'simulation-pt2': SimulationPt2Slide,
  'simulation-pt3': SimulationPt3Slide,
  'testimonial-video': TestimonialVideoSlide,
  'diagnostics-intro': DiagnosticsIntroSlide,
  'profile-charts': ProfileChartsSlide,
  'homecash-ultra-cover': HomeCashUltraCoverSlide,
  'homecash-ultra-agenda': HomeCashUltraAgendaSlide,
  'homecash-property-start': PropertyStartingPointSlide,
  'homecash-combination': CombinationIdeaSlide,
  'homecash-partners': PartnersTrackRecordSlide,
  'homecash-audience-fit': AudienceFitSlide,
  'homecash-operation-flow': OperationFlowSlide,
  'homecash-repurchase-models': RepurchaseModelsSlide,
  'homecash-simulation': SimulationSummarySlide,
  'homecash-after-contemplation': AfterContemplationSlide,
  'homecash-monthly-values': MonthlyValuesSlide,
  'homecash-market-comparison': MarketComparisonSlide,
  'homecash-who-with-you': WhoWithYouSlide,
  'homecash-safety': OperationSafetySlide,
  'homecash-benefits': HomeCashUltraBenefitsSlide,
  'homecash-next-steps': NextStepsSlide,
  'carta-contemplada-cover': CartaContempladaCoverSlide,
  'carta-contemplada-agenda': CartaContempladaAgendaSlide,
  'carta-contemplada-property-start': CartaContempladaPropertyStartingPointSlide,
  'carta-contemplada-combination': CartaContempladaCombinationIdeaSlide,
  'carta-contemplada-partners': CartaContempladaPartnersTrackRecordSlide,
  'carta-contemplada-audience-fit': CartaContempladaAudienceFitSlide,
  'carta-contemplada-operation-flow': CartaContempladaOperationFlowSlide,
  'carta-contemplada-repurchase-models': CartaContempladaRepurchaseModelsSlide,
  'carta-contemplada-simulation': CartaContempladaSimulationSummarySlide,
  'carta-contemplada-after-contemplation': CartaContempladaAfterContemplationSlide,
  'carta-contemplada-monthly-values': CartaContempladaMonthlyValuesSlide,
  'carta-contemplada-market-comparison': CartaContempladaMarketComparisonSlide,
  'carta-contemplada-who-with-you': CartaContempladaWhoWithYouSlide,
  'carta-contemplada-safety': CartaContempladaOperationSafetySlide,
  'carta-contemplada-benefits': CartaContempladaBenefitsSlide,
  'carta-contemplada-next-steps': CartaContempladaNextStepsSlide
};

export function PresentationSlideRenderer({ slide, chartProps, presentationTextContent = DEFAULT_PRESENTATION_TEXT_CONTENT }) {
  const SlideComponent = SLIDE_COMPONENTS[slide.kind] ?? ProfileChartsSlide;
  const slideProps =
    slide.kind === 'cover'
      ? { coverTitle: 'Plano de Liquidez Personalizada', clientName: 'Matheus Gomes' }
      : {
          ...chartProps,
          presentationTextContent,
          profileChartPage: slide.profileChartPage ?? 0,
          variant: slide.variant
        };

  return <SlideComponent {...slideProps} />;
}
