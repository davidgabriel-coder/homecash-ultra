import { CalendarBlank } from '@phosphor-icons/react/dist/csr/CalendarBlank';
import { CaretDown } from '@phosphor-icons/react/dist/csr/CaretDown';
import { CurrencyDollar } from '@phosphor-icons/react/dist/csr/CurrencyDollar';
import TriangleAlert from 'lucide-react/dist/esm/icons/triangle-alert.mjs';
import { absoluteBox, pctX, pctY } from '../shared/coordinates';
import { DootsLine } from '../shared/DootsLine';

const SimulationPt2ExactSection = ({ variant }) => {
  const isRed = variant === 'red';
  const primary = isRed ? '#a71215' : '#235ce9';
  const side = isRed ? '#a71215' : '#1c2d7f';
  const row = isRed
    ? {
        liquidityPill: [100, 619, 430, 76],
        liquidityAmount: [133, 715, 366, 95],
        periodPill: [530, 695, 1290, 75],
        labelBar: [562, 784, 1226, 60],
        monthlyCard: [562, 858, 616, 95],
        totalCard: [1198, 860, 590, 95]
      }
    : {
        liquidityPill: [100, 412, 430, 76],
        liquidityAmount: [133, 508, 366, 95],
        periodPill: [530, 317, 1290, 75],
        labelBar: [562, 406, 1226, 60],
        monthlyCard: [561, 480, 617, 95],
        totalCard: [1198, 482, 590, 95]
      };

  return (
    <>
      <div
        className="absolute z-20 flex items-center justify-between rounded-[0.94cqw] px-[1.04cqw] text-white"
        style={{ ...absoluteBox(...row.liquidityPill), backgroundColor: side }}
      >
        <div className="flex items-center gap-[0.72cqw]">
          <CurrencyDollar className="h-[1.82cqw] w-[1.82cqw]" weight="regular" />
          <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">Liquidez Imediata</span>
        </div>
        <CaretDown className="h-[1.58cqw] w-[1.58cqw]" weight="regular" />
      </div>

      <div
        className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] text-[1.88cqw] font-[700] leading-none text-white"
        style={{ ...absoluteBox(...row.liquidityAmount), backgroundColor: side }}
      >
        +R$ 2.908.900
      </div>

      <div
        className="absolute z-20 flex items-center justify-between rounded-[0.94cqw] px-[1.04cqw] text-white"
        style={{ ...absoluteBox(...row.periodPill), backgroundColor: primary }}
      >
        <div className="flex items-center gap-[0.72cqw]">
          <CalendarBlank className="h-[2.18cqw] w-[2.18cqw]" weight="bold" />
          <span className="whitespace-nowrap text-[1.67cqw] font-[500] leading-none">01 a 12 meses</span>
        </div>
        <CaretDown className="h-[1.62cqw] w-[1.62cqw]" weight="regular" />
      </div>

      <div
        className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] text-[1.88cqw] font-[700] leading-none"
        style={{ ...absoluteBox(...row.labelBar), backgroundColor: primary, color: isRed ? '#f0f0f0' : '#ffffff' }}
      >
        {isRed ? 'Home Equity' : 'HomeCash®'}
      </div>

      <div
        className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] text-center"
        style={{ ...absoluteBox(...row.monthlyCard), backgroundColor: primary, color: isRed ? '#f0f0f0' : '#ffffff' }}
      >
        <div>
          <p className="text-[1.88cqw] font-[700] leading-none">
            {isRed ? 'R$ 52.292' : 'R$ 21.500'} <span className="text-[0.83cqw] font-[400]">/mês</span>
          </p>
          {!isRed ? (
            <p className="mt-[0.54cqw] text-[0.63cqw] font-[400] leading-none">
              valor vigente durante o período da operação
            </p>
          ) : null}
        </div>
      </div>

      <div
        className="absolute z-20 flex items-center justify-center rounded-[0.83cqw] text-center"
        style={{ ...absoluteBox(...row.totalCard), backgroundColor: primary, color: isRed ? '#f0f0f0' : '#ffffff' }}
      >
        <div>
          {!isRed ? (
            <>
              <p className="text-[1.88cqw] font-[700] leading-none">R$ 258.000</p>
              <p className="mt-[0.54cqw] text-[0.83cqw] font-[400] leading-none">Soma no período</p>
            </>
          ) : (
            <>
              <p className="text-[0.83cqw] font-[400] leading-none">Soma no período</p>
              <p className="mt-[0.58cqw] text-[1.88cqw] font-[700] leading-none">R$ 627.504</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export const SimulationPt2Slide = () => (
  <div className="relative h-full overflow-hidden bg-[#f0f0f0] font-excon text-[#1c2d7f] [container-type:size]">
    <div className="absolute inset-0 bg-[linear-gradient(200.49deg,rgba(0,2,63,0.024)_46.29%,rgba(11,38,194,0.15)_80.3%),linear-gradient(90deg,#f0f0f0_0%,#f0f0f0_100%)]" />

    <h1 className="absolute z-20 whitespace-nowrap text-[3.33cqw] font-[400] leading-none text-[#1c2d7f]" style={{ left: pctX(99), top: pctY(96) }}>
      Simulação <span className="font-[700]">HomeCash®</span>
    </h1>
    <p className="absolute z-20 whitespace-nowrap text-[1.67cqw] font-[400] leading-none text-[rgba(28,45,127,0.7)]" style={{ left: pctX(99), top: pctY(192) }}>
      Contrato de locação do HomeCash®
    </p>

    <div className="absolute z-20 flex items-center justify-center rounded-[0.94cqw] bg-[#0fb35e] px-[0.52cqw] text-center text-[#f0f0f0]" style={absoluteBox(1091, 100, 729, 74)}>
      <p className="text-[1.35cqw] font-[400] leading-none">
        Economia nos primeiros <span className="font-[700]">12 meses</span> com o{' '}
        <span className="font-[700]">HomeCash®</span>
      </p>
    </div>
    <div className="absolute z-20 flex items-center justify-center rounded-[0.94cqw] bg-[#0fb35e] text-center text-[#f0f0f0]" style={absoluteBox(1091, 178, 729, 78)}>
      <p className="text-[2.5cqw] font-[700] leading-none">R$ 369.504</p>
    </div>

    <DootsLine style={{ left: pctX(102), top: pctY(250), width: pctX(1748), height: pctY(15) }} />
    <DootsLine style={{ left: pctX(102), top: pctY(611), width: pctX(1748), height: pctY(15) }} />

    {[100, 530, 960, 1390, 1820].map((left) => (
      <div key={left} className="absolute z-0 w-px bg-[#d2d7e9]" style={{ left: pctX(left), top: pctY(258), height: pctY(687) }} />
    ))}

    <SimulationPt2ExactSection variant="blue" />
    <SimulationPt2ExactSection variant="red" />

    <div className="absolute z-20 flex items-center rounded-[0.94cqw] border border-[#a71215] px-[1.25cqw] text-[#1c2d7f]" style={absoluteBox(100, 985, 1031, 92)}>
      <TriangleAlert className="mr-[1.56cqw] h-[3.55cqw] w-[3.55cqw] shrink-0 text-[#a71215]" strokeWidth={1.8} />
      <div className="grid flex-1 grid-cols-[1fr_1fr] gap-[1.3cqw] text-[0.94cqw] font-[400] leading-[1.075]">
        <div>
          <p>
            O <span className="font-[700] text-[#a71215]">Home Equity</span> inclui custos e despesas ocultas:
          </p>
          <p>1- Taxa de juros</p>
          <p>2- Atualização pelo IPCA</p>
        </div>
        <div>
          <p>3- Seguro MIP (morte e invalidez permanente)</p>
          <p>4- Seguro DFI (dano físico do imovel)</p>
          <p>5- TAC = taxa de abertura de cadastro</p>
        </div>
      </div>
    </div>

    <p className="absolute z-20 text-center text-[0.83cqw] font-[300] leading-[0.7572] text-[#1c2d7f]" style={{ left: pctX(1198), top: pctY(1003), width: pctX(564) }}>
      *Para cálculo do Home Equity foi considerado a menor taxa encontrada em pesquisa com 18 instituições realizada em
      15/5/2026 no valor de CET de 1.71% a.m. + IPCA anual de 5.50% com prazo de 240 meses.
    </p>
  </div>
);
