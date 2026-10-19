import { useEffect, useMemo, useRef, useState } from 'react';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down.mjs';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left.mjs';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right.mjs';
import ChevronUp from 'lucide-react/dist/esm/icons/chevron-up.mjs';
import Download from 'lucide-react/dist/esm/icons/download.mjs';
import Play from 'lucide-react/dist/esm/icons/play.mjs';
import X from 'lucide-react/dist/esm/icons/x.mjs';
import rooftopLogo from '../assets/rooftop-homecash-logo.svg';
import rooftopSymbol from '../assets/Cópia de rooftop-simbolo_principal.svg';
import dootsLine from '../assets/doots line.svg';
import { buildDebtProjection } from '../domain/debtProjection';
import {
  createInitialPresentationSlides,
  DEFAULT_PRESENTATION_DECK_ID,
  HOMECASH_ULTRA_CARTA_CONTEMPLADA_DECK_ID,
  HOMECASH_ULTRA_DECK_ID,
  PRESENTATION_DECK_OPTIONS
} from './presentation/presentationConfig';
import { PresentationSlideRenderer } from './presentation/PresentationSlides';
import { getPresentationTextContent } from './presentation/presentationTextLibrary';

function PresentationStudio({
  profileId,
  diagnosticProfileId,
  questionnaireAnswers,
  propertyValue,
  initialAnalysisApproved,
  scenarioId,
  scenarioLabel,
  scenarioColor,
  initialDebt,
  debtBreakdown,
  initialMonthlyCost,
}) {
  const [activeDeckId, setActiveDeckId] = useState(DEFAULT_PRESENTATION_DECK_ID);
  const [activeSlide, setActiveSlide] = useState('cover');
  const [slides, setSlides] = useState(() => createInitialPresentationSlides(DEFAULT_PRESENTATION_DECK_ID));
  const [isPresenting, setIsPresenting] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const presentationRef = useRef(null);
  const exportDeckRef = useRef(null);

  const activeSlideIndex = Math.max(slides.findIndex((slide) => slide.id === activeSlide), 0);
  const activeSlideData = slides[activeSlideIndex] ?? slides[0];
  const projectionData = useMemo(
    () =>
      buildDebtProjection({
        scenarioId,
        initialDebt,
        debtBreakdown
      }),
    [debtBreakdown, initialDebt, scenarioId]
  );
  const presentationTextContent = useMemo(
    () => getPresentationTextContent(questionnaireAnswers),
    [questionnaireAnswers]
  );

  const handleExportPdf = async () => {
    setIsExporting(true);

    try {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      const { exportPresentationPdf } = await import('./presentation/exportPresentationPdf');
      await exportPresentationPdf(exportDeckRef.current);
    } catch (error) {
      console.error('Erro ao exportar PDF:', error);
      window.alert('Não foi possível exportar o PDF. Abra o console para ver o erro técnico.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleStartPresentation = async () => {
    setIsPresenting(true);

    const target = presentationRef.current ?? document.documentElement;
    if (!document.fullscreenElement && target.requestFullscreen) {
      await target.requestFullscreen();
    }
  };

  const handleStopPresentation = async () => {
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
    }

    setIsPresenting(false);
  };

  const handleDeckChange = (event) => {
    const nextDeckId = event.target.value;
    const nextSlides = createInitialPresentationSlides(nextDeckId);
    setActiveDeckId(nextDeckId);
    setSlides(nextSlides);
    setActiveSlide(nextSlides[0].id);
  };

  const goToNextSlide = () => {
    setActiveSlide(slides[(activeSlideIndex + 1) % slides.length].id);
  };

  const goToPreviousSlide = () => {
    setActiveSlide(slides[(activeSlideIndex - 1 + slides.length) % slides.length].id);
  };

  const moveSlide = (slideIndex, direction) => {
    const targetIndex = slideIndex + direction;

    if (targetIndex < 0 || targetIndex >= slides.length) {
      return;
    }

    setSlides((currentSlides) => {
      const nextSlides = [...currentSlides];
      [nextSlides[slideIndex], nextSlides[targetIndex]] = [nextSlides[targetIndex], nextSlides[slideIndex]];
      return nextSlides;
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isPresenting) {
        event.preventDefault();
        handleStopPresentation();
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault();
        setActiveSlide((currentSlide) => {
          const currentIndex = Math.max(slides.findIndex((slide) => slide.id === currentSlide), 0);
          return slides[(currentIndex + 1) % slides.length].id;
        });
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        setActiveSlide((currentSlide) => {
          const currentIndex = Math.max(slides.findIndex((slide) => slide.id === currentSlide), 0);
          return slides[(currentIndex - 1 + slides.length) % slides.length].id;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresenting, slides]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsPresenting(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const chartSlideProps = {
    profileId,
    diagnosticProfileId,
    questionnaireAnswers,
    propertyValue,
    initialAnalysisApproved,
    scenarioId,
    scenarioLabel,
    scenarioColor,
    initialDebt,
    debtBreakdown,
    initialMonthlyCost,
    pressureData: projectionData.pressureData,
    availableOptionsData: projectionData.availableOptionsData,
    inertiaCostData: projectionData.inertiaCostData
  };

  return (
    <div
      className={`presentation-shell flex h-full w-full flex-col overflow-hidden bg-[#f3f4f6] text-slate-900 ${
        isExporting ? 'is-exporting' : ''
      }`}
    >
      <div className="flex h-full min-h-0 flex-col gap-3 bg-[#f3f4f6] p-3 font-excon sm:gap-4 sm:p-4 lg:p-5">
      <header className="presentation-toolbar flex shrink-0 flex-col justify-between gap-4 rounded-[20px] border border-slate-200/80 bg-white px-4 py-3 shadow-[0_4px_18px_rgba(15,23,42,0.045)] lg:flex-row lg:items-center lg:px-5">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">
            <img src={rooftopSymbol} alt="Símbolo Rooftop" className="h-10 w-10 object-contain" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#63709f]">HomeCash · apresentações</div>
            <div className="mt-0.5 text-[15px] font-bold tracking-[-0.025em] text-[#172554]">Estúdio de apresentações</div>
          </div>
          <span className="mx-1 hidden h-8 w-px bg-slate-200 sm:block" />
          <div className="relative min-w-0">
            <select
              value={activeDeckId}
              onChange={handleDeckChange}
              aria-label="Selecionar apresentação"
              className="max-w-[min(48vw,340px)] cursor-pointer appearance-none truncate rounded-xl border border-slate-200 bg-[#f8f9fc] py-2.5 pl-3.5 pr-9 text-xs font-semibold text-[#1c2d7f] outline-none transition-colors hover:border-[#aeb9df] focus-visible:border-[#1c2d7f] focus-visible:ring-4 focus-visible:ring-[#1c2d7f]/10"
            >
              {PRESENTATION_DECK_OPTIONS.map((deck) => <option key={deck.id} value={deck.id}>{deck.label}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end sm:gap-2.5">
          <div className="mr-1 flex h-10 items-center gap-2 rounded-xl bg-[#f3f5fb] px-3 text-[12px] font-semibold text-slate-600">
            <span className="text-[#1c2d7f]">{String(activeSlideIndex + 1).padStart(2, '0')}</span>
            <span className="text-slate-300">/</span>
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>
          <button
            onClick={goToPreviousSlide}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-[#bac5e7] hover:bg-[#f5f7ff] hover:text-[#1c2d7f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1c2d7f]/10"
            aria-label="Slide anterior"
            title="Slide anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goToNextSlide}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-[12px] font-semibold text-slate-700 transition-colors hover:border-[#bac5e7] hover:bg-[#f5f7ff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1c2d7f]/10"
          >
            {activeSlideIndex === slides.length - 1 ? 'Voltar para capa' : 'Próximo slide'}
            <ChevronRight size={16} />
          </button>
          <button
            onClick={handleStartPresentation}
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#1c2d7f] px-4 text-[12px] font-semibold text-white shadow-[0_3px_8px_rgba(28,45,127,0.18)] transition-colors hover:bg-[#263b96] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1c2d7f]/20"
          >
            <Play size={16} />
            Apresentar
          </button>
          <button
            onClick={handleExportPdf}
            disabled={isExporting}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#ead28b] bg-[#fff9e8] px-4 text-[12px] font-semibold text-[#6f5310] transition-colors hover:border-[#e2bf56] hover:bg-[#fff4cf] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#edb424]/20 disabled:cursor-wait disabled:opacity-60"
          >
            <Download size={16} />
            {isExporting ? 'Exportando...' : 'Exportar PDF'}
          </button>
        </div>
      </header>

      <main className="presentation-workspace flex min-h-0 flex-1 flex-col gap-3 lg:flex-row lg:gap-4">
        <aside className="presentation-sidebar flex max-h-52 w-full shrink-0 flex-col overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.045)] lg:max-h-none lg:w-[250px] lg:min-w-[250px]">
          <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-4 py-3.5">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Navegação</div>
              <div className="mt-0.5 text-[15px] font-bold tracking-[-0.02em] text-[#172554]">Slides</div>
            </div>
            <div className="rounded-lg bg-[#f3f5fb] px-2.5 py-1.5 text-[11px] font-bold tabular-nums text-[#526294]">
              {String(slides.length).padStart(2, '0')}
            </div>
          </div>

          <div className="flex min-h-0 flex-1 gap-2.5 overflow-x-auto p-2.5 lg:flex-col lg:gap-2 lg:overflow-x-hidden lg:overflow-y-auto lg:p-3">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`w-[190px] shrink-0 overflow-hidden rounded-[15px] border text-left transition-all duration-200 lg:w-full ${
                  activeSlide === slide.id
                    ? 'border-[#29418f] bg-[#f7f8fd] shadow-[0_3px_10px_rgba(28,45,127,0.09)] ring-2 ring-[#1c2d7f]/[0.06]'
                    : 'border-slate-200 bg-white hover:border-[#bdc7e4] hover:bg-[#fafbff]'
                }`}
              >
                <div className="p-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveSlide(slide.id)}
                    className="block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c2d7f] focus-visible:ring-offset-2"
                    aria-label={`Selecionar slide ${slide.label}`}
                  >
                    <div className="aspect-[16/9] overflow-hidden rounded-[9px] border border-slate-200/80 bg-slate-50">
                      {activeDeckId === HOMECASH_ULTRA_DECK_ID || activeDeckId === HOMECASH_ULTRA_CARTA_CONTEMPLADA_DECK_ID ? (
                        <PresentationSlideRenderer
                          slide={slide}
                          chartProps={chartSlideProps}
                          presentationTextContent={presentationTextContent}
                        />
                      ) : slide.kind === 'cover' ? (
                        <div className="flex h-full flex-col justify-center gap-2 bg-[#1c2d7f] px-3 text-white">
                          <img src={rooftopLogo} alt="" className="w-[96px] opacity-95" />
                          <div className="h-2 w-28 rounded-full bg-white/80" />
                          <div className="h-2 w-16 rounded-full bg-white/60" />
                        </div>
                      ) : slide.kind === 'who-we-are' ? (
                        <div className="grid h-full grid-cols-2 gap-[2px] bg-[#eef0f7] p-2">
                          <div className="rounded-[6px] bg-[#253791]" />
                          <div className="grid grid-rows-2 gap-[2px]">
                            <div className="rounded-[6px] bg-[#dfe4f3]" />
                            <div className="rounded-[6px] bg-[#253791]" />
                          </div>
                        </div>
                      ) : slide.kind === 'beginning' ? (
                        <div className="relative h-full overflow-hidden bg-[#eef0f7] p-2">
                          <div className="mx-auto h-3 w-24 rounded-full bg-[#253791]" />
                          <div className="mt-3 grid grid-cols-2 gap-1">
                            <div className="h-8 rounded-[5px] bg-[#253791]" />
                            <div className="h-8 rounded-[5px] bg-[#2c62f0]" />
                          </div>
                          <div className="mt-1 h-8 rounded-[5px] bg-[#253791]" />
                          <div className="absolute bottom-1 right-1 h-14 w-10 rounded-t-[4px] bg-[#c8b28d]" />
                        </div>
                      ) : slide.kind === 'agenda' ? (
                        <div className="flex h-full bg-[#1c2d7f] px-3 text-white">
                          <div className="flex w-[42%] items-center">
                            <div className="h-4 w-20 rounded-full bg-white/90" />
                          </div>
                          <div className="flex flex-1 flex-col justify-center gap-2">
                            <div className="h-2 w-28 rounded-full bg-white/90" />
                            <div className="h-2 w-24 rounded-full bg-white/90" />
                            <div className="h-2 w-20 rounded-full bg-white/90" />
                            <div className="h-2 w-24 rounded-full bg-white/90" />
                          </div>
                        </div>
                      ) : slide.kind === 'mechanism' ? (
                        <div className="relative h-full overflow-hidden bg-[#eef0f7]">
                          <div className="absolute left-[5%] top-[12%] h-[14%] w-[42%] rounded-[8px] bg-[#253793]" />
                          <div className="absolute left-[49%] top-[12%] h-[14%] w-[28%] rounded-[8px] bg-[#2e66ee]" />
                          <div className="absolute left-[79%] top-[12%] h-[14%] w-[16%] rounded-[8px] bg-[#253793]" />
                          <div className="absolute left-[5%] top-[40%] h-[14%] w-[42%] rounded-[8px] bg-[#2e66ee]" />
                          <div className="absolute left-[49%] top-[40%] h-[14%] w-[28%] rounded-[8px] bg-[#253793]" />
                          <div className="absolute left-[79%] top-[40%] h-[14%] w-[16%] rounded-[8px] bg-[#EDB424]" />
                        </div>
                      ) : slide.kind === 'simulation' ? (
                        <div className="relative h-full overflow-hidden bg-[#eef0f7] p-2">
                          <div className="h-3 w-28 rounded-full bg-[#253793]" />
                          <div className="mt-1 h-2 w-24 rounded-full bg-[#8792c1]" />
                          <img src={dootsLine} alt="" className="absolute left-[6%] top-[28%] h-[5%] w-[88%]" />
                          <div className="absolute left-[8%] top-[48%] h-5 w-12 rounded-[5px] bg-[#253793]" />
                          <div className="absolute left-[31%] top-[39%] h-5 w-12 rounded-[5px] bg-[#2e66ee]" />
                          <div className="absolute left-[54%] top-[33%] h-5 w-12 rounded-[5px] bg-[#253793]" />
                          <div className="absolute left-[77%] top-[27%] h-5 w-12 rounded-[5px] bg-[#2e66ee]" />
                          <div className="absolute bottom-2 left-[8%] h-4 w-16 rounded-[5px] border border-[#253793]" />
                        </div>
                      ) : slide.kind === 'simulation-pt2' ? (
                        <div className="relative h-full overflow-hidden bg-[#f0f0f0] p-2">
                          <div className="h-3 w-28 rounded-full bg-[#1c2d7f]" />
                          <div className="mt-1 h-2 w-24 rounded-full bg-[#8792c1]" />
                          <div className="absolute right-[7%] top-[10%] h-4 w-20 rounded-[5px] bg-[#0fb35e]" />
                          <div className="absolute right-[7%] top-[22%] h-5 w-20 rounded-[5px] bg-[#0fb35e]" />
                          <img src={dootsLine} alt="" className="absolute left-[6%] top-[29%] h-[5%] w-[88%]" />
                          <img src={dootsLine} alt="" className="absolute left-[6%] top-[55%] h-[5%] w-[88%]" />
                          <div className="absolute left-[8%] top-[45%] h-4 w-14 rounded-[5px] bg-[#1c2d7f]" />
                          <div className="absolute left-[30%] top-[35%] h-4 w-28 rounded-[5px] bg-[#235ce9]" />
                          <div className="absolute left-[8%] top-[61%] h-4 w-14 rounded-[5px] bg-[#a71215]" />
                          <div className="absolute left-[30%] top-[52%] h-4 w-28 rounded-[5px] bg-[#a71215]" />
                          <div className="absolute bottom-1 left-[8%] h-3 w-24 rounded-[4px] border border-[#a71215]" />
                        </div>
                      ) : slide.kind === 'simulation-pt3' ? (
                        <div className="relative h-full overflow-hidden bg-[#f0f0f0] p-2">
                          <div className="h-3 w-28 rounded-full bg-[#1c2d7f]" />
                          <div className="mt-1 h-2 w-24 rounded-full bg-[#8792c1]" />
                          <div className="absolute right-[7%] top-[10%] h-4 w-20 rounded-[5px] bg-[#0fb35e]" />
                          <div className="absolute right-[7%] top-[22%] h-5 w-20 rounded-[5px] bg-[#0fb35e]" />
                          <img src={dootsLine} alt="" className="absolute left-[6%] top-[29%] h-[5%] w-[88%]" />
                          <img src={dootsLine} alt="" className="absolute left-[6%] top-[55%] h-[5%] w-[88%]" />
                          <div className="absolute left-[8%] top-[42%] h-4 w-14 rounded-[5px] bg-[#1c2d7f]" />
                          <div className="absolute left-[30%] top-[36%] h-4 w-14 rounded-[5px] bg-[#1c2d7f]" />
                          <div className="absolute left-[53%] top-[28%] h-4 w-[34%] rounded-[5px] bg-[#235ce9]" />
                          <div className="absolute left-[8%] top-[61%] h-4 w-14 rounded-[5px] bg-[#a71215]" />
                          <div className="absolute left-[30%] top-[54%] h-4 w-[36%] rounded-[5px] bg-[#a71215]" />
                          <div className="absolute bottom-2 left-[8%] right-[8%] h-2 rounded-full bg-[#8792c1]" />
                        </div>
                      ) : slide.kind === 'diagnostics-intro' ? (
                        <div className="relative h-full overflow-hidden bg-[linear-gradient(200deg,#f0f0f0_45%,#d9def2_100%)]">
                          <div className="absolute left-[5%] top-[42%] flex gap-1">
                            <div className="h-2 w-8 rounded-full bg-[#2864ed]" />
                            <div className="h-2 w-8 rounded-full bg-[#2864ed]" />
                            <div className="h-2 w-9 rounded-full bg-[#2864ed]" />
                          </div>
                          <div className="absolute left-[5%] top-[51%] h-3 w-[38%] rounded-full bg-[#253793]" />
                          <div className="absolute left-[48%] top-[30%] flex w-[43%] flex-col gap-1">
                            <div className="h-2 w-full rounded-full bg-[#253793]" />
                            <div className="h-2 w-[94%] rounded-full bg-[#253793]" />
                            <div className="h-2 w-[88%] rounded-full bg-[#253793]" />
                            <div className="h-2 w-[96%] rounded-full bg-[#253793]" />
                            <div className="h-2 w-[76%] rounded-full bg-[#253793]" />
                          </div>
                        </div>
                      ) : (
                        <div className="grid h-full grid-cols-2 grid-rows-2 gap-[2px] bg-white p-2">
                          <div className="rounded-[6px] bg-[#eef2ff]" />
                          <div className="rounded-[6px] bg-[#f8fafc]" />
                          <div className="rounded-[6px] bg-[#eef2ff]" />
                          <div className="rounded-[6px] bg-[#f8fafc]" />
                        </div>
                      )}
                    </div>
                  </button>
                  <div className="mt-2 flex items-center justify-between gap-2 px-0.5">
                    <button
                      type="button"
                      onClick={() => setActiveSlide(slide.id)}
                      className={`min-w-0 flex-1 cursor-pointer truncate text-left text-[11px] font-semibold ${activeSlide === slide.id ? 'text-[#1c2d7f]' : 'text-slate-600'}`}
                    >
                      {index + 1}. {slide.label}
                    </button>
                    {activeDeckId === DEFAULT_PRESENTATION_DECK_ID ? (
                      <div className="flex shrink-0 items-center gap-1">
                        <button
                          type="button"
                          onClick={() => moveSlide(index, -1)}
                          disabled={index === 0}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-[#edf1ff] hover:text-[#1c2d7f] disabled:cursor-not-allowed disabled:opacity-35"
                          aria-label={`Mover ${slide.label} para cima`}
                          title="Mover para cima"
                        >
                          <ChevronUp size={15} />
                        </button>
                        <button
                          type="button"
                          onClick={() => moveSlide(index, 1)}
                          disabled={index === slides.length - 1}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-[#edf1ff] hover:text-[#1c2d7f] disabled:cursor-not-allowed disabled:opacity-35"
                          aria-label={`Mover ${slide.label} para baixo`}
                          title="Mover para baixo"
                        >
                          <ChevronDown size={15} />
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="presentation-stage flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center overflow-hidden rounded-[20px] border border-[#dce2ef] bg-[radial-gradient(circle_at_1px_1px,rgba(28,45,127,0.11)_1px,transparent_0)] bg-[length:22px_22px] p-3 sm:p-5 lg:p-7">
          <div className="mb-3 flex w-full max-w-[1400px] items-center justify-between px-1">
            <div className="min-w-0 truncate text-[12px] font-semibold text-[#526294]">{activeSlideData.label}</div>
            <div className="ml-3 shrink-0 text-[10px] font-semibold uppercase tracking-[0.11em] text-slate-400">Pré-visualização · 16:9</div>
          </div>
          <div className="w-full max-w-[1400px]">
            <div className="aspect-[16/9] overflow-hidden rounded-[10px] border border-white bg-white shadow-[0_20px_55px_rgba(25,42,91,0.18)] ring-1 ring-[#1c2d7f]/[0.08]">
              <div className="presentation-slide-page h-full overflow-hidden bg-white">
                <PresentationSlideRenderer
                  slide={activeSlideData}
                  chartProps={chartSlideProps}
                  presentationTextContent={presentationTextContent}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {isExporting ? (
        <div ref={exportDeckRef} className="presentation-print-deck" aria-hidden={!isExporting}>
          {slides.map((slide) => (
            <section key={slide.id} className="print-slide">
              <div className="presentation-slide-page h-full overflow-hidden bg-white shadow-[0_24px_90px_rgba(15,23,42,0.16)]">
                <PresentationSlideRenderer
                  slide={slide}
                  chartProps={chartSlideProps}
                  presentationTextContent={presentationTextContent}
                />
              </div>
            </section>
          ))}
        </div>
      ) : null}

      {isPresenting ? (
        <div ref={presentationRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative aspect-[16/9] h-auto max-h-screen w-screen max-w-[177.78vh] overflow-hidden bg-white">
            <div className="presentation-slide-page h-full overflow-hidden bg-white">
              <PresentationSlideRenderer
                slide={activeSlideData}
                chartProps={chartSlideProps}
                presentationTextContent={presentationTextContent}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={goToPreviousSlide}
            className="absolute left-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            type="button"
            onClick={goToNextSlide}
            className="absolute right-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Próximo slide"
          >
            <ChevronRight size={26} />
          </button>

          <button
            type="button"
            onClick={handleStopPresentation}
            className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Sair da apresentação"
          >
            <X size={22} />
          </button>
        </div>
      ) : null}
      </div>
    </div>
  );
}


export default PresentationStudio;
