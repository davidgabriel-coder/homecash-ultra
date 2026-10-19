export const DEFAULT_PRESENTATION_DECK_ID = 'standard';
export const HOMECASH_ULTRA_DECK_ID = 'homecash-ultra';
export const HOMECASH_ULTRA_CARTA_CONTEMPLADA_DECK_ID = 'homecash-ultra-carta-contemplada';

export const PRESENTATION_DECK_OPTIONS = [
  { id: DEFAULT_PRESENTATION_DECK_ID, label: 'Plano de Liquidez Personalizada' },
  { id: HOMECASH_ULTRA_DECK_ID, label: 'HomeCash Ultra · Financiamento + Consórcio' },
  { id: HOMECASH_ULTRA_CARTA_CONTEMPLADA_DECK_ID, label: 'HomeCash Ultra · Carta Contemplada' }
];

export const BASE_PRESENTATION_SLIDES = [
  { id: 'cover', label: 'Capa', kind: 'cover' },
  { id: 'agenda', label: 'Agenda', kind: 'agenda' },
  { id: 'diagnostics-intro', label: 'Diagnóstico HomeCash', kind: 'diagnostics-intro' },
  { id: 'profile-charts', label: 'Diagnóstico do perfil', kind: 'profile-charts' },
  { id: 'who-we-are', label: 'Quem somos', kind: 'who-we-are' },
  { id: 'beginning', label: 'Começo de tudo', kind: 'beginning' },
  { id: 'mechanism', label: 'O mecanismo', kind: 'mechanism' },
  { id: 'three-steps', label: '3 passos', kind: 'three-steps' },
  { id: 'simulation', label: 'Simulação', kind: 'simulation' },
  { id: 'simulation-pt2', label: 'Simulação pt2', kind: 'simulation-pt2' },
  { id: 'simulation-pt3', label: 'Simulação pt3', kind: 'simulation-pt3' },
  { id: 'approval-index', label: 'Aprovação HomeCash', kind: 'approval-index' },
  { id: 'approval-referral', label: 'Indicação HomeCash', kind: 'approval-referral', variant: 'referral' },
  { id: 'testimonial-video', label: 'Depoimento', kind: 'testimonial-video' }
];

export const HOMECASH_ULTRA_PRESENTATION_SLIDES = [
  { id: 'homecash-ultra-cover', label: 'Capa', kind: 'homecash-ultra-cover' },
  { id: 'homecash-ultra-agenda', label: 'Agenda', kind: 'homecash-ultra-agenda' },
  { id: 'homecash-ultra-01', label: '01 · Ponto de partida', kind: 'homecash-property-start' },
  { id: 'homecash-ultra-02', label: '02 · Como chegamos aqui', kind: 'homecash-combination' },
  { id: 'homecash-ultra-03', label: '03 · Por trás do Ultra', kind: 'homecash-partners' },
  { id: 'homecash-ultra-04', label: '04 · Para quem é', kind: 'homecash-audience-fit' },
  { id: 'homecash-ultra-05', label: '05 · Como funciona', kind: 'homecash-operation-flow' },
  { id: 'homecash-ultra-06', label: '06 · Dois caminhos', kind: 'homecash-repurchase-models' },
  { id: 'homecash-ultra-07', label: '07 · Simulação', kind: 'homecash-simulation' },
  { id: 'homecash-ultra-08', label: '08 · Depois da contemplação', kind: 'homecash-after-contemplation' },
  { id: 'homecash-ultra-09', label: '09 · Valores', kind: 'homecash-monthly-values' },
  { id: 'homecash-ultra-10', label: '10 · Comparativo com o mercado', kind: 'homecash-market-comparison' },
  { id: 'homecash-ultra-11', label: '11 · Quem está com você', kind: 'homecash-who-with-you' },
  { id: 'homecash-ultra-12', label: '12 · Segurança', kind: 'homecash-safety' },
  { id: 'homecash-ultra-13', label: '13 · O que o Ultra entrega', kind: 'homecash-benefits' },
  { id: 'homecash-ultra-14', label: '14 · Próximos passos', kind: 'homecash-next-steps' }
];

export const HOMECASH_ULTRA_CARTA_CONTEMPLADA_PRESENTATION_SLIDES = [
  { id: 'carta-contemplada-cover', label: 'Capa', kind: 'carta-contemplada-cover' },
  { id: 'carta-contemplada-agenda', label: 'Agenda', kind: 'carta-contemplada-agenda' },
  { id: 'carta-contemplada-01', label: '01 · Ponto de partida', kind: 'carta-contemplada-property-start' },
  { id: 'carta-contemplada-02', label: '02 · Como chegamos aqui', kind: 'carta-contemplada-combination' },
  { id: 'carta-contemplada-03', label: '03 · Por trás do Ultra', kind: 'carta-contemplada-partners' },
  { id: 'carta-contemplada-04', label: '04 · Para quem é', kind: 'carta-contemplada-audience-fit' },
  { id: 'carta-contemplada-05', label: '05 · Como funciona', kind: 'carta-contemplada-operation-flow' },
  { id: 'carta-contemplada-07', label: '07 · Simulação', kind: 'carta-contemplada-simulation' },
  { id: 'carta-contemplada-08', label: '07 • Depois da liberação', kind: 'carta-contemplada-after-contemplation' },
  { id: 'carta-contemplada-09', label: '08 · Valores', kind: 'carta-contemplada-monthly-values' },
  { id: 'carta-contemplada-10', label: '09 · Comparativo com o mercado', kind: 'carta-contemplada-market-comparison' },
  { id: 'carta-contemplada-11', label: '10 · Quem está com você', kind: 'carta-contemplada-who-with-you' },
  { id: 'carta-contemplada-12', label: '11 · Conforto', kind: 'carta-contemplada-safety' },
  { id: 'carta-contemplada-13', label: '12 · O que o Ultra entrega', kind: 'carta-contemplada-benefits' },
  { id: 'carta-contemplada-14', label: '13 · Próximos passos', kind: 'carta-contemplada-next-steps' }
];

export function createInitialPresentationSlides(deckId = DEFAULT_PRESENTATION_DECK_ID) {
  const slides = deckId === HOMECASH_ULTRA_DECK_ID
    ? HOMECASH_ULTRA_PRESENTATION_SLIDES
    : deckId === HOMECASH_ULTRA_CARTA_CONTEMPLADA_DECK_ID
      ? HOMECASH_ULTRA_CARTA_CONTEMPLADA_PRESENTATION_SLIDES
      : BASE_PRESENTATION_SLIDES;
  return slides.map((slide) => ({ ...slide }));
}
