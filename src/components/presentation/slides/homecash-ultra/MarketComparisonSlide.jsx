import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const ROWS = [
  ['Capital liberado','R$ 815.385','R$ 636.000','+R$ 179.385'],
  ['Do valor do imóvel','76,9%','60%','+16,9 p.p.'],
  ['CET ao ano','14,76%','28,69%','−13,9 p.p.'],
  ['IOF','Zero','Incluso','Sem IOF']
];

export const MarketComparisonSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="10" label="Comparativo com o mercado" className="absolute left-[5.2%] top-[6%]" />
    <div className="absolute left-[5.2%] top-[11%] text-[0.82cqw] font-[700] uppercase tracking-[0.1em] text-[#5f6a9b]">HomeCash Ultra × Home Equity</div>
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[15%] text-[3.2cqw]">Mais capital, <HomeCashUltraAccent>a um custo menor.</HomeCashUltraAccent></HomeCashUltraTitle>
    <div className="absolute left-[5.2%] right-[5.2%] top-[31%] overflow-hidden rounded-[1cqw] border border-[#1C2D7F]/20">
      <div className="grid grid-cols-[1.2fr_1.3fr_1.3fr_1.15fr] bg-white/60 text-center text-[0.95cqw] font-[700] uppercase tracking-[0.06em]">
        <div className="flex items-center p-[1.1cqw] text-left normal-case tracking-normal">Mesmo imóvel<br/>R$ 1,06 milhão</div><div className="bg-[#1C2D7F] p-[1.2cqw] text-white">HomeCash Ultra</div><div className="p-[1.2cqw]">Home Equity</div><div className="bg-[#2ca667] p-[1.2cqw] text-white">Benefício Ultra</div>
      </div>
      {ROWS.map(([label,ultra,equity,benefit])=><div key={label} className="grid grid-cols-[1.2fr_1.3fr_1.3fr_1.15fr] border-t border-[#1C2D7F]/10 text-center">
        <div className="flex items-center p-[1.05cqw] text-left text-[1cqw]">{label}</div><div className="flex items-center justify-center bg-[#1C2D7F] p-[1.05cqw] text-[1.4cqw] font-[700] text-[#EDB424]">{ultra}</div><div className="flex items-center justify-center bg-white/40 p-[1.05cqw] text-[1.35cqw]">{equity}</div><div className="flex items-center justify-center gap-[0.35cqw] bg-[#e6f4eb] p-[1.05cqw] text-[1cqw] font-[700] text-[#227d4d]"><span>✓</span>{benefit}</div>
      </div>)}
    </div>
    <p className="absolute bottom-[5%] left-[5.2%] right-[5.2%] text-[0.72cqw] leading-[1.4] text-[#69739e]">Mesmo imóvel de R$ 1,06 milhão. HomeCash Ultra: 12 meses de HomeCash + financiamento da recompra em até 240 meses, a 14% a.a. Home equity: 60% do imóvel, 2% a.m. (Price), 240 meses, com IOF, cartório e seguro MIP/DFI. CET pela TIR do fluxo completo.</p>
  </HomeCashUltraCanvas>
);
