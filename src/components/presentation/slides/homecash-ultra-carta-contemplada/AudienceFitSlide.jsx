import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const CRITERIA = [
  ['Garantia flexível', 'A garantia da carta pode reunir mais de um imóvel, seu ou de terceiros: terreno, comercial, residencial, ou o que fizer sentido.'],
  ['Dentro dos critérios do fundo', 'Localização, tipo, estado de conservação e documentação em dia, os mesmos critérios já usados hoje na avaliação do fundo.'],
  ['Renda que sustenta a parcela', 'A parcela da carta precisa caber com folga na renda familiar. Como referência, até 40% da renda familiar.']
];

export const AudienceFitSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="04" label="Para quem é" className="absolute left-[5.2%] top-[11%] text-[1.05cqw]" />
    <div className="absolute left-[5.2%] top-[16.2%] flex gap-[0.9cqw]">
      {['Garantia flexível', 'Elegibilidade', 'Renda compatível'].map((item) => (
        <span key={item} className="rounded-full border border-[#1C2D7F]/65 px-[1.25cqw] py-[0.45cqw] text-[0.82cqw] font-[600]">{item}</span>
      ))}
    </div>
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[22.8%] w-[72%] text-[4.05cqw] leading-[1.08] tracking-[-0.04em]">
      Feito para quem precisa<br />de capital <HomeCashUltraAccent>agora.</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[39.6%] w-[58%] text-[1.12cqw] leading-[1.45]">Empresários que buscam alavancar o negócio a partir do patrimônio que já têm, sem esperar o tempo do consórcio.</p>

    <div className="absolute left-[5.2%] right-[5.2%] top-[49.5%] grid h-[25.8%] grid-cols-3 gap-[2cqw]">
      {CRITERIA.map(([title, body], index) => (
        <HomeCashUltraCard key={title} className="rounded-[0.9cqw] p-[1.6cqw]">
          <span className="flex h-[2.6cqw] w-[2.6cqw] items-center justify-center rounded-[0.5cqw] bg-[#1C2D7F] text-[1.1cqw] font-[700] text-white">{index + 1}</span>
          <div className="mt-[0.65cqw] h-[0.24cqw] w-[6.7cqw] bg-[#EDB424]" />
          <h2 className="mt-[0.7cqw] text-[1.28cqw] font-[700] leading-[1.2]">{title}</h2>
          <p className="mt-[0.5cqw] text-[0.98cqw] leading-[1.45]">{body}</p>
        </HomeCashUltraCard>
      ))}
    </div>

    <div className="absolute bottom-[9.5%] left-[5.2%] right-[5.2%] flex h-[12.5%] flex-col justify-center rounded-[0.9cqw] bg-[#1C2D7F] px-[2.2cqw] text-white">
      <span className="text-[0.78cqw] font-[700] uppercase tracking-[0.1em] text-[#EDB424]">E com o menor custo final</span>
      <p className="mt-[0.35cqw] text-[1.5cqw] font-[700] leading-[1.2]">Mais dinheiro pelo mesmo imóvel, pelo menor custo final entre as alternativas.</p>
    </div>
  </HomeCashUltraCanvas>
);
