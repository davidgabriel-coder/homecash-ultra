import { ArrowRight, CircleCheck, FileText, Search, ShieldCheck } from 'lucide-react';
import { DEFAULT_PLANO_V2_TEXT_CONTENT, getClientFirstName } from './planoPersonalizadoV2TextLibrary';
import { V2Canvas, V2Card, V2Eyebrow, V2Header } from './v2Shared';

export const V2MechanismSlide = ({ presentationTextContent = DEFAULT_PLANO_V2_TEXT_CONTENT, nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />
    <div className="absolute left-[5%] right-[5%] top-[14.5%]">
      <V2Eyebrow>03 · Como funciona</V2Eyebrow>
      <h1 className="mt-[0.7cqw] text-[3.4cqw] font-[400] leading-[1.05] tracking-[-0.03em] text-[#1C2D7F]">
        O mecanismo <span className="font-[700] text-[#235CE9]">HomeCash®</span>
      </h1>
      <p className="mt-[1.2cqw] w-[80cqw] text-[1.55cqw] leading-[1.35] text-[#1C2D7F]">
        {presentationTextContent.mechanismSubtitle}
      </p>
    </div>

    <div className="absolute left-[5%] right-[5%] top-[35.4%] bottom-[5%] grid grid-cols-3 grid-rows-2 gap-[1.04cqw]">
      <V2Card className="flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-[0.95cqw] text-[#235CE9]">01</span>
          <IconBox><Search className="h-[1.2cqw] w-[1.2cqw]" strokeWidth={1.8} aria-hidden="true" /></IconBox>
        </div>
        <div>
          <h2 className="text-[1.77cqw] font-[700] leading-[1.1] tracking-[-0.02em]">Diagnóstico da situação</h2>
          <p className="mt-[0.6cqw] text-[1cqw] leading-[1.45] text-[#5A5F7D]">
            {presentationTextContent.mechanismDiagnosticBody}
          </p>
        </div>
      </V2Card>

      <V2Card tone="primary" className="flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-[0.95cqw]">02</span>
          <IconBox><FileText className="h-[1.2cqw] w-[1.2cqw]" strokeWidth={1.8} aria-hidden="true" /></IconBox>
        </div>
        <div>
          <h2 className="text-[1.77cqw] font-[700] leading-[1.1] tracking-[-0.02em]">Plano personalizado</h2>
          <p className="mt-[0.6cqw] text-[1cqw] leading-[1.45]">
            {presentationTextContent.mechanismPlanBody}
          </p>
        </div>
      </V2Card>

      <V2Card tone="navy" className="flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-[0.95cqw]">03</span>
          <IconBox><ShieldCheck className="h-[1.2cqw] w-[1.2cqw]" strokeWidth={1.8} aria-hidden="true" /></IconBox>
        </div>
        <div>
          <h2 className="text-[1.77cqw] font-[700] leading-[1.1] tracking-[-0.02em]">Aprovação</h2>
          <p className="mt-[0.6cqw] text-[1cqw] leading-[1.45] text-[#DCE3F7]">
            {presentationTextContent.mechanismApprovalBody}
          </p>
        </div>
      </V2Card>

      <V2Card className="flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-[0.95cqw] text-[#235CE9]">04</span>
          <IconBox><ArrowRight className="h-[1.2cqw] w-[1.2cqw]" strokeWidth={1.8} aria-hidden="true" /></IconBox>
        </div>
        <div>
          <h2 className="text-[1.77cqw] font-[700] leading-[1.1] tracking-[-0.02em]">Saída da operação</h2>
          <p className="mt-[0.6cqw] text-[1cqw] leading-[1.45] text-[#5A5F7D]">
            <strong className="text-[#1C2D7F]">A.</strong> Buscar uma oferta de maior valor.{' '}
            <strong className="text-[#1C2D7F]">B.</strong> Recomprar o imóvel pelo valor combinado. A diferença fica 100% com
            você.
          </p>
        </div>
      </V2Card>

      <V2Card tone="navy" className="flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-[0.95cqw]">05</span>
          <IconBox><CircleCheck className="h-[1.2cqw] w-[1.2cqw]" strokeWidth={1.8} aria-hidden="true" /></IconBox>
        </div>
        <div>
          <h2 className="text-[1.77cqw] font-[700] leading-[1.1] tracking-[-0.02em]">{presentationTextContent.mechanismOutcomeTitle}</h2>
          <p className="mt-[0.6cqw] text-[1cqw] leading-[1.45] text-[#DCE3F7]">{presentationTextContent.mechanismOutcomeBody}</p>
        </div>
      </V2Card>

      <V2Card tone="primary" className="flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-[#EDB424] px-[0.9cqw] py-[0.35cqw] text-[0.85cqw] font-[500] text-[#1C2D7F]">
            {presentationTextContent.clientName ? `No seu caso, ${getClientFirstName(presentationTextContent.clientName)}` : 'No seu caso'}
          </span>
          <IconBox><ArrowRight className="h-[1.2cqw] w-[1.2cqw] -rotate-45" strokeWidth={1.8} aria-hidden="true" /></IconBox>
        </div>
        <p className="text-[1.75cqw] font-[700] leading-[1.25] tracking-[-0.01em]">
          {presentationTextContent.noYourCaseText}
        </p>
      </V2Card>
    </div>
  </V2Canvas>
);

const IconBox = ({ children }) => (
  <span className="flex h-[2.3cqw] w-[2.3cqw] items-center justify-center rounded-[0.7cqw] bg-[#E5E7F4] text-[#1C2D7F]">
    {children}
  </span>
);
