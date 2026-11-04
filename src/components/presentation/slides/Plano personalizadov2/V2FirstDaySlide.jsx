import { TrendingUp } from 'lucide-react';
import { useId } from 'react';
import { V2Canvas, V2Eyebrow, V2Header } from './v2Shared';

// Casa (telhado, chaminé e porta vazada) dentro do círculo, numa área de 116 × 124 centrada em (150, 150).
const ICON_TOP = 88;
const ICON_BOTTOM = 212;
// Cantos arredondados com curvas quadráticas em cada vértice (pico, beirais, paredes e base).
const HOUSE_PATH =
  'M141 96 Q150 87 159 96 L201 133 Q209 141 198 141 L197 141 Q193 141 193 146 L193 200 Q193 212 181 212 L119 212 Q107 212 107 200 L107 146 Q107 141 103 141 L102 141 Q91 141 99 133 Z';
const CHIMNEY = { x: 110, y: 94, width: 18, height: 42 };
const DOOR_PATH = 'M136 212 L136 181 Q136 166 150 166 Q164 166 164 181 L164 212 Z';

// Preenchida de baixo para cima na mesma proporção do arco.
const BuildingFill = ({ share }) => {
  const clipId = `v2-house-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const fillHeight = (ICON_BOTTOM - ICON_TOP) * share;
  const houseShape = (
    <>
      <path d={HOUSE_PATH} strokeLinejoin="round" />
      <rect x={CHIMNEY.x} y={CHIMNEY.y} width={CHIMNEY.width} height={CHIMNEY.height} rx="5" />
    </>
  );

  return (
    <g>
      <defs>
        <clipPath id={clipId}>{houseShape}</clipPath>
      </defs>
      <g fill="#CBD6F4">{houseShape}</g>
      <rect x="92" y={ICON_BOTTOM - fillHeight} width="116" height={fillHeight} fill="#235CE9" clipPath={`url(#${clipId})`} />
      <path d={DOOR_PATH} fill="#FFFFFF" />
    </g>
  );
};

export const V2FirstDaySlide = ({ nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />
    <div className="absolute left-[5%] right-[5%] top-[14.5%]">
      <V2Eyebrow>O ponto de partida</V2Eyebrow>
      <h1 className="mt-[0.7cqw] text-[3.125cqw] font-[400] leading-[1.05] tracking-[-0.03em] text-[#1C2D7F]">
        A conta que <span className="font-[700] text-[#235CE9]">quase todo mundo faz</span>
      </h1>
    </div>

    <div className="absolute left-[5%] top-[25.9%] flex h-[64.6%] w-[65%] items-center gap-[2.92cqw] rounded-[1.25cqw] bg-white px-[2.92cqw] ring-1 ring-[#1E203F14]">
      <svg viewBox="0 0 300 300" aria-hidden="true" className="h-[15.625cqw] w-[15.625cqw] shrink-0">
        <circle cx="150" cy="150" r="120" fill="none" stroke="#E5E7F4" strokeWidth="28" />
        <circle
          cx="150"
          cy="150"
          r="120"
          transform="rotate(-90 150 150)"
          fill="none"
          stroke="#235CE9"
          strokeWidth="28"
          strokeLinecap="round"
          strokeDasharray="443 754"
        />
        <BuildingFill share={0.588} />
      </svg>

      <div className="flex w-[37.6cqw] shrink-0 flex-col gap-[1.2cqw]">
        <div className="flex items-center gap-[0.8cqw] text-[1.56cqw] leading-none">
          <span className="font-[700] text-[#1C2D7F]">R$ 477.850</span>
          <span className="font-[500] text-[#5A5F7D]">÷ R$ 813.000 =</span>
        </div>
        <div className="text-[12.5cqw] font-[700] leading-[0.92] tracking-[-0.06em] text-[#1C2D7F]">58,8%</div>
        <p className="max-w-[32.3cqw] text-[1.25cqw] leading-[1.5] text-[#5A5F7D]">
          É uma conta natural, que olha para o valor que entra no primeiro dia. Só que o primeiro dia é só o começo da
          operação.
        </p>
      </div>
    </div>

    <div className="absolute left-[71.04%] top-[25.9%] flex h-[64.6%] w-[23.96%] flex-col justify-between rounded-[1.25cqw] bg-[#1C2D7F] p-[2.08cqw] text-white">
      <div className="flex h-[3.125cqw] w-[3.125cqw] items-center justify-center rounded-full bg-[#EDB424] text-[#1C2D7F]">
        <TrendingUp className="h-[1.25cqw] w-[1.25cqw]" strokeWidth={2} aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-[1.04cqw]">
        <h2 className="text-[2.29cqw] font-[700] leading-[1.15] tracking-[-0.02em]">
          O resultado se mede no dia em que a operação termina.
        </h2>
        <p className="text-[1.04cqw] leading-[1.5] text-[#BCCAE9]">
          Nas próximas telas, vamos ver quanto do valor do imóvel você preserva até o fim.
        </p>
      </div>
    </div>

    <p className="absolute left-[5%] top-[93.5%] text-[0.78cqw] leading-[1.2] text-[#5A5F7D]">
      Liquidez imediata da proposta sobre o valor do imóvel informado no diagnóstico (R$ 813.000).
    </p>
  </V2Canvas>
);
