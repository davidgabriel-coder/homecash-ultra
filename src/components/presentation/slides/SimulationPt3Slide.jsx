import { CalendarBlank } from '@phosphor-icons/react/dist/csr/CalendarBlank';
import { CaretDown } from '@phosphor-icons/react/dist/csr/CaretDown';
import { CurrencyDollar } from '@phosphor-icons/react/dist/csr/CurrencyDollar';
import { absoluteBox, pctX, pctY } from '../shared/coordinates';
import { DootsLine } from '../shared/DootsLine';

export const SimulationPt3Slide = () => (
  <div className="relative h-full overflow-hidden bg-[#f0f0f0] font-excon text-[#1c2d7f] [container-type:size]">
    <div className="absolute inset-0 bg-[linear-gradient(200.49deg,rgba(0,2,63,0.024)_46.29%,rgba(11,38,194,0.15)_80.3%),linear-gradient(90deg,#f0f0f0_0%,#f0f0f0_100%)]" />

    <h1 className="absolute z-20 whitespace-nowrap text-[3.33cqw] font-[400] leading-none text-[#1c2d7f]" style={{ left: pctX(99), top: pctY(96) }}>
      Simulação <span className="font-[700]">HomeCash®</span>
    </h1>
    <p className="absolute z-20 whitespace-nowrap text-[1.67cqw] font-[400] leading-none text-[rgba(28,45,127,0.7)]" style={{ left: pctX(99), top: pctY(192) }}>
      Contrato de locação do HomeCash®
    </p>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.94cqw] bg-[#0fb35e] px-[0.52cqw] text-center text-[#f0f0f0]" style={absoluteBox(1091, 100, 729, 74)}>
      <p className="text-[1.88cqw] font-[400] leading-none">
        Economia total com o <span className="font-[700]">HomeCash®</span>
      </p>
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.94cqw] bg-[#0fb35e] text-center text-[#f0f0f0]" style={absoluteBox(1091, 178, 729, 78)}>
      <p className="text-[2.5cqw] font-[700] leading-none">R$ 3.538.916</p>
    </div>

    <DootsLine style={{ left: pctX(102), top: pctY(250), width: pctX(1748), height: pctY(15) }} />
    <DootsLine style={{ left: pctX(102), top: pctY(611), width: pctX(1748), height: pctY(15) }} />

    {[100, 530, 960, 1390, 1820].map((left) => (
      <div key={left} className="absolute z-0 w-px bg-[#d2d7e9]" style={{ left: pctX(left), top: pctY(258), height: pctY(687) }} />
    ))}

    <div className="absolute z-20 flex items-center justify-between rounded-[0.94cqw] bg-[#1c2d7f] px-[1.04cqw] text-white" style={absoluteBox(100, 412, 430, 76)}>
      <div className="flex items-center gap-[0.72cqw]">
        <CurrencyDollar className="h-[1.82cqw] w-[1.82cqw]" weight="regular" />
        <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">Liquidez Imediata</span>
      </div>
      <CaretDown className="h-[1.58cqw] w-[1.58cqw]" weight="regular" />
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#1c2d7f] text-[1.88cqw] font-[700] leading-none text-white" style={absoluteBox(133, 508, 366, 95)}>
      +R$ 2.908.900
    </div>

    <div className="absolute z-20 flex items-center justify-between rounded-[0.94cqw] bg-[#1c2d7f] px-[1.04cqw] text-white" style={absoluteBox(530, 343, 430, 75)}>
      <div className="flex items-center gap-[0.72cqw]">
        <CalendarBlank className="h-[2.18cqw] w-[2.18cqw]" weight="bold" />
        <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">01 a 12 meses</span>
      </div>
      <CaretDown className="h-[1.62cqw] w-[1.62cqw]" weight="regular" />
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#1c2d7f] text-[1.88cqw] font-[700] leading-none text-white" style={absoluteBox(562, 428, 370, 60)}>
      HomeCash®
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#1c2d7f] text-center text-white" style={absoluteBox(562, 510, 366, 95)}>
      <div>
        <p className="text-[1.88cqw] font-[700] leading-none">
          R$ 21.500 <span className="text-[0.83cqw] font-[400]">/mês</span>
        </p>
        <p className="mt-[0.54cqw] text-[0.63cqw] font-[400] leading-none">valor vigente durante o período da operação</p>
      </div>
    </div>

    <div className="absolute z-20 flex items-center justify-between rounded-[0.94cqw] bg-[#235ce9] px-[1.04cqw] text-white" style={absoluteBox(960, 278, 860, 75)}>
      <div className="flex items-center gap-[0.72cqw]">
        <CalendarBlank className="h-[2.18cqw] w-[2.18cqw]" weight="bold" />
        <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">
          240 Meses - <span className="font-[700]">HomeCash®</span>
        </span>
      </div>
      <CaretDown className="h-[1.62cqw] w-[1.62cqw]" weight="regular" />
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#235ce9] text-[1.88cqw] font-[700] leading-none text-white" style={absoluteBox(992, 372, 790, 60)}>
      Financiamento
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#235ce9] text-center text-white" style={absoluteBox(992, 452, 365, 95)}>
      <div>
        <p className="text-[1.88cqw] font-[700] leading-none">
          R$ 36.537 <span className="text-[0.83cqw] font-[400]">/mês</span>
        </p>
        <p className="mt-[0.72cqw] text-[0.83cqw] font-[400] leading-none">(parcela média)</p>
      </div>
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#235ce9] text-center text-white" style={absoluteBox(1419, 452, 365, 95)}>
      <div>
        <p className="text-[1.88cqw] font-[700] leading-none">R$ 9.011.169</p>
        <p className="mt-[0.72cqw] text-[0.83cqw] font-[400] leading-none">Total no período</p>
      </div>
    </div>

    <div className="absolute z-20 flex items-center justify-between rounded-[0.94cqw] bg-[#a71215] px-[1.04cqw] text-white" style={absoluteBox(100, 619, 430, 76)}>
      <div className="flex items-center gap-[0.72cqw]">
        <CurrencyDollar className="h-[1.82cqw] w-[1.82cqw]" weight="regular" />
        <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">Liquidez Imediata</span>
      </div>
      <CaretDown className="h-[1.58cqw] w-[1.58cqw]" weight="regular" />
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#a71215] text-[1.88cqw] font-[700] leading-none text-white" style={absoluteBox(133, 715, 366, 95)}>
      +R$ 2.908.900
    </div>
    <div className="absolute z-20 flex items-center justify-between rounded-[0.94cqw] bg-[#a71215] px-[1.04cqw] text-white" style={absoluteBox(530, 688, 1290, 75)}>
      <div className="flex items-center gap-[0.72cqw]">
        <CalendarBlank className="h-[2.18cqw] w-[2.18cqw]" weight="bold" />
        <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">
          240 Meses - <span className="font-[700]">Home Equity</span>
        </span>
      </div>
      <CaretDown className="h-[1.62cqw] w-[1.62cqw]" weight="regular" />
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#a71215] text-center text-[#f0f0f0]" style={absoluteBox(562, 792, 616, 95)}>
      <p className="text-[1.88cqw] font-[700] leading-none">
        R$ 52.292 <span className="text-[0.83cqw] font-[400]">/mês</span>
      </p>
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#a71215] text-center text-[#f0f0f0]" style={absoluteBox(1198, 792, 590, 95)}>
      <div>
        <p className="text-[0.83cqw] font-[400] leading-none">Total no período</p>
        <p className="mt-[0.58cqw] text-[1.88cqw] font-[700] leading-none">R$ 12.550.085</p>
      </div>
    </div>

    <p className="absolute z-20 text-center text-[0.73cqw] font-[400] leading-[1.05] text-[#1c2d7f]" style={{ left: pctX(130), top: pctY(1012), width: pctX(1660) }}>
      *O contrato de locação pede três aluguéis como caução. **Valores simulados, dia 15/5/2026, para financiamento
      imobiliário nos principais bancos do Brasil, modalidade SAC, sujeito a alterações de mercado, para financiar a
      recompra do imóvel no HomeCash (Parcela 1: R$ 56.367 / Parcela 240: R$ 16.371). Condicionado à aprovação da
      instituição financeira de sua preferência e mediante a aprovação do crédito. **Para cálculo do Home Equity foi
      considerado a menor taxa encontrada em pesquisa com 18 instituições realizada em 15/5/2026 no valor de CET de
      1.71% a.m. + IPCA anual de 5.50% com prazo de 240 meses.
    </p>
  </div>
);
