import { HomeCashUltraCanvas, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';
import finalSlideRightImage from '../../../../assets/ultra assets/imagem direita slide final.png';

const STEPS = [
  ['1', 'An\u00e1lise jur\u00eddica', 'Come\u00e7amos pela an\u00e1lise jur\u00eddica. Para iniciar, s\u00f3 precisamos de dois documentos: CNH e certid\u00e3o de estado civil.'],
  ['2', 'Valida\u00e7\u00e3o do cen\u00e1rio', 'Com a an\u00e1lise validada, confirmamos com a Ademicon o cen\u00e1rio do cons\u00f3rcio e, com a OXY, as condi\u00e7\u00f5es do financiamento.'],
  ['3', 'Opera\u00e7\u00e3o em movimento', 'Estrutura assinada, o lance entra na assembleia e a opera\u00e7\u00e3o come\u00e7a.']
];

export const NextStepsSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="14" label="Pr\u00f3ximos passos" className="absolute left-[5.2%] top-[10.8%] text-[1.2cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.4%] w-[48%] text-[3.75cqw]">
      Sua simula&#231;&#227;o j&#225; est&#225;<br />pronta. <span className="text-[#EDB424]">O pr&#243;ximo passo<br />&#233; simples.</span>
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
      <span aria-hidden="true" className="mr-[0.7cqw] text-[1.25cqw]">&#10003;</span>
      Sem compromisso: a an&#225;lise jur&#237;dica &#233; o momento de tirar as &#250;ltimas d&#250;vidas antes de decidir.
    </div>
    <img
      src={finalSlideRightImage}
      alt="Fachada de edif&#237;cio e etapas: conversa com especialista, carta confirmada na Ademicon e cr&#233;dito em cerca de 60 dias"
      className="absolute bottom-[6%] right-[4%] top-[6%] h-[88%] w-[38.5%] object-fill"
    />
  </HomeCashUltraCanvas>
);
