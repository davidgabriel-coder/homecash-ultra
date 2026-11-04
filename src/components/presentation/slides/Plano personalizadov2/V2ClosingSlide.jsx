import { DEFAULT_PLANO_V2_TEXT_CONTENT, getClientInitials } from './planoPersonalizadoV2TextLibrary';
import { V2Canvas, V2Logo } from './v2Shared';

export const V2ClosingSlide = ({ presentationTextContent = DEFAULT_PLANO_V2_TEXT_CONTENT }) => (
  <V2Canvas>
    <V2Logo className="absolute left-[5.42%] top-[7.6%]" />
    <div className="absolute left-[5%] top-[31.5%] w-[42.7%]">
      <div className="flex gap-[0.42cqw]">
        <span className="flex h-[2.08cqw] items-center rounded-full bg-white px-[1.04cqw] text-[0.885cqw] font-[500] text-[#1C2D7F] ring-1 ring-[#1E203F14]">
          Resumo da sua proposta
        </span>
        <span className="flex h-[2.08cqw] items-center rounded-full bg-[#1C2D7F] px-[1.04cqw] text-[0.885cqw] font-[500] text-white">
          Outubro 2026
        </span>
      </div>

      <h1 className="mt-[1.5cqw] text-[8.125cqw] font-[700] leading-[7.81cqw] tracking-[-0.045em] text-[#1C2D7F]">
        Obrigado.
      </h1>

      <p className="mt-[2.08cqw] max-w-[33.3cqw] text-[1.5625cqw] leading-[2.08cqw] text-[#5A5F7D]">
        {presentationTextContent.closingSubtitle}
      </p>
    </div>

    <div className="absolute bottom-[6.7%] left-[5%] flex items-center gap-[0.94cqw]">
      {presentationTextContent.clientName ? (
        <span className="flex h-[2.6cqw] w-[2.6cqw] items-center justify-center rounded-full bg-[#EDB424] text-[0.94cqw] font-[700] text-[#1C2D7F]">
          {getClientInitials(presentationTextContent.clientName)}
        </span>
      ) : null}
      <div className="flex flex-col gap-[0.05cqw]">
        <p className="text-[0.83cqw] font-[500] uppercase tracking-[0.08em] text-[#5A5F7D]">Até breve,</p>
        <p className="text-[1.875cqw] font-[700] leading-[2.29cqw] tracking-[-0.02em] text-[#1C2D7F]">
          {presentationTextContent.clientName || 'Equipe Rooftop'}
        </p>
      </div>
    </div>
  </V2Canvas>
);
