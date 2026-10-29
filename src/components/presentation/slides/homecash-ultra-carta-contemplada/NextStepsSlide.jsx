import { ChartNoAxesColumnIncreasing, FileText, Target } from 'lucide-react';
import { HomeCashUltraCanvas, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';
import finalSlideRightImage from '../../../../assets/ultra assets/imagem direita slide final.png';

const STEPS = [
  ['1', 'Análise jurídica', <>Começamos pela análise jurídica. Para iniciar, só precisamos de dois documentos: <strong className="font-[700]">CNH</strong> e <strong className="font-[700]">certidão de estado civil</strong>.</>],
  ['2', 'Carta na Ademicon', 'Com a análise validada, conversamos com a Ademicon e reservamos a carta contemplada do tamanho certo para você.'],
  ['3', 'Dinheiro na conta', 'Estrutura assinada, o dinheiro chega em cerca de 60 dias.']
];

const MILESTONES = [
  [FileText, 'Análise jurídica'],
  [Target, 'Carta confirmada na Ademicon'],
  [ChartNoAxesColumnIncreasing, 'Dinheiro na conta em cerca de 60 dias']
];

export const NextStepsSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="13" label="Próximos passos" className="absolute left-[5.2%] top-[10.8%] text-[1.2cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.4%] w-[48%] text-[3.75cqw]">
      Sua simulação já está<br />pronta. <span className="text-[#EDB424]">O próximo passo<br />é simples.</span>
    </HomeCashUltraTitle>
    <div className="absolute left-[5.2%] top-[41.5%] h-[0.28cqw] w-[7.5%] bg-[#EDB424]" />
    <div className="absolute left-[5.2%] top-[45.2%] w-[45%] space-y-[1.6cqw]">
      {STEPS.map(([number, title, body]) => (
        <div key={number} className="flex gap-[1.2cqw]">
          <span className="flex h-[3.3cqw] w-[3.3cqw] shrink-0 items-center justify-center rounded-[0.55cqw] bg-[#1C2D7F] text-[1.4cqw] font-[700] text-white">{number}</span>
          <div>
            <h2 className="text-[1.45cqw] font-[700] leading-[1.2]">{title}</h2>
            <p className="mt-[0.25cqw] text-[1.1cqw] leading-[1.4]">{body}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="absolute bottom-[16%] left-[5.2%] w-[45%] text-[1.02cqw] leading-[1.4]">
      <span aria-hidden="true" className="mr-[0.7cqw] text-[1.25cqw]">✓</span>
      Sem compromisso: a análise jurídica é o momento de tirar as últimas dúvidas antes de decidir.
    </div>

    <div className="absolute bottom-[9%] right-[4%] top-[6%] w-[38.5%] overflow-hidden rounded-[1.4cqw] bg-[#1C2D7F]">
      <img
        src={finalSlideRightImage}
        alt="Fachada de edifício ao lado das três etapas até o crédito"
        className="absolute inset-0 h-full w-full object-fill"
      />
      <div className="absolute inset-y-0 right-0 flex w-[48%] flex-col bg-[#1C2D7F] px-[2cqw] py-[3.2cqw] text-white">
        {MILESTONES.map(([Icon, label], index) => (
          <div key={label} className={`flex flex-1 flex-col justify-center ${index < MILESTONES.length - 1 ? 'border-b border-white/20' : ''}`}>
            <Icon className="mb-[1.1cqw] h-[1.9cqw] w-[1.9cqw] text-[#EDB424]" strokeWidth={2} aria-hidden="true" />
            <p className="text-[1.08cqw] font-[700] leading-[1.3]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </HomeCashUltraCanvas>
);
