import { CheckCircle2 } from 'lucide-react';
import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const ROWS = [
  ['Dinheiro liberado', 'R$ 896.400', 'R$ 636.000', '+R$ 260.400'],
  ['Do valor do imóvel', '84,6%', '60%', '+24,6 p.p.'],
  ['Prazo total', '90 meses', '240 meses', '12,5 anos antes'],
  ['CET ao ano', '25,51%', '28,69%', '−3,2 p.p.']
];

const COLUMNS = 'grid-cols-[1.15fr_1.3fr_1.12fr_1.12fr]';

export const MarketComparisonSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="09" label="Comparativo com o mercado" className="absolute left-[5.2%] top-[10.5%] text-[1.05cqw]" />
    <div className="absolute left-[5.2%] top-[15.2%] text-[0.92cqw] font-[700] uppercase tracking-[0.1em] text-[#5f6a9b]">HomeCash Ultra × Home Equity</div>
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[18.1%] w-[70%] text-[4.1cqw] leading-[1.08] tracking-[-0.045em]">
      Mais capital, a um custo menor,<br /><HomeCashUltraAccent>em menos tempo.</HomeCashUltraAccent>
    </HomeCashUltraTitle>

    <div className="absolute left-[5.2%] right-[5.2%] top-[35%] flex h-[42.2%] flex-col overflow-hidden rounded-[1.2cqw] border border-[#1C2D7F]/20">
      <div className={`grid ${COLUMNS} min-h-[21.5%] bg-white/60 text-center text-[0.88cqw] font-[700] uppercase tracking-[0.06em]`}>
        <div className="flex flex-col justify-center p-[1.05cqw] text-left text-[0.95cqw] normal-case leading-[1.35] tracking-normal">Mesmo imóvel<br />R$ 1,06 milhão</div>
        <div className="flex items-center justify-center bg-[#1C2D7F] p-[1cqw] text-white">HomeCash Ultra</div>
        <div className="flex items-center justify-center p-[1cqw]">Home Equity</div>
        <div className="flex items-center justify-center bg-[#209b59] p-[1cqw] text-white">Benefício Ultra</div>
      </div>
      {ROWS.map(([label, ultra, equity, benefit]) => (
        <div key={label} className={`grid ${COLUMNS} min-h-0 flex-1 border-t border-[#1C2D7F]/10 text-center`}>
          <div className="flex items-center p-[1.05cqw] text-left text-[1.02cqw]">{label}</div>
          <div className="flex items-center justify-center bg-[#1C2D7F] p-[0.9cqw] text-[1.72cqw] font-[700] text-[#EDB424]">{ultra}</div>
          <div className="flex items-center justify-center bg-white/40 p-[0.9cqw] text-[1.6cqw]">{equity}</div>
          <div className="flex items-center justify-center gap-[0.55cqw] bg-[#e6f4eb] p-[0.9cqw] text-[1.05cqw] font-[700] text-[#176f43]">
            <CheckCircle2 className="h-[1.45cqw] w-[1.45cqw] shrink-0 fill-[#209b59] text-white" strokeWidth={2.8} aria-hidden="true" />
            <span>{benefit}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="absolute bottom-[14.5%] left-[5.2%] top-[79.6%] flex w-[42%] items-center border-l-[0.28cqw] border-[#EDB424] pl-[1.25cqw] text-[0.98cqw] leading-[1.45]">
      <p><strong>Sendo direto com você:</strong> a parcela é maior porque tudo se quita em 7,5 anos, e não em 20.</p>
    </div>
    <p className="absolute bottom-[15.8%] right-[5.2%] w-[45%] text-[0.72cqw] leading-[1.4] text-[#69739e]">
      Mesmo imóvel de R$ 1,06 milhão. Home equity: 60% do imóvel, 2% a.m. (Price), 240 meses, com IOF, cartório e seguro MIP/DFI. CET calculado pela TIR do fluxo completo.
    </p>
  </HomeCashUltraCanvas>
);
