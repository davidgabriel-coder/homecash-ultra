import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const CRITERIA = [
  ['Garantia flexível', 'Um imóvel garante a liquidez do HomeCash Ultra. A garantia do consórcio pode reunir outros imóveis, seus ou de terceiros: terreno, comercial, residencial, o que fizer sentido.'],
  ['Dentro dos critérios do fundo', 'Localização, tipo, estado de conservação e documentação em dia, os mesmos critérios já usados hoje na avaliação do fundo.'],
  ['Dívida proporcional ao imóvel', 'A dívida atual pode ir de até 20% do valor do imóvel, em imóveis de até R$ 1 milhão, a até 50%, em imóveis de R$ 2 milhões ou mais.']
];

export const AudienceFitSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="04" label="Para quem é" className="absolute left-[5.2%] top-[11%] text-[1.2cqw]" />
    <div className="absolute left-[5.2%] top-[16%] flex gap-[0.9cqw]">
      {['Garantia flexível','Elegibilidade','Dívida controlada'].map((item)=><span key={item} className="rounded-full border border-[#1C2D7F]/65 px-[1.25cqw] py-[0.45cqw] text-[0.9cqw] font-[600]">{item}</span>)}
    </div>
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[22.5%] w-[82%] text-[4.1cqw] leading-[1.08] tracking-[-0.04em]">Nem todo mundo com um imóvel<br />é o <HomeCashUltraAccent>cliente certo.</HomeCashUltraAccent></HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[39.5%] w-[62%] text-[1.15cqw] leading-[1.45]">A estrutura da operação, com duas garantias e dois compromissos, só faz sentido para um público específico.</p>
    <div className="absolute left-[5.2%] right-[5.2%] top-[49.2%] grid h-[28.8%] grid-cols-3 gap-[2cqw]">
      {CRITERIA.map(([title, body], i)=><HomeCashUltraCard key={title} className="p-[1.65cqw]"><span className="flex h-[2.6cqw] w-[2.6cqw] items-center justify-center rounded-[0.5cqw] bg-[#1C2D7F] text-[1.2cqw] font-[700] text-white">{i+1}</span><div className="mt-[0.65cqw] h-[0.24cqw] w-[6.7cqw] bg-[#EDB424]"/><h2 className="mt-[0.7cqw] text-[1.3cqw] font-[700] leading-[1.2]">{title}</h2><p className="mt-[0.5cqw] text-[1.02cqw] leading-[1.5]">{body}</p></HomeCashUltraCard>)}
    </div>
    <div className="absolute bottom-[7%] left-[5.2%] right-[5.2%] flex min-h-[12%] flex-col justify-center rounded-[0.9cqw] bg-[#1C2D7F] px-[2.2cqw] py-[1.5cqw] text-white"><span className="text-[0.8cqw] font-[700] uppercase tracking-[0.1em] text-[#EDB424]">E com o menor custo final</span><p className="mt-[0.35cqw] text-[1.5cqw] font-[700] leading-[1.2]">Mais capital pelo mesmo imóvel, pelo menor custo final entre as alternativas.</p></div>
  </HomeCashUltraCanvas>
);
