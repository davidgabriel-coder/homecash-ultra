import { Calendar, ChevronDown, ChevronRight, DollarSign } from 'lucide-react';
import { V2Canvas, V2Eyebrow, V2Header } from './v2Shared';

const Bar = ({ icon: Icon, label, tone, className }) => (
  <div
    className={`absolute flex h-[2.92cqw] items-center justify-between rounded-[0.63cqw] px-[1.04cqw] text-white ${tone} ${className}`}
  >
    <div className="flex items-center gap-[0.63cqw]">
      <Icon className="h-[1.25cqw] w-[1.25cqw] shrink-0" strokeWidth={2} aria-hidden="true" />
      <span className="text-[1.15cqw] font-[500]">{label}</span>
    </div>
    <ChevronDown className="h-[1.15cqw] w-[1.15cqw] shrink-0" strokeWidth={2} aria-hidden="true" />
  </div>
);

const Block = ({ tone, className, children }) => (
  <div className={`absolute flex items-center justify-center rounded-[0.63cqw] text-white ${tone} ${className}`}>
    {children}
  </div>
);

const Separator = ({ position }) => (
  <div className={`absolute left-[5%] right-[5%] flex -translate-y-1/2 items-center ${position}`}>
    <div className="h-[0.1cqw] flex-1 bg-[#9AA6CF]" />
    <ChevronRight className="h-[0.83cqw] w-[0.83cqw] shrink-0 text-[#7C85AD]" strokeWidth={2.5} aria-hidden="true" />
  </div>
);

export const V2Exit240MonthsSlide = ({ nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />

    <div className="absolute left-[5%] top-[14.5%]">
      <V2Eyebrow>05 · Saída B · Contrato de locação do HomeCash®</V2Eyebrow>
      <h1 className="mt-[0.7cqw] text-[3.13cqw] font-[700] leading-[1.07] tracking-[-0.03em] text-[#1C2D7F]">
        <span className="font-[400]">Simulação</span> <span className="text-[#235CE9]">HomeCash®</span>
      </h1>
    </div>

    <div className="absolute left-[65.83%] right-[5%] top-[14.07%] flex flex-col gap-[0.31cqw]">
      <div className="flex h-[2.5cqw] items-center justify-center rounded-[0.63cqw] bg-[#157A38] text-[1.04cqw] text-white">
        <span>Economia total com o <strong>HomeCash®</strong></span>
      </div>
      <div className="flex h-[3.33cqw] items-center justify-center rounded-[0.63cqw] bg-[#157A38] text-[2.29cqw] font-[700] tracking-[-0.03em] text-white">
        R$ 414.351
      </div>
    </div>

    <div className="absolute bottom-[12.41%] left-[5%] right-[5%] top-[27.22%]">
      {['left-0', 'left-[21.26%]', 'left-[47.49%]', 'left-[73.77%]', 'right-0'].map((position) => (
        <div key={position} className={`absolute inset-y-0 w-px bg-[#CBD6F4] ${position}`} />
      ))}
    </div>

    <Separator position="top-[27.87%]" />
    <Separator position="top-[62.31%]" />

    <Bar icon={DollarSign} label="Liquidez imediata" tone="bg-[#1C2D7F]" className="left-[5%] top-[45%] w-[17.71cqw]" />
    <Block tone="bg-[#1C2D7F]" className="left-[6.04%] top-[51.67%] h-[4.17cqw] w-[15.63cqw] text-[1.88cqw] font-[700] tracking-[-0.02em]">
      +R$ 477.850
    </Block>
    <Bar icon={Calendar} label="01 a 12 meses" tone="bg-[#1C2D7F]" className="left-[23.96%] top-[39.81%] w-[22.92%]" />
    <Block tone="bg-[#1C2D7F]" className="left-[25%] top-[46.11%] h-[2.5cqw] w-[20.83%] text-[1.25cqw] font-[700]">
      HomeCash®
    </Block>
    <Block tone="bg-[#1C2D7F]" className="left-[25%] top-[51.67%] h-[4.17cqw] w-[20.83%] flex-col gap-[0.05cqw]">
      <span className="text-[1.67cqw] font-[700] leading-[2.08cqw] tracking-[-0.02em]">
        R$ 3.600<span className="text-[0.83cqw] tracking-normal"> /mês</span>
      </span>
      <span className="text-[0.68cqw] leading-[0.83cqw] text-[#BCCAE9]">valor vigente durante o período da operação</span>
    </Block>

    <Bar
      icon={Calendar}
      label={
        <>
          240 meses · <strong>HomeCash®</strong>
        </>
      }
      tone="bg-[#235CE9]"
      className="left-[48.18%] top-[31.3%] w-[45.94%]"
    />
    <Block tone="bg-[#235CE9]" className="left-[49.22%] top-[37.59%] h-[2.5cqw] w-[43.85%] text-[1.25cqw] font-[700]">
      Financiamento
    </Block>
    <Block tone="bg-[#235CE9]" className="left-[49.22%] top-[43.15%] h-[4.17cqw] w-[21.51%] flex-col gap-[0.05cqw]">
      <span className="text-[1.67cqw] font-[700] leading-[2.08cqw] tracking-[-0.02em]">
        R$ 6.171<span className="text-[0.83cqw] tracking-normal"> /mês</span>
      </span>
      <span className="text-[0.68cqw] leading-[0.83cqw] text-[#DCE3F7]">parcela média</span>
    </Block>
    <Block tone="bg-[#235CE9]" className="left-[71.61%] top-[43.15%] h-[4.17cqw] w-[21.46%] flex-col gap-[0.05cqw]">
      <span className="text-[1.67cqw] font-[700] leading-[2.08cqw] tracking-[-0.02em]">R$ 1.442.858</span>
      <span className="text-[0.68cqw] leading-[0.83cqw] text-[#DCE3F7]">Total no período</span>
    </Block>

    <Bar icon={DollarSign} label="Liquidez imediata" tone="bg-[#BD3126]" className="left-[5%] top-[65.83%] w-[17.71cqw]" />
    <Block tone="bg-[#BD3126]" className="left-[6.09%] top-[72.5%] h-[4.06cqw] w-[15.52cqw] text-[1.88cqw] font-[700] tracking-[-0.02em]">
      +R$ 477.850
    </Block>
    <Bar
      icon={Calendar}
      label={
        <>
          240 meses · <strong>Home Equity</strong>
        </>
      }
      tone="bg-[#BD3126]"
      className="left-[24.01%] top-[71.39%] w-[70.1%]"
    />
    <Block tone="bg-[#BD3126]" className="left-[25.05%] top-[77.69%] h-[4.06cqw] w-[33.54%] flex-col gap-[0.05cqw]">
      <span className="text-[1.67cqw] font-[700] leading-[2.08cqw] tracking-[-0.02em]">
        R$ 8.638<span className="text-[0.83cqw] tracking-normal"> /mês</span>
      </span>
    </Block>
    <Block tone="bg-[#BD3126]" className="left-[59.53%] top-[77.69%] h-[4.06cqw] w-[33.54%] flex-col gap-[0.05cqw]">
      <span className="text-[0.68cqw] leading-[0.83cqw] text-[#DCE3F7]">Total no período</span>
      <span className="text-[1.67cqw] font-[700] leading-[2.08cqw] tracking-[-0.02em]">R$ 1.857.209</span>
    </Block>

    <p className="absolute left-[5%] right-[5%] top-[89.81%] text-center text-[0.78cqw] leading-[1.15cqw] text-[#5A5F7D]">
      *O contrato de locação pede três aluguéis como caução. **Valores simulados em 24/08/2026 para financiamento
      imobiliário nos principais bancos do Brasil, modalidade SAC, sujeitos a alterações de mercado, para financiar a
      recompra do imóvel no HomeCash (parcela 1: R$ 9.473 / parcela 240: R$ 3.512). Condicionado à aprovação da
      instituição financeira e do crédito. Home Equity: menor taxa encontrada em pesquisa com 18 instituições em
      24/08/2026, CET de 1,70% a.m. + IPCA anual de 5,50%, prazo de 240 meses.
    </p>
  </V2Canvas>
);
