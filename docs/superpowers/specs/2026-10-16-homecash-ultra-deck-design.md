# HomeCash Ultra presentation deck design

## Goal

Add the 16-screen “HomeCash Ultra - Financiamento + Consórcio” presentation as a second selectable deck in the existing presentation studio. Keep the current presentation available and unchanged.

## Source and screen order

The source PDF has 16 landscape 16:9 pages at 1920×1080. The page order and slide topics are:

1. Cover: “Seu patrimônio pode fazer mais”
2. Agenda
3. 01 - Ponto de partida: home equity example for a paid-off property
4. 02 - Como chegamos aqui: combining HomeCash Ultra and consórcio
5. 03 - Por trás do Ultra: Rooftop, Ademicon, OXY and track record
6. 04 - Para quem é: eligibility and collateral criteria
7. 05 - Como funciona: operation flow and repurchase choice
8. 06 - Dois caminhos: cash repurchase or financing plus consórcio
9. 07 - Simulação: example values and estimated contemplation
10. 08 - Depois da contemplação: uses for released capital
11. 09 - Valores: monthly cash flows and total cost
12. 10 - Comparativo com o mercado: HomeCash Ultra versus home equity
13. 11 - Quem está com você: illustrative customer case and partners
14. 12 - Segurança: four questions and stable operating terms
15. 13 - O que o Ultra entrega: key benefits and comparison metrics
16. 14 - Próximos passos: legal review, scenario validation and operation

The extracted text initially omitted the heading on page 7; visual review confirms that it is section 05. Preserve all pages in their PDF order and keep the visible section numbering 01–14.

## User experience

Add a deck selector to the presentation studio with the current presentation and “HomeCash Ultra - Financiamento + Consórcio” as options. Switching decks loads that deck’s own initial slide sequence and selects its cover. The current deck remains the default so existing workflows continue as before.

The new deck has one React component file per PDF page. Each is independently registered and represented in the slide thumbnails. The components use editable text and shapes rather than full-page raster screenshots. Reuse shared layout helpers only for repeated presentation structure such as the common 16:9 canvas, typography, cards, and accent labels.

## Visual direction

Recreate the PDF’s visual language: pale gray canvas, deep navy typography and panels, warm gold emphasis, rounded outlined cards, generous spacing, and compact section labels. Use the existing slide sizing convention (`h-full`, `container-type: size`, and container-relative sizing) so the slides remain composed at presentation scale. Use existing project fonts and assets where available; keep all key text and data as editable React content.

## Content rules

Preserve the supplied Portuguese copy, section order, illustrative case amounts, and table values from the PDF. The source includes a customer example on page 13; retain its “caso ilustrativo” labeling. The financial and operation figures are static presentation copy, not recalculated values.

## Code organization

- Add 16 focused components under `src/components/presentation/slides/`, one per page.
- Add only small shared presentation helpers where repeated structure warrants it.
- Register each slide kind in `PresentationSlides.jsx`.
- Define an explicit HomeCash Ultra deck list in `presentationConfig.js` and keep the existing base list intact.
- Update `PresentationStudio.jsx` to select and load either deck and render accurate thumbnails for the new slide kinds.

## Acceptance criteria

- The studio can switch between the existing deck and the new HomeCash Ultra deck.
- Selecting HomeCash Ultra loads all 16 screens in the exact source order, including section 05 on page 7.
- Every screen is implemented in its own JSX file and can be selected individually in the existing thumbnail rail.
- The current deck remains the default and retains its existing slide sequence.
- Each slide preserves its source headline, key text, and figures while matching the PDF’s 16:9 composition and navy/gold design language.

## Scope boundaries

This change does not alter the questionnaire, debt calculations, or financing model. It does not replace the PDF export path or add new financial calculations. It does not flatten source pages into images.
