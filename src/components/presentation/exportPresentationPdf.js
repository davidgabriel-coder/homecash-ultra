const EXPORT_WIDTH = 1920;
const EXPORT_HEIGHT = 1080;
const EXPORT_PIXEL_RATIO = 1;

export async function exportPresentationPdf(deckElement) {
  const [{ toPng }, { jsPDF }] = await Promise.all([import('html-to-image'), import('jspdf')]);

  await document.fonts?.ready;
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  await new Promise((resolve) => setTimeout(resolve, 350));

  const slideNodes = Array.from(deckElement?.querySelectorAll('.presentation-slide-page') ?? []);
  if (!slideNodes.length) return;

  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [EXPORT_WIDTH, EXPORT_HEIGHT],
    compress: false
  });

  for (const [index, slideNode] of slideNodes.entries()) {
    const slideImage = await toPng(slideNode, {
      backgroundColor: '#ffffff',
      cacheBust: false,
      height: EXPORT_HEIGHT,
      pixelRatio: EXPORT_PIXEL_RATIO,
      width: EXPORT_WIDTH,
      style: {
        height: EXPORT_HEIGHT + 'px',
        opacity: '1',
        transform: 'none',
        width: EXPORT_WIDTH + 'px'
      }
    });

    if (index > 0) {
      pdf.addPage([EXPORT_WIDTH, EXPORT_HEIGHT], 'landscape');
    }

    pdf.addImage(slideImage, 'PNG', 0, 0, EXPORT_WIDTH, EXPORT_HEIGHT);
  }

  pdf.save('homecash-apresentacao.pdf');
}
