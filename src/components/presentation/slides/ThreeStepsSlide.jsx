import { renderThreeStepsTitle } from '../presentationTextLibrary';
import { Gavel as PhosphorGavel } from '@phosphor-icons/react/dist/csr/Gavel';
import { Scroll } from '@phosphor-icons/react/dist/csr/Scroll';
import { Signature } from '@phosphor-icons/react/dist/csr/Signature';

export const ThreeStepsSlide = ({ presentationTextContent }) => {
  const steps = [
    {
      id: 'approval',
      icon: <Scroll className="h-[5.35cqw] w-[5.35cqw]" weight="regular" />,
      iconClassName: 'bg-[#253793] text-white',
      label: (
        <>
          <span className="font-[700]">Aprovação do plano</span> e
          <br />
          Diagnóstico Inicial (Serasa,
          <br />
          CENPROT, TJ Estadual)
        </>
      ),
      labelClassName: 'text-[#253793]',
      left: '16.9%',
      textWidth: '20.6cqw'
    },
    {
      id: 'committee',
      icon: <PhosphorGavel className="h-[5.7cqw] w-[5.7cqw]" weight="regular" />,
      iconClassName: 'bg-[#8994c1] text-[#d4dbf2]',
      label: (
        <>
          Comitê com o
          <br />
          Fundo Investidor e
          <br />
          Análise Jurídica Detalhada
        </>
      ),
      labelClassName: 'text-[#8792c1]',
      left: '50%',
      textWidth: '22.5cqw'
    },
    {
      id: 'signature',
      icon: <Signature className="h-[5.95cqw] w-[5.95cqw]" weight="regular" />,
      iconClassName: 'bg-[#82a2e9] text-[#d4dbf2]',
      label: (
        <>
          Assinatura
          <br />
          do contrato e
          <br />
          Pagamentos
        </>
      ),
      labelClassName: 'text-[#8792c1]',
      left: '83.08%',
      textWidth: '15.2cqw'
    }
  ];

  return (
    <div className="relative h-full overflow-hidden bg-[#f0f0f0] font-excon text-[#253793] [container-type:size]">
      <div className="absolute inset-0 bg-[linear-gradient(200.49deg,rgba(0,2,63,0.024)_46.29%,rgba(11,38,194,0.15)_80.3%),linear-gradient(90deg,#f0f0f0_0%,#f0f0f0_100%)]" />

      <h1 className="absolute left-1/2 top-[14.65%] z-10 w-[76%] -translate-x-1/2 text-center text-[3.28cqw] font-[400] leading-[1.08] tracking-[-0.025em] text-[#253793]">
        {renderThreeStepsTitle(presentationTextContent.threeStepsTitle)}
      </h1>

      <div className="absolute left-[24.55%] top-[48.05%] h-[0.16cqw] w-[18.15cqw] bg-[#253793]">
        <span className="absolute right-[-0.22cqw] top-1/2 h-[1.32cqw] w-[1.32cqw] -translate-y-1/2 rotate-45 border-r-[0.16cqw] border-t-[0.16cqw] border-[#253793]" />
      </div>

      <div className="absolute left-[58%] top-[48.05%] h-[0.16cqw] w-[18.15cqw] bg-[#253793]">
        <span className="absolute right-[-0.22cqw] top-1/2 h-[1.32cqw] w-[1.32cqw] -translate-y-1/2 rotate-45 border-r-[0.16cqw] border-t-[0.16cqw] border-[#253793]" />
      </div>

      {steps.map((step) => (
        <section
          key={step.id}
          className="absolute top-[39.72%] z-10 flex w-[22cqw] -translate-x-1/2 flex-col items-center text-center"
          style={{ left: step.left }}
        >
          <div
            className={`flex h-[9.76cqw] w-[9.76cqw] items-center justify-center rounded-[1.95cqw] shadow-[0_10px_28px_rgba(31,45,118,0.08)] ${step.iconClassName}`}
          >
            {step.icon}
          </div>

          <p
            className={`mt-[4.06cqw] text-[1.66cqw] font-[400] leading-[1.33] tracking-[0] ${step.labelClassName}`}
            style={{ width: step.textWidth }}
          >
            {step.label}
          </p>

          {step.id === 'approval' ? (
            <div className="mt-[2.56cqw] rounded-full bg-[#2563eb] px-[1.56cqw] py-[0.76cqw] text-[1.18cqw] font-[700] leading-none text-white">
              Estágio Atual
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
};
