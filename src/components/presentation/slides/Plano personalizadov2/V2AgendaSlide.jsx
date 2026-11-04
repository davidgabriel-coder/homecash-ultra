import { ArrowUpRight } from 'lucide-react';
import { DEFAULT_PLANO_V2_TEXT_CONTENT } from './planoPersonalizadoV2TextLibrary';
import { V2Canvas, V2Card, V2Eyebrow, V2Header } from './v2Shared';

const AGENDA_ITEMS = [
  { title: 'Diagnóstico', body: null },
  { title: 'Quem somos', body: 'A Rooftop e a origem do HomeCash®.' },
  { title: 'Mecanismo HomeCash®', body: 'Como a operação funciona, etapa por etapa.' },
  { title: 'Plano personalizado', body: 'Os números da sua proposta.', highlighted: true },
  { title: 'Suas saídas', body: 'Venda ou recompra: você escolhe.' },
  { title: 'Próximos passos', body: 'Três etapas até a liberação dos recursos.' }
];

export const V2AgendaSlide = ({ nav, presentationTextContent = DEFAULT_PLANO_V2_TEXT_CONTENT }) => (
  <V2Canvas>
    <V2Header nav={nav} />
    <div className="absolute left-[5%] top-[38%] w-[30cqw]">
      <V2Eyebrow>O que vamos ver hoje</V2Eyebrow>
      <h1 className="mt-[1.2cqw] text-[6.25cqw] font-[700] leading-none tracking-[-0.04em] text-[#1C2D7F]">Agenda</h1>
      <p className="mt-[1.3cqw] text-[1.25cqw] leading-[1.4] text-[#5A5F7D]">
        Seis passos, do seu cenário atual até a assinatura do contrato.
      </p>
    </div>

    <div className="absolute left-[35.4%] right-[5%] top-[14%] bottom-[5%] grid grid-cols-3 grid-rows-2 gap-[1.04cqw]">
      {AGENDA_ITEMS.map(({ title, body, highlighted }, index) => (
        <V2Card
          key={title}
          tone={highlighted ? 'primary' : 'white'}
          className="flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className={`text-[0.95cqw] font-[500] ${highlighted ? 'text-white' : 'text-[#235CE9]'}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              aria-hidden="true"
              className={`flex h-[2.3cqw] w-[2.3cqw] items-center justify-center rounded-full ${
                highlighted ? 'bg-white text-[#235CE9]' : 'text-[#1C2D7F] ring-1 ring-[#1E203F1F]'
              }`}
            >
              <ArrowUpRight className="h-[1.04cqw] w-[1.04cqw]" strokeWidth={2} />
            </span>
          </div>
          <div className="flex flex-col gap-[0.5cqw]">
            <h2 className={`text-[1.77cqw] font-[700] leading-[1.1] tracking-[-0.02em] ${highlighted ? 'text-white' : 'text-[#1C2D7F]'}`}>
              {title}
            </h2>
            <p className={`text-[1cqw] leading-[1.4] ${highlighted ? 'text-[#DCE3F7]' : 'text-[#5A5F7D]'}`}>
              {index === 0 ? presentationTextContent.agendaDiagnosticBody : body}
            </p>
          </div>
        </V2Card>
      ))}
    </div>
  </V2Canvas>
);
