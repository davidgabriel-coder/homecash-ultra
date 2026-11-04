import { ArrowUpRight, House, Wallet } from 'lucide-react';
import { DEFAULT_PLANO_V2_TEXT_CONTENT } from './planoPersonalizadoV2TextLibrary';
import { V2Canvas, V2Eyebrow, V2Header } from './v2Shared';

const CardLabel = ({ children, className = '' }) => (
  <span className={`text-[0.83cqw] font-[500] uppercase tracking-[0.1em] ${className}`}>{children}</span>
);

export const V2StartMiddleEndSlide = ({ nav, presentationTextContent = DEFAULT_PLANO_V2_TEXT_CONTENT }) => (
  <V2Canvas>
    <V2Header nav={nav} />
    <div className="absolute left-[5%] right-[5%] top-[14.5%]">
      <V2Eyebrow>A operação inteira</V2Eyebrow>
      <h1 className="mt-[0.7cqw] text-[3.125cqw] font-[400] leading-[1.05] tracking-[-0.03em] text-[#1C2D7F]">
        Uma operação com <span className="font-[700] text-[#235CE9]">começo, meio e fim</span>
      </h1>
    </div>

    <div className="absolute left-[5%] right-[5%] top-[25.9%] grid grid-cols-3 gap-x-[1.04cqw]">
      <div className="h-[0.625cqw] rounded-full bg-[#1C2D7F]" />
      <div className="h-[0.625cqw] rounded-full bg-[#235CE9]" />
      <div className="h-[0.625cqw] rounded-full bg-[#EDB424]" />
    </div>

    <div className="absolute left-[5%] right-[5%] top-[29.26%] bottom-[9.4%] grid grid-cols-3 gap-x-[1.04cqw]">
      <div className="flex flex-col justify-between rounded-[1.25cqw] bg-white p-[1.875cqw] ring-1 ring-[#1E203F14]">
        <div className="flex items-center justify-between">
          <CardLabel className="text-[#235CE9]">Começo · hoje</CardLabel>
          <IconBox>
            <Wallet className="h-[1.25cqw] w-[1.25cqw]" strokeWidth={2} aria-hidden="true" />
          </IconBox>
        </div>
        <div className="flex flex-col gap-[0.83cqw]">
          <div className="pb-[0.2cqw] text-[3.75cqw] font-[700] leading-none tracking-[-0.04em] text-[#1C2D7F]">
            +R$ 477.850
          </div>
          <h2 className="text-[2.08cqw] font-[700] leading-[1.15] tracking-[-0.02em] text-[#1C2D7F]">
            {presentationTextContent.startTitle}
          </h2>
          <p className="text-[1.09cqw] leading-[1.5] text-[#5A5F7D]">{presentationTextContent.startBody}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-[1.25cqw] bg-white p-[1.875cqw] ring-1 ring-[#1E203F14]">
        <div className="flex items-center justify-between">
          <CardLabel className="text-[#235CE9]">Meio · meses 1 a 12</CardLabel>
          <IconBox>
            <House className="h-[1.25cqw] w-[1.25cqw]" strokeWidth={2} aria-hidden="true" />
          </IconBox>
        </div>
        <div className="flex flex-col gap-[0.83cqw]">
          <div className="pb-[0.2cqw] text-[3.75cqw] font-[700] leading-none tracking-[-0.04em] text-[#1C2D7F]">
            R$ 3.600<span className="text-[1.25cqw] font-[500] tracking-normal text-[#5A5F7D]"> /mês</span>
          </div>
          <h2 className="text-[2.08cqw] font-[700] leading-[1.15] tracking-[-0.02em] text-[#1C2D7F]">
            {presentationTextContent.middleTitle}
          </h2>
          <p className="text-[1.09cqw] leading-[1.5] text-[#5A5F7D]">{presentationTextContent.middleBody}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-[1.25cqw] bg-[#235CE9] p-[1.875cqw] text-white">
        <div className="flex items-center justify-between">
          <CardLabel className="text-[#DCE3F7]">Fim · meses 12 a 18</CardLabel>
          <span className="flex h-[2.71cqw] w-[2.71cqw] items-center justify-center rounded-full bg-white text-[#235CE9]">
            <ArrowUpRight className="h-[1.15cqw] w-[1.15cqw]" strokeWidth={2} aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-col gap-[0.83cqw]">
          <h2 className="text-[2.08cqw] font-[700] leading-[1.15] tracking-[-0.02em]">Você escolhe a saída</h2>
          <div className="flex flex-col gap-[0.25cqw] rounded-[0.625cqw] bg-[#EDB424] px-[1.04cqw] py-[0.94cqw] text-[#1C2D7F]">
            <span className="text-[1.09cqw] font-[700] leading-[1.3]">A · Venda</span>
            <span className="text-[0.94cqw] leading-[1.3]">A diferença fica com você</span>
          </div>
          <div className="flex flex-col gap-[0.25cqw] rounded-[0.625cqw] bg-[#1C2D7F] px-[1.04cqw] py-[0.94cqw]">
            <span className="text-[1.09cqw] font-[700] leading-[1.3]">B · Recompra</span>
            <span className="text-[0.94cqw] leading-[1.3] text-[#BCCAE9]">Por valor fixo, definido em contrato</span>
          </div>
        </div>
      </div>
    </div>

    <p className="absolute left-[5%] top-[93.7%] text-[0.78cqw] leading-[1.2] text-[#5A5F7D]">
      Quitação das dívidas previstas no acerto da proposta. Prazos, aluguel, preços de recompra e regras de cada saída
      conforme o contrato assinado.
    </p>
  </V2Canvas>
);

const IconBox = ({ children }) => (
  <span className="flex h-[2.71cqw] w-[2.71cqw] items-center justify-center rounded-[0.625cqw] bg-[#E5E7F4] text-[#235CE9]">
    {children}
  </span>
);
