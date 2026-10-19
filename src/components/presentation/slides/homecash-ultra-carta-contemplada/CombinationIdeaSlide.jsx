import heroImage from '../../../../assets/ultra assets/imagem slide 4.png';
import { ArrowRight, House, Zap } from 'lucide-react';
import { Fragment } from 'react';
import { HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle, HomeCashUltraAccent } from './homeCashUltraShared';

const PARTS = [
  { eyebrow: 'Sozinho', title: 'HomeCash Ultra', body: 'Transforma o imóvel parado em liquidez, mas libera só cerca de metade do valor dele.', metric: '~50%', caption: 'do valor do imóvel em liquidez' },
  { eyebrow: 'Sozinha', title: 'Carta contemplada', body: 'Capital alto e imediato, mas exige uma entrada que pouca gente tem parada no caixa.', metric: '~30%', caption: 'da carta como entrada (ágio)' }
];

export const CombinationIdeaSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="02" label="Como chegamos aqui" className="absolute left-[5.2%] top-[11%] text-[1.05cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.5%] z-10 w-[42%] text-[4.65cqw] leading-[1.03] tracking-[-0.045em]">
      A ideia não é<br />nova, a<br /><HomeCashUltraAccent>combinação é.</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[44.5%] w-[40%] text-[1.22cqw] leading-[1.45]">Dois produtos que já existem separadamente. Sozinho, cada um resolve metade do problema. Juntos, um destrava o outro.</p>
    <img
      src={heroImage}
      alt="Casa contemporânea envidraçada iluminada à noite, com vista para a cidade"
      className="absolute right-[4.8%] top-[5.5%] h-[43%] w-[46%] rounded-[1.4cqw] object-cover object-center"
      style={{ clipPath: 'polygon(17% 0, 100% 0, 100% 100%, 0 100%)' }}
    />
    <div className="absolute bottom-[7.5%] left-[5.2%] right-[5.2%] grid h-[36.5%] grid-cols-[minmax(0,1fr)_2.8cqw_minmax(0,1fr)_2.8cqw_minmax(0,1.2fr)] items-stretch">
      {PARTS.map((part, index) => {
        const Icon = index === 0 ? House : Zap;
        return (
          <Fragment key={part.title}>
            <HomeCashUltraCard className="flex flex-col rounded-[1.15cqw] p-[1.75cqw]">
              <div className="mb-[0.7cqw] flex h-[3cqw] w-[3cqw] items-center justify-center rounded-[0.55cqw] bg-[#1C2D7F] text-white">
                <Icon className="h-[1.45cqw] w-[1.45cqw]" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <span className="text-[0.7cqw] font-[700] uppercase tracking-[0.08em]">{part.eyebrow}</span>
              <h2 className="mt-[0.25cqw] text-[1.45cqw] font-[700] leading-[1.15]">{part.title}</h2>
              <p className="mt-[0.45cqw] text-[0.98cqw] leading-[1.4]">{part.body}</p>
              <div className="mt-auto border-t border-[#1C2D7F]/20 pt-[0.65cqw]">
                <div className="text-[2.1cqw] font-[700] leading-none">{part.metric}</div>
                <div className="mt-[0.25cqw] text-[0.8cqw]">{part.caption}</div>
              </div>
            </HomeCashUltraCard>
            <div className="flex items-center justify-center text-[2.5cqw] font-[500] text-[#EDB424]">{index === 0 ? '+' : '='}</div>
          </Fragment>
        );
      })}
      <div className="flex flex-col rounded-[1.15cqw] bg-[#1C2D7F] p-[1.75cqw] text-white">
        <span className="text-[0.7cqw] font-[700] uppercase tracking-[0.08em] text-[#EDB424]">Juntos</span>
        <h2 className="mt-[0.35cqw] text-[1.45cqw] font-[700] leading-[1.15]">HomeCash Ultra</h2>
        <p className="mt-[0.55cqw] text-[0.98cqw] leading-[1.4]">A liquidez paga a entrada da carta. A carta paga a recompra do imóvel. E o que sobra é seu, em cerca de 60 dias.</p>
        <div className="mt-auto border-t border-white/20 pt-[0.65cqw]">
          <strong className="text-[2.1cqw] leading-none text-[#EDB424]">84,6%</strong>
          <p className="mt-[0.25cqw] text-[0.8cqw]">do valor do imóvel em dinheiro livre</p>
        </div>
      </div>
    </div>
  </HomeCashUltraCanvas>
);
