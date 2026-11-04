import { CircleCheck, Play, Users } from 'lucide-react';
import { V2Canvas, V2Card, V2Eyebrow, V2Header } from './v2Shared';

const IndexCard = ({ tone = 'white', title, value, label, Icon }) => {
  const isNavy = tone === 'navy';

  return (
    <V2Card tone={tone} className="flex flex-1 flex-col justify-between">
      <div className="flex items-center justify-between">
        <p className="text-[1.04cqw] font-[500] leading-[1.25cqw]">{title}</p>
        <span
          className={`flex h-[2.5cqw] w-[2.5cqw] items-center justify-center rounded-xl ${
            isNavy ? 'bg-white/45 text-white' : 'bg-[#157A381A] text-[#157A38]'
          }`}
        >
          <Icon className="h-[1.15cqw] w-[1.15cqw]" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-[7.81cqw] font-[700] leading-[0.93] tracking-[-0.06em]">{value}</p>
        <p className={`pb-[0.2cqw] text-right text-[0.94cqw] leading-[1.35cqw] ${isNavy ? '' : 'text-[#5A5F7D]'}`}>
          {label}
        </p>
      </div>
    </V2Card>
  );
};

export const V2ClientsSlide = ({ nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />
    <div className="absolute left-[5%] right-[5%] top-[14.5%]">
      <V2Eyebrow>O que dizem nossos clientes</V2Eyebrow>
      <h1 className="mt-[0.6cqw] text-[3.125cqw] font-[400] leading-[3.33cqw] tracking-[-0.03em] text-[#1C2D7F]">
        Quem passou, <span className="font-[700] text-[#235CE9]">aprova e recomenda</span>
      </h1>
    </div>

    <div className="absolute left-[5%] right-[5%] top-[25.9%] flex h-[64.6%] gap-[1.04cqw]">
      <div className="flex w-[29.17cqw] shrink-0 flex-col gap-[1.04cqw]">
        <IndexCard title="Índice de aprovação" value="98%" label={<>dos clientes<br />aprovam</>} Icon={CircleCheck} />
        <IndexCard
          tone="navy"
          title="Índice de recomendação"
          value="96%"
          label={<>recomendam<br />o HomeCash®</>}
          Icon={Users}
        />
      </div>

      <V2Card tone="navy" className="flex flex-1 flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="flex h-[1.67cqw] items-center rounded-full bg-white/[0.12] px-[0.73cqw] text-[0.78cqw] font-[500]">
            Depoimento em vídeo
          </span>
          <p className="text-[0.83cqw] text-[#BCCAE9]">Cliente HomeCash®</p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-[1.04cqw]">
          <span className="flex rounded-full bg-white/[0.12] p-[0.83cqw]">
            <span className="flex size-[6.25cqw] items-center justify-center rounded-full bg-white">
              <Play className="h-[2.08cqw] w-[2.08cqw]" fill="#1C2D7F" stroke="#1C2D7F" strokeWidth={2} aria-hidden="true" />
            </span>
          </span>
          <p className="text-[1.25cqw] font-[500] leading-[1.4cqw]">Assistir ao depoimento</p>
        </div>

        <p className="max-w-[39.6cqw] text-[1.56cqw] font-[700] leading-[2.08cqw] tracking-[-0.01em]">
          Uma história real de quem encerrou a pressão e seguiu em frente.
        </p>
      </V2Card>
    </div>

    <p className="absolute left-[5%] right-[5%] top-[93.5%] text-[0.78cqw] leading-[1.15cqw] text-[#5A5F7D]">
      Índices apurados pela Rooftop com base na avaliação de clientes HomeCash. Depoimento de cliente real, com
      autorização.
    </p>
  </V2Canvas>
);
