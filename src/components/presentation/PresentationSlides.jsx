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
import { HomeCashUltraAgendaSlide } from './slides/HomeCashUltraAgendaSlide';
import { HomeCashUltraBenefitsSlide } from './slides/HomeCashUltraBenefitsSlide';
import { HomeCashUltraCoverSlide } from './slides/HomeCashUltraCoverSlide';
import { AfterContemplationSlide } from './slides/AfterContemplationSlide';
import { AudienceFitSlide } from './slides/AudienceFitSlide';
import { CombinationIdeaSlide } from './slides/CombinationIdeaSlide';
import { MarketComparisonSlide } from './slides/MarketComparisonSlide';
import { MonthlyValuesSlide } from './slides/MonthlyValuesSlide';
import { NextStepsSlide } from './slides/NextStepsSlide';
import { OperationFlowSlide } from './slides/OperationFlowSlide';
import { OperationSafetySlide } from './slides/OperationSafetySlide';
import { PartnersTrackRecordSlide } from './slides/PartnersTrackRecordSlide';
import { PropertyStartingPointSlide } from './slides/PropertyStartingPointSlide';
import { RepurchaseModelsSlide } from './slides/RepurchaseModelsSlide';
import { SimulationSummarySlide } from './slides/SimulationSummarySlide';
import { WhoWithYouSlide } from './slides/WhoWithYouSlide';
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
  'homecash-next-steps': NextStepsSlide
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
