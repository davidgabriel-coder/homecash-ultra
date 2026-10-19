import { CalendarBlank } from '@phosphor-icons/react/dist/csr/CalendarBlank';
import { CaretDown } from '@phosphor-icons/react/dist/csr/CaretDown';
import { Coins } from '@phosphor-icons/react/dist/csr/Coins';
import { CurrencyDollar } from '@phosphor-icons/react/dist/csr/CurrencyDollar';
import { absoluteBox, pctX, pctY } from '../shared/coordinates';
import { DootsLine } from '../shared/DootsLine';

export const SimulationSlide = () => (
  <div className="relative h-full overflow-hidden bg-[#f0f0f0] font-excon text-[#1c2d7f] [container-type:size]">
    <div className="absolute inset-0 bg-[linear-gradient(200.49deg,rgba(0,2,63,0.024)_46.29%,rgba(11,38,194,0.15)_80.3%),linear-gradient(90deg,#f0f0f0_0%,#f0f0f0_100%)]" />

    <h1 className="absolute z-20 whitespace-nowrap text-[3.33cqw] font-[400] leading-none text-[#1c2d7f]" style={{ left: pctX(99), top: pctY(122) }}>
      Simulação <span className="font-[700]">HomeCash®</span>
    </h1>
    <p className="absolute z-20 whitespace-nowrap text-[1.67cqw] font-[400] leading-none text-[rgba(28,45,127,0.7)]" style={{ left: pctX(99), top: pctY(202) }}>
      Contrato de locação do HomeCash®
    </p>

    <DootsLine style={{ left: pctX(102), top: pctY(250), width: pctX(1748), height: pctY(15) }} />

    {[100, 530, 960, 1390, 1820].map((left) => (
      <div key={left} className="absolute z-0 w-px bg-[#d2d7e9]" style={{ left: pctX(left), top: pctY(258), height: pctY(558) }} />
    ))}

    <div className="absolute z-20 flex items-center justify-between rounded-[0.83cqw] bg-[#1c2d7f] px-[1.04cqw] text-white" style={absoluteBox(100, 453, 430, 76)}>
      <div className="flex items-center gap-[0.72cqw]">
        <CurrencyDollar className="h-[1.82cqw] w-[1.82cqw]" weight="regular" />
        <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">Liquidez Imediata</span>
      </div>
      <CaretDown className="h-[1.58cqw] w-[1.58cqw]" weight="regular" />
    </div>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#1c2d7f] text-center text-white" style={absoluteBox(133, 548, 366, 152)}>
      <div>
        <p className="text-[1.46cqw] font-[400] leading-[1.05]">
          Pagamento
          <br />
          <span className="text-[1.82cqw] font-[700]">à vista</span>
          <br />
          na sua conta
        </p>
        <p className="mt-[1.02cqw] text-[0.54cqw] font-[400] leading-none">Já descontando os custos e comissões</p>
      </div>
    </div>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#1c2d7f] text-[1.88cqw] font-[700] leading-none text-white" style={absoluteBox(133, 711, 366, 93)}>
      +R$ 2.908.900
    </div>

    <div className="absolute z-20 flex items-center justify-between rounded-[0.83cqw] bg-[#235ce9] px-[1.04cqw] text-white" style={absoluteBox(530, 384, 430, 76)}>
      <div className="flex items-center gap-[0.72cqw]">
        <Coins className="h-[2.2cqw] w-[2.2cqw]" weight="regular" />
        <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">Custos mensais</span>
      </div>
      <CaretDown className="h-[1.58cqw] w-[1.58cqw]" weight="regular" />
    </div>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#235ce9] text-center text-white" style={absoluteBox(562, 478, 366, 150)}>
      <p className="text-[1.74cqw] font-[400] leading-[1.08]">
        Continue
        <br />
        <span className="text-[2.02cqw] font-[700]">morando</span>
        <br />
        no imóvel*
      </p>
    </div>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#235ce9] text-center text-white" style={absoluteBox(562, 641, 366, 93)}>
      <div>
        <p className="text-[1.9cqw] font-[700] leading-none">
          R$ 21.500 <span className="text-[0.83cqw] font-[400]">/aluguel mês</span>
        </p>
        <p className="mt-[0.54cqw] text-[0.63cqw] font-[400] leading-none">valor vigente durante o período da operação</p>
      </div>
    </div>

    <div className="absolute z-20 flex items-center justify-between rounded-[0.83cqw] bg-[#1c2d7f] px-[1.04cqw] text-white" style={absoluteBox(960, 323, 430, 76)}>
      <div className="flex items-center gap-[0.72cqw]">
        <CalendarBlank className="h-[2.18cqw] w-[2.18cqw]" weight="bold" />
        <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">01 a 12 meses</span>
      </div>
      <CaretDown className="h-[1.58cqw] w-[1.58cqw]" weight="regular" />
    </div>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#1c2d7f] text-center text-white" style={absoluteBox(990, 416, 366, 153)}>
      <div>
        <p className="text-[1.72cqw] font-[400] leading-[1.08]">
          Recompra
          <br />
          com valor fixo
          <br />
          <span className="text-[2.02cqw] font-[700]">exclusivo</span>
        </p>
        <p className="mt-[0.82cqw] text-[0.56cqw] font-[400] leading-none">Direito apenas do cliente HomeCash</p>
      </div>
    </div>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#1c2d7f] text-[1.88cqw] font-[700] leading-none text-white" style={absoluteBox(990, 580, 366, 93)}>
      R$ 3.698.900
    </div>

    <div className="absolute z-20 flex items-center justify-between rounded-[0.83cqw] bg-[#235ce9] px-[1.04cqw] text-white" style={absoluteBox(1390, 256, 430, 76)}>
      <div className="flex items-center gap-[0.72cqw]">
        <CalendarBlank className="h-[2.18cqw] w-[2.18cqw]" weight="bold" />
        <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">13 a 18 meses</span>
      </div>
      <CaretDown className="h-[1.58cqw] w-[1.58cqw]" weight="regular" />
    </div>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#235ce9] text-center text-white" style={absoluteBox(1420, 349, 366, 153)}>
      <div>
        <p className="text-[1.72cqw] font-[400] leading-[1.08]">
          Recompra
          <br />
          com valor fixo
          <br />
          <span className="text-[2.02cqw] font-[700]">a mercado</span>
        </p>
        <p className="mt-[0.82cqw] text-[0.56cqw] font-[400] leading-none">Locatário continua com a preferência</p>
      </div>
    </div>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] bg-[#235ce9] text-[1.88cqw] font-[700] leading-none text-white" style={absoluteBox(1420, 520, 366, 93)}>
      R$ 4.007.000
    </div>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] border border-[#1c2d7f] text-center text-[#1c2d7f]" style={absoluteBox(100, 876, 327, 82)}>
      <p className="text-[0.98cqw] font-[700] leading-tight">Simulação de opções de saída</p>
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] border border-[#1c2d7f] text-center text-[#1c2d7f]" style={absoluteBox(445, 876, 285, 82)}>
      <p className="text-[0.66cqw] font-[400] leading-[1.06]">
        No financiamento imobiliário**
        <br />
        parcela média de:
        <br />
        <span className="text-[1.32cqw] font-[700]">R$ 36.537 x240</span>
      </p>
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] border border-[#1c2d7f] text-center text-[#1c2d7f]" style={absoluteBox(742, 876, 228, 82)}>
      <p className="text-[0.66cqw] font-[400] leading-[1.06]">
        Na venda a terceiro***
        <br />
        (Ex. por R$ 5.342.000)
        <br />
        <span className="text-[1.32cqw] font-[700]">+R$ 1.644.000</span>
      </p>
    </div>

    <p className="absolute z-20 text-center text-[0.69cqw] font-[400] leading-[1.05] text-[#253793]" style={{ left: pctX(100), top: pctY(978), width: pctX(1740) }}>
      *O contrato de locação pede três aluguéis como caução. **Valores simulados, dia 15/5/2026, para financiamento
      imobiliário nos principais bancos do Brasil, modalidade SAC, sujeito a alterações de mercado, para financiar a
      recompra do imóvel no HomeCash (Parcela 1: R$ 56.367 / Parcela 240: R$16.371). Condicionado à aprovação da instituição
      financeira de sua preferência e mediante a aprovação do crédito. ***Valores simulados, dia 15/5/2026, do potencial venda
      do imóvel a terceiro pelo valor de R$ 5.342.000 com base em amostras de anúncios de imóveis similares divulgados na
      internet, sujeito a alterações de mercado. O não considera custos do processo de venda, como: taxas de cartório,
      impostos, entre outros.
    </p>
  </div>
);
