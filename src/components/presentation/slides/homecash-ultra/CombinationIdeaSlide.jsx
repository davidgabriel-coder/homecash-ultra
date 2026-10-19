import heroImage from '../../../../assets/ultra assets/imagem slide 4.png';
import { DollarSign, House, Mail } from 'lucide-react';
import { Fragment } from 'react';
import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const PARTS = [
  { eyebrow: 'Sozinho', title: 'HomeCash Ultra', body: 'Transforma o imóvel parado em liquidez, mas libera só cerca de metade do valor dele.', metric: '~50%', caption: 'do valor do imóvel em liquidez' },
  { eyebrow: 'Sozinho', title: 'Consórcio', body: 'Multiplica o poder de compra, mas a contemplação depende de sorteio ou de um lance que pouca gente tem parado no caixa.', metric: 'Lance', caption: 'é o que antecipa a carta' }
];

export const CombinationIdeaSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="02" label="Como chegamos aqui" className="absolute left-[5.2%] top-[9.5%] -translate-y-[15px] text-[1.2cqw]" />
    <div className="absolute left-[5.2%] top-[16.6%] -translate-y-[15px] h-[0.22cqw] w-[6.7cqw] bg-[#EDB424]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[19%] -translate-y-[15px] w-[39%] text-[5.2cqw] leading-[1.05] tracking-[-0.04em]">
      A ideia não é<br />nova, a<br /><HomeCashUltraAccent>combinação é.</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[50.5%] -translate-y-[15px] w-[36%] text-[1.25cqw] leading-[1.45]">Duas ferramentas que já existem separadamente. Sozinha, cada uma resolve metade do problema. Juntas, uma destrava a outra.</p>
    <img
      src={heroImage}
      alt="Casa contemporânea envidraçada iluminada à noite, com vista para a cidade"
      className="absolute right-0 top-[6.5%] h-[51%] w-[60.5%] object-contain object-right-top"
    />
    <div className="absolute bottom-[60px] left-[4.8%] right-[2.7%] grid h-[30%] grid-cols-[1fr_3cqw_1fr_3cqw_1.15fr] items-stretch">
      {PARTS.map((part, index) => {
        const Icon = index === 0 ? House : Mail;

        return (
          <Fragment key={part.title}>
          <HomeCashUltraCard className="flex flex-col p-[1.7cqw]">
            <Icon className="mb-[0.45cqw] h-[2cqw] w-[2cqw]" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-[0.7cqw] font-[700] uppercase tracking-[0.08em]">{part.eyebrow}</span>
            <h2 className="mt-[0.2cqw] text-[1.45cqw] font-[700] leading-[1.15]">{part.title}</h2>
            <p className="mt-[0.4cqw] text-[0.92cqw] leading-[1.4]">{part.body}</p>
            <div className="mt-auto border-t border-[#1C2D7F]/20 pt-[0.45cqw]">
              <div className="text-[2.1cqw] font-[700] leading-none">{part.metric}</div>
              <div className="mt-[0.2cqw] text-[0.8cqw]">{part.caption}</div>
            </div>
          </HomeCashUltraCard>
          <div className="flex items-center justify-center text-[3cqw] font-[400] text-[#EDB424]">{index === 0 ? '+' : '='}</div>
          </Fragment>
        );
      })}
      <div className="flex flex-col rounded-[1.1cqw] bg-[#1C2D7F] p-[1.7cqw] text-white">
        <DollarSign className="mb-[0.45cqw] h-[2cqw] w-[2cqw]" strokeWidth={1.5} aria-hidden="true" />
        <span className="text-[0.7cqw] font-[700] uppercase tracking-[0.08em] text-[#EDB424]">Juntos</span>
        <h2 className="mt-[0.2cqw] text-[1.45cqw] font-[700] leading-[1.15]">HomeCash Ultra</h2>
        <p className="mt-[0.4cqw] text-[0.92cqw] leading-[1.4]">A liquidez vira lance integral na assembleia. O lance antecipa a contemplação. E a carta é sua, no modelo de recompra que fizer mais sentido.</p>
        <div className="mt-auto border-t border-white/20 pt-[0.45cqw]">
          <strong className="text-[2.1cqw] text-[#EDB424]">76,9%</strong>
          <p className="text-[0.8cqw]">do valor do imóvel em capital, via carta</p>
        </div>
      </div>
    </div>
  </HomeCashUltraCanvas>
);
