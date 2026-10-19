# HomeCash Ultra second deck implementation plan

> **For agentic workers:** Execute inline in this workspace. Do not delegate. Tasks use checkbox syntax to track progress.

**Goal:** Add the 16 PDF screens as a separate selectable presentation while preserving the existing presentation and the PDF's exact page order.

**Architecture:** Keep the existing base deck as the default. Add a HomeCash Ultra deck configuration, one React slide component per PDF page, and a selector in `PresentationStudio.jsx` that loads either deck at its cover. Reuse small presentational primitives for consistent typography, cards, and section labels, while keeping each complete screen in its own component file.

**Tech Stack:** React 19, Vite, Tailwind CSS 4, lucide-react.

## Global Constraints

- The new deck has exactly 16 slides in the PDF order: cover, agenda, then sections 01 through 14.
- The current presentation remains the default and keeps its existing configuration.
- Every PDF page has its own JSX component file.
- Preserve source Portuguese copy and sample figures as static content.
- Do not use flattened page screenshots as slide backgrounds.
- Keep the new deck order locked in the editor; retain existing move controls for the current deck.
- Do not add or run tests unless requested.

---

### Task 1: Add reusable HomeCash Ultra slide primitives

**Files:**
- Create: `src/components/presentation/slides/homeCashUltraShared.jsx`

**Interfaces:**
- Produces `HomeCashUltraCanvas`, `HomeCashUltraSectionLabel`, `HomeCashUltraTitle`, `HomeCashUltraCard`, and `HOME_CASH_ULTRA_COLORS` for the 16 new slide files.

- [x] Add a 16:9-size-aware canvas using `relative h-full overflow-hidden [container-type:size]` and the PDF-inspired pale gray, navy, and gold palette.
- [x] Add small title and outlined-card primitives that accept standard React children and class names.

### Task 2: Build pages 1–8 as individual slide components

**Files:**
- Create: `src/components/presentation/slides/HomeCashUltraCoverSlide.jsx`
- Create: `src/components/presentation/slides/HomeCashUltraAgendaSlide.jsx`
- Create: `src/components/presentation/slides/PropertyStartingPointSlide.jsx`
- Create: `src/components/presentation/slides/CombinationIdeaSlide.jsx`
- Create: `src/components/presentation/slides/PartnersTrackRecordSlide.jsx`
- Create: `src/components/presentation/slides/AudienceFitSlide.jsx`
- Create: `src/components/presentation/slides/OperationFlowSlide.jsx`
- Create: `src/components/presentation/slides/RepurchaseModelsSlide.jsx`

**Interfaces:**
- Each named export matching its component file renders one self-contained screen and uses only the shared primitives plus project assets.

- [x] Implement the cover and agenda in PDF pages 1–2.
- [x] Implement point of departure, combined mechanism, partners, eligibility, operation flow, and repurchase paths in PDF pages 3–8.
- [x] Keep section markers and the source page order exactly as 01, 02, 03, 04, 05, and 06.

### Task 3: Build pages 9–16 as individual slide components

**Files:**
- Create: `src/components/presentation/slides/SimulationSummarySlide.jsx`
- Create: `src/components/presentation/slides/AfterContemplationSlide.jsx`
- Create: `src/components/presentation/slides/MonthlyValuesSlide.jsx`
- Create: `src/components/presentation/slides/MarketComparisonSlide.jsx`
- Create: `src/components/presentation/slides/WhoWithYouSlide.jsx`
- Create: `src/components/presentation/slides/OperationSafetySlide.jsx`
- Create: `src/components/presentation/slides/HomeCashUltraBenefitsSlide.jsx`
- Create: `src/components/presentation/slides/NextStepsSlide.jsx`

**Interfaces:**
- Each default-named export renders one self-contained screen in the PDF page order.

- [x] Implement simulation, use of capital, month-by-month values, market comparison, customer/partner proof, security answers, benefits, and next steps in PDF pages 9–16.
- [x] Preserve the values and illustrative-case labeling shown in the PDF.

### Task 4: Register and select the new deck

**Files:**
- Modify: `src/components/presentation/PresentationSlides.jsx`
- Modify: `src/components/presentation/presentationConfig.js`
- Modify: `src/components/PresentationStudio.jsx`

**Interfaces:**
- `presentationConfig.js` exports current and HomeCash Ultra deck definitions plus an initializer for each deck.
- `PresentationSlides.jsx` resolves each new `kind` to its dedicated component.
- `PresentationStudio.jsx` exposes a deck selector and loads that deck's ordered slide list, with its cover active.

- [x] Preserve the existing base slide list and default.
- [x] Add the 16 new `kind` entries in the PDF order, including the page 7 section-05 flow slide.
- [x] Add an accessible deck selector in the toolbar and reset active slide to the selected deck's cover on change.
- [x] Keep slide reordering enabled for the existing deck; hide or disable it for the fixed-order PDF deck.
- [x] Render the new slide components directly in the thumbnail rail.

### Task 5: Review the resulting change

**Files:**
- Review: all files created or modified above.

- [x] Confirm the configuration lists 16 new slides in exact PDF order and leaves the current base deck unchanged.
- [x] Review the component/configuration mapping and the slide copy against the rendered PDF pages.
- [ ] Run `npm run build`; the attempt stopped because `node_modules` is not installed in this workspace (`vite` was not found). Do not add or run tests.
- [x] Report the build limitation caused by unavailable local dependencies.
