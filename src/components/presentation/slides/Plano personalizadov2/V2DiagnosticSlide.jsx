import { V2Canvas, V2Eyebrow, V2Header } from './v2Shared';

const DIAGNOSTIC_TAGS = ['Financeiro', 'Jurídico', 'Patrimonial'];

export const V2DiagnosticSlide = ({ nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />

    <div className="absolute left-[5%] right-[5%] top-[14.8%] bottom-[9%] flex items-center justify-between gap-[5cqw]">
      <div className="flex w-[29.4cqw] shrink-0 flex-col gap-[1.46cqw]">
        <V2Eyebrow className="text-[0.83cqw]">01 · Diagnóstico</V2Eyebrow>
        <div className="flex gap-[0.63cqw]">
          {DIAGNOSTIC_TAGS.map((tag) => (
            <span
              key={tag}
              className="flex h-[2.29cqw] items-center rounded-full bg-[#235CE9] px-[1.15cqw] text-[0.94cqw] font-[500] leading-none text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-[4.58cqw] font-[400] leading-[4.79cqw] tracking-[-0.03em] text-[#1C2D7F]">
          Diagnóstico <span className="font-[700]">HomeCash®</span>
        </h1>
      </div>

      <p className="w-[50.2cqw] shrink-0 text-[1.46cqw] leading-[2.14cqw] tracking-[-0.005em] text-[#1C2D7F]">
        Os gráficos do Diagnóstico <strong className="font-[700]">HomeCash</strong> são simulações estratégicas, não previsões
        exatas. Suas curvas e índices ilustram como o tempo, a inércia e a deterioração progressiva podem afetar o
        patrimônio, a liquidez, as alternativas disponíveis e a capacidade de reação, com base em padrões observados em
        cenários de pressão financeira, patrimonial, jurídica ou operacional.
      </p>
    </div>
  </V2Canvas>
);
