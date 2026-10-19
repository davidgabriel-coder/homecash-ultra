import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraEyebrow, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const PERIODS = [
  { period:'Mês 0', title:'Liquidez vira lance', rows:[['Liquidez HomeCash','+ R$ 530.000'],['Lance no consórcio','100% da liquidez']], total:['Carta no 3º mês','R$ 815.385'], tone:'gold' },
  { period:'Meses 1 a 3', title:'Até a contemplação', rows:[['Consórcio','R$ 4.183'],['Aluguel HomeCash','R$ 3.710']], total:['Por mês','R$ 7.893'] },
  { period:'Meses 4 a 12', title:'Carta contemplada', rows:[['Consórcio','R$ 1.848'],['Aluguel HomeCash','R$ 3.710'],['ITBI e cartório (mês 12)','R$ 26.200']], total:['Por mês','R$ 5.558'], tone:'gold' },
  { period:'Mês 13 em diante', title:'Recompra financiada', rows:[['Consórcio (até o mês 230)','R$ 1.848'],['Financiamento OXY','R$ 8.033']], total:['Por mês','R$ 9.881'], tone:'dark' }
];

export const MonthlyValuesSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="09" label="Valores" className="absolute left-[5.2%] top-[7%]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[14%] text-[3.35cqw]">Valores da operação, <HomeCashUltraAccent>mês a mês.</HomeCashUltraAccent></HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[26%] text-[1.08cqw]">Tudo o que entra e tudo o que sai, do início à última parcela.</p>
    <div className="absolute left-[5.2%] right-[5.2%] top-[36%] grid h-[42%] grid-cols-4 gap-[1.1cqw]">
      {PERIODS.map((item)=><section key={item.period} className={`flex flex-col rounded-[1cqw] border p-[1.25cqw] ${item.tone==='dark'?'border-[#1C2D7F] bg-[#1C2D7F] text-white':item.tone==='gold'?'border-[#EDB424] bg-[#f5ead0]':'border-[#1C2D7F]/55 bg-[#f1f1f3]'}`}>
        <HomeCashUltraEyebrow className={item.tone==='dark'?'text-white/65':''}>{item.period}</HomeCashUltraEyebrow><h2 className="mt-[0.35cqw] border-b border-current/15 pb-[0.5cqw] text-[1.12cqw] font-[700]">{item.title}</h2>
        <div className="mt-[0.35cqw] space-y-[0.2cqw]">{item.rows.map(([label,value])=><div key={label} className="flex justify-between gap-[0.3cqw] border-b border-current/10 py-[0.38cqw] text-[0.75cqw]"><span>{label}</span><strong className="whitespace-nowrap">{value}</strong></div>)}</div>
        <div className="mt-auto border-t-2 border-current/50 pt-[0.55cqw]"><div className="flex justify-between gap-[0.3cqw] text-[0.78cqw]"><strong>{item.total[0]}</strong><strong>{item.total[1]}</strong></div></div>
      </section>)}
    </div>
    <div className="absolute bottom-[8%] right-[5.2%] rounded-[0.9cqw] bg-[#EDB424] px-[1.5cqw] py-[0.9cqw] text-[#1C2D7F]"><HomeCashUltraEyebrow className="text-[#1C2D7F]">Custo total (soma de tudo o que é pago)</HomeCashUltraEyebrow><strong className="text-[1.75cqw]">R$ 2.430.677</strong></div>
  </HomeCashUltraCanvas>
);
