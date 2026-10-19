import ademiconLogo from '../../../../assets/ultra assets/ademicon-seeklogo 1.png';
import rooftopLogo from '../../../../assets/ultra assets/Cópia de rooftop-logo+tagline2_principal.png';
import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const PARTNERS = [
  {
    name: 'Rooftop',
    body: 'Na Carta Contemplada, a Rooftop estrutura a operação de ponta a ponta: avalia o imóvel, libera a liquidez do HomeCash Ultra, conduz a aquisição da carta junto à Ademicon e acompanha cada etapa até a quitação.',
    foot: 'Estruturação e acompanhamento'
  },
  {
    name: 'Ademicon',
    body: 'As cartas contempladas vêm da Ademicon, uma das maiores administradoras de consórcio do país, com base histórica de mais de 52 mil assembleias e 2.055 contemplações efetivas.',
    foot: 'Ademicon, origem das cartas'
  }
];

export const PartnersTrackRecordSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="03" label="Por trás do Ultra" className="absolute left-[5.2%] top-[10.5%] text-[1.05cqw]" />
    <div className="absolute left-[5.2%] top-[14.7%] h-[0.28cqw] w-[5.8cqw] bg-[#EDB424]" />
    <div className="absolute left-[5.2%] top-[17.3%] text-[1.15cqw] text-[#1C2D7F]">Ademicon · Track record</div>
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[21.2%] w-[80%] text-[4.25cqw] leading-[1.12] tracking-[-0.04em]">
      Estrutura séria, parceiros <HomeCashUltraAccent>reais.</HomeCashUltraAccent>
    </HomeCashUltraTitle>

    <div className="absolute left-[5.2%] right-[5.2%] top-[34.2%] grid h-[39.5%] grid-cols-[1.6fr_1fr] gap-[1.6cqw]">
      {PARTNERS.map((partner) => (
        <HomeCashUltraCard key={partner.name} className="flex flex-col rounded-[0.9cqw] px-[2.35cqw] py-[3.5cqw]">
          <img
            src={partner.name === 'Rooftop' ? rooftopLogo : ademiconLogo}
            alt={partner.name}
            className={`mb-[1.2cqw] object-contain object-left ${partner.name === 'Rooftop' ? 'h-[2.5cqw] w-[12cqw]' : 'h-[2.6cqw] w-[4.4cqw]'}`}
          />
          <p className="text-[1.32cqw] leading-[1.55]">{partner.body}</p>
          <strong className="mt-[0.75cqw] text-[1.12cqw]">{partner.foot}</strong>
        </HomeCashUltraCard>
      ))}
    </div>

    <blockquote className="absolute bottom-[7.2%] left-[15%] right-[15%] text-center text-[1.22cqw] leading-[1.55]">
      “Até hoje, nenhum cliente encerrou uma operação de HomeCash sem recomprar o imóvel ou vendê-lo a um terceiro, ficando com a diferença em relação ao valor de recompra pré-fixado. Toda operação aberta teve um desses dois desfechos.”
      <cite className="mt-[0.45cqw] block not-italic font-[700]">A Rooftop</cite>
    </blockquote>
  </HomeCashUltraCanvas>
);
