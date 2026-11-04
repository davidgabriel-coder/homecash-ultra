import { useLayoutEffect, useRef, useState } from 'react';
import { ProfileChartsSlide } from '../ProfileChartsSlide';

/** Gráficos do diagnóstico em tela cheia, como na v1, escolhidos pelo perfil do questionário. */
export const V2ChartsSlide = ({ chartProps = {} }) => <ProfileChartsSlide {...chartProps} />;

// Os gráficos usam medidas em px; na miniatura renderizamos no tamanho de apresentação e reduzimos por escala.
const THUMBNAIL_BASE_WIDTH = 1600;
const THUMBNAIL_BASE_HEIGHT = 900;

export const V2ChartsThumbnail = ({ chartProps = {} }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scale = width / THUMBNAIL_BASE_WIDTH;

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {scale > 0 ? (
        <div
          className="pointer-events-none"
          style={{
            width: THUMBNAIL_BASE_WIDTH,
            height: THUMBNAIL_BASE_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
          }}
        >
          <ProfileChartsSlide {...chartProps} />
        </div>
      ) : null}
    </div>
  );
};
