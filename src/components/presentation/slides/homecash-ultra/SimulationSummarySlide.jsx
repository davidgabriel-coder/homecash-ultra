import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraEyebrow, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const METRICS = [
  ['Liquidez disponível para o lance','Liquidez liberada: R$ 530.000','Dívidas informadas: – R$ 0','R$ 530 mil'],
  ['Carta estimada','Base de mais de 52 mil assembleias reais','Contemplação estimada no 3º mês','R$ 815.385','Garantia: imóvel de R$ 1.200.000 · cobre 103% da carta'],
  ['Mais capital que o home equity','Sobre o mesmo imóvel','76,9% do imóvel, contra 60%','+28%'],
  ['CET da operação','Recompra financiada','Custo efetivo total do fluxo completo','14,76% a.a.']
];

export const SimulationSummarySlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="07" label="Simulação" className="absolute left-[5.2%] top-[6%]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[12%] text-[3.85cqw]">Quanto o seu imóvel libera,<br />e <HomeCashUltraAccent>quanto fica com você.</HomeCashUltraAccent></HomeCashUltraTitle>
    <div className="absolute left-[5.2%] right-[5.2%] top-[35%] flex justify-between border-b border-[#1C2D7F]/20 pb-[1.2cqw]">
      {[["Liquidez liberada","R$ 530.000"],["Lance no consórcio","100% da liquidez disponível"],["Contemplação estimada","3º mês"],["Recompra","Até 240 meses"]].map(([label,value])=><div key={label}><HomeCashUltraEyebrow>{label}</HomeCashUltraEyebrow><div className="mt-[0.25cqw] text-[1.35cqw] font-[700]">{value}</div></div>)}
    </div>
    <div className="absolute bottom-[8%] left-[5.2%] right-[5.2%] grid h-[43%] grid-cols-4 gap-[1.25cqw]">
      {METRICS.map(([title,detail,sub,value,caption],i)=><HomeCashUltraCard key={title} dark={i===1} className="flex flex-col p-[1.45cqw]"><div className={`mb-[0.75cqw] flex h-[2.35cqw] w-[2.35cqw] items-center justify-center rounded-full text-[1.15cqw] ${i===1?'bg-[#EDB424] text-[#1C2D7F]':'bg-[#1C2D7F] text-white'}`}>{['$','▣','↗','%'][i]}</div><HomeCashUltraEyebrow className={i===1?'text-white/65':''}>{title}</HomeCashUltraEyebrow><p className="mt-[0.9cqw] text-[0.88cqw]">{detail}</p><p className={`mt-[0.45cqw] border-t pt-[0.5cqw] text-[0.82cqw] ${i===1?'border-white/20':'border-[#1C2D7F]/20'}`}>{sub}</p><strong className={`mt-auto text-[2.05cqw] leading-none ${i===1?'text-white':i===2?'text-[#EDB424]':'text-[#1C2D7F]'}`}>{value}</strong>{caption && <p className="mt-[0.5cqw] text-[0.8cqw] leading-[1.35] text-white/65">{caption}</p>}</HomeCashUltraCard>)}
    </div>
  </HomeCashUltraCanvas>
);
