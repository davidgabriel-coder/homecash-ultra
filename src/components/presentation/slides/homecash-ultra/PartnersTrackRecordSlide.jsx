import ademiconLogo from '../../../../assets/ultra assets/ademicon-seeklogo 1.png';
import rooftopLogo from '../../../../assets/ultra assets/Cópia de rooftop-logo+tagline2_principal.png';
import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const PARTNERS = [
  { name: 'Rooftop', body: 'A Rooftop estrutura a operação de ponta a ponta: avalia o imóvel, libera a liquidez do HomeCash Ultra, conduz o lance junto à Ademicon, organiza o financiamento com a OXY e acompanha cada etapa até a quitação.', foot: 'Estruturação e acompanhamento' },
  { name: 'Ademicon', body: <>Os cenários de carta vêm da base da <strong>Ademicon</strong>: mais de 52 mil assembleias reais e 2.055 contemplações efetivas, filtradas por prazo. É histórico de mercado, não projeção.</>, foot: 'Ademicon, administradora do consórcio' },
  { name: 'OXY', body: <>No Modelo 2, a recompra é financiada pela <strong>OXY</strong>, dentro da Rede de Proteção, com limite de até 80% do valor de compra e venda e 70% da avaliação do imóvel.</>, foot: 'OXY, quando entra financiamento' }
];

export const PartnersTrackRecordSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="03" label="Por trás do Ultra" className="absolute left-[5.2%] top-[6%]" />
    <div className="absolute left-[5.2%] top-[11%] text-[1.05cqw] text-[#68729c]">Ademicon · OXY · Track record</div>
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[16%] text-[3.3cqw]">Estrutura séria, parceiros <HomeCashUltraAccent>reais.</HomeCashUltraAccent></HomeCashUltraTitle>
    <div className="absolute left-[5.2%] right-[5.2%] top-[32%] grid h-[40%] grid-cols-3 gap-[1.3cqw]">
      {PARTNERS.map((partner, i) => <HomeCashUltraCard key={partner.name} className="flex flex-col p-[1.5cqw]">
        {i === 0 ? (
          <img src={rooftopLogo} alt="Rooftop" className="mb-[0.9cqw] h-[3cqw] w-[12cqw] object-contain object-left" />
        ) : partner.name === 'Ademicon' ? (
          <img src={ademiconLogo} alt="Ademicon" className="mb-[0.9cqw] h-[3cqw] w-[6cqw] object-contain object-left" />
        ) : (
          <div className="mb-[0.9cqw] text-[2cqw] font-[700] tracking-[-0.04em] text-[#27736a]">{partner.name}</div>
        )}
        <p className="text-[0.95cqw] leading-[1.48]">{partner.body}</p><strong className="mt-auto pt-[0.65cqw] text-[0.9cqw]">{partner.foot}</strong>
      </HomeCashUltraCard>)}
    </div>
    <blockquote className="absolute bottom-[8%] left-[13%] right-[13%] text-center text-[1.15cqw] italic leading-[1.5]">
      “Até hoje, nenhum cliente encerrou uma operação de HomeCash sem recomprar o imóvel ou vendê-lo a um terceiro, ficando com a diferença em relação ao valor de recompra pré-fixado. Toda operação aberta teve um desses dois desfechos.”
      <cite className="mt-[0.45cqw] block not-italic font-[700]">A Rooftop</cite>
    </blockquote>
  </HomeCashUltraCanvas>
);
