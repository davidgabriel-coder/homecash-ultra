import { DEFAULT_PLANO_V2_TEXT_CONTENT } from './planoPersonalizadoV2TextLibrary';
import { renderBracketHighlight } from './v2TextHighlight';
import { V2Canvas, V2Card, V2Eyebrow, V2Header } from './v2Shared';

const STEPS = [
  {
    number: '01',
    title: 'Aprovação do plano e diagnóstico inicial',
    body: 'Serasa, CENPROT e TJ Estadual',
    current: true
  },
  { number: '02', title: 'Comitê com o fundo investidor', body: 'E análise jurídica detalhada' },
  { number: '03', title: 'Assinatura do contrato', body: 'E pagamentos' }
];

// O último bloco ("Resultado") recebe o texto da planilha (#21 · AC); os demais são fixos.
const buildReleaseSteps = (resultText) => [
  { label: 'Até 3 dias', value: 'Pagamento das dívidas + 10% do saldo líquido' },
  { label: 'Até 10 dias', value: '+ 10% do saldo líquido' },
  { label: 'Até 45 dias, conforme prazos cartoriais', value: '+ 80% restantes do saldo líquido' },
  { label: 'Resultado', value: resultText, success: true }
];

export const V2NextStepsSlide = ({ nav, presentationTextContent = DEFAULT_PLANO_V2_TEXT_CONTENT }) => (
  <V2Canvas>
    <V2Header nav={nav} />
    <div className="absolute left-[5%] right-[5%] top-[14.5%]">
      <V2Eyebrow>06 · Próximos passos</V2Eyebrow>
      <h1 className="mt-[0.6cqw] text-[3.125cqw] font-[400] leading-[3.33cqw] tracking-[-0.03em] text-[#1C2D7F]">
        {renderBracketHighlight(presentationTextContent.threeStepsTitle)}
      </h1>
    </div>

    <div className="absolute left-[5%] right-[5%] top-[25.9%] grid h-[29.9%] grid-cols-3 gap-[1.04cqw]">
      {STEPS.map(({ number, title, body, current }) => (
        <V2Card
          key={number}
          tone={current ? 'navy' : 'white'}
          className="flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className={`text-[0.94cqw] font-[500] ${current ? 'text-[#BCCAE9]' : 'text-[#235CE9]'}`}>{number}</span>
            {current && (
              <span className="flex h-[1.67cqw] items-center gap-[0.42cqw] rounded-full bg-[#EDB424] px-[0.73cqw] text-[#1C2D7F]">
                <span aria-hidden="true" className="size-[0.42cqw] rounded-full bg-white" />
                <span className="text-[0.78cqw] font-[500]">Estágio atual</span>
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[0.52cqw]">
            <h2 className={`text-[1.56cqw] font-[700] leading-[1.875cqw] tracking-[-0.02em] ${current ? 'text-white' : 'text-[#1C2D7F]'}`}>
              {title}
            </h2>
            <p className={`text-[0.94cqw] leading-[1.15cqw] ${current ? 'text-[#BCCAE9]' : 'text-[#5A5F7D]'}`}>{body}</p>
          </div>
        </V2Card>
      ))}
    </div>

    <V2Card className="absolute left-[5%] right-[5%] top-[57.7%] flex h-[32.8%] flex-col justify-between">
      <V2Eyebrow>Quando os recursos são liberados, após todas as assinaturas</V2Eyebrow>

      <div className="grid grid-cols-4 gap-[0.625cqw]">
        {buildReleaseSteps(presentationTextContent.resultText).map(({ label, success }) => (
          <span key={label} className={`h-[0.52cqw] rounded-full ${success ? 'bg-[#157A38]' : 'bg-[#235CE9]'}`} />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-[0.625cqw]">
        {buildReleaseSteps(presentationTextContent.resultText).map(({ label, value, success }) => (
          <div key={label} className="flex flex-col gap-[0.42cqw]">
            <p className={`text-[0.885cqw] leading-[1.15cqw] ${success ? 'font-[500] text-[#157A38]' : 'text-[#5A5F7D]'}`}>
              {label}
            </p>
            <p className={`text-[1.25cqw] font-[700] leading-[1.67cqw] ${success ? 'text-[#157A38]' : 'text-[#1C2D7F]'}`}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </V2Card>

    <p className="absolute left-[5%] right-[5%] top-[93.5%] text-[0.78cqw] leading-[1.15cqw] text-[#5A5F7D]">
      Material ilustrativo. Prazos estimados, contados após todas as assinaturas e sujeitos a documentação, cartórios e
      aprovação. Valores e condições conforme o contrato assinado; esta apresentação não constitui oferta nem garantia
      de resultado.
    </p>
  </V2Canvas>
);
