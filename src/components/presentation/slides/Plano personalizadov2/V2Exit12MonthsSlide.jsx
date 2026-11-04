import { Calendar, ChevronDown, ChevronRight, DollarSign, TriangleAlert } from 'lucide-react';
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

export const V2Exit12MonthsSlide = ({ nav }) => (
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
        <span>Economia nos primeiros <strong>12 meses</strong> com o <strong>HomeCash®</strong></span>
      </div>
      <div className="flex h-[3.33cqw] items-center justify-center rounded-[0.63cqw] bg-[#157A38] text-[2.29cqw] font-[700] tracking-[-0.03em] text-white">
        R$ 60.458
      </div>
    </div>

    <div className="absolute bottom-[14.26%] left-[5%] right-[5%] top-[27.22%]">
      {['left-0', 'left-[21.26%]', 'left-[47.49%]', 'left-[73.77%]', 'right-0'].map((position) => (
        <div key={position} className={`absolute inset-y-0 w-px bg-[#CBD6F4] ${position}`} />
      ))}
    </div>

    <Separator position="top-[27.87%]" />
    <Separator position="top-[53.8%]" />

    <Bar icon={DollarSign} label="Liquidez imediata" tone="bg-[#1C2D7F]" className="left-[5%] top-[36.48%] w-[17.71cqw]" />
    <Block tone="bg-[#1C2D7F]" className="left-[6.04%] top-[43.15%] h-[4.17cqw] w-[15.63cqw] text-[1.88cqw] font-[700] tracking-[-0.02em]">
      +R$ 477.850
    </Block>
    <Bar icon={Calendar} label="01 a 12 meses" tone="bg-[#235CE9]" className="left-[23.96%] top-[31.3%] w-[70.21%]" />
    <Block tone="bg-[#235CE9]" className="left-[25%] top-[37.59%] h-[2.5cqw] w-[68.13%] text-[1.25cqw] font-[700]">
      HomeCash®
    </Block>
    <Block tone="bg-[#235CE9]" className="left-[25%] top-[43.15%] h-[4.17cqw] w-[33.65%] flex-col gap-[0.05cqw]">
      <span className="text-[1.67cqw] font-[700] leading-[2.08cqw] tracking-[-0.02em]">
        R$ 3.600<span className="text-[0.83cqw] tracking-normal"> /mês</span>
      </span>
      <span className="text-[0.68cqw] leading-[0.83cqw] text-[#DCE3F7]">valor vigente durante o período da operação</span>
    </Block>
    <Block tone="bg-[#235CE9]" className="left-[59.48%] top-[43.15%] h-[4.17cqw] w-[33.65%] flex-col gap-[0.05cqw]">
      <span className="text-[1.67cqw] font-[700] leading-[2.08cqw] tracking-[-0.02em]">R$ 43.200</span>
      <span className="text-[0.68cqw] leading-[0.83cqw] text-[#DCE3F7]">Soma no período</span>
    </Block>

    <Bar icon={DollarSign} label="Liquidez imediata" tone="bg-[#BD3126]" className="left-[5%] top-[57.31%] w-[17.71cqw]" />
    <Block tone="bg-[#BD3126]" className="left-[6.09%] top-[63.98%] h-[4.06cqw] w-[15.52cqw] text-[1.88cqw] font-[700] tracking-[-0.02em]">
      +R$ 477.850
    </Block>
    <Bar icon={Calendar} label="01 a 12 meses" tone="bg-[#BD3126]" className="left-[24.01%] top-[63.98%] w-[70.1%]" />
    <Block tone="bg-[#BD3126]" className="left-[25.05%] top-[70.28%] h-[2.4cqw] w-[68.02%] text-[1.25cqw] font-[700]">
      Home Equity
    </Block>
    <Block tone="bg-[#BD3126]" className="left-[25.05%] top-[75.83%] h-[4.06cqw] w-[33.54%] flex-col gap-[0.05cqw]">
      <span className="text-[1.67cqw] font-[700] leading-[2.08cqw] tracking-[-0.02em]">
        R$ 8.638<span className="text-[0.83cqw] tracking-normal"> /mês</span>
      </span>
    </Block>
    <Block tone="bg-[#BD3126]" className="left-[59.53%] top-[75.83%] h-[4.06cqw] w-[33.54%] flex-col gap-[0.05cqw]">
      <span className="text-[0.68cqw] leading-[0.83cqw]">Soma no período</span>
      <span className="text-[1.67cqw] font-[700] leading-[2.08cqw] tracking-[-0.02em]">R$ 103.658</span>
    </Block>

    <div className="absolute left-[5%] right-[5%] top-[87.96%] flex items-center gap-[1.67cqw]">
      <div className="flex h-[5.1cqw] w-[47.92cqw] shrink-0 items-center gap-[1.04cqw] rounded-[0.63cqw] bg-[#EDB4241F] px-[1.25cqw] ring-1 ring-inset ring-[#EDB42499]">
        <TriangleAlert className="h-[2.08cqw] w-[2.08cqw] shrink-0 text-[#EDB424]" strokeWidth={2} aria-hidden="true" />
        <div className="flex gap-[1.67cqw] text-[0.78cqw] leading-[1.15cqw] text-[#1C2D7F]">
          <p>
            O <strong>Home Equity</strong> inclui custos e despesas ocultas:
            <br />
            1. Taxa de juros
            <br />
            2. Atualização pelo IPCA
          </p>
          <p>
            3. Seguro MIP (morte e invalidez permanente)
            <br />
            4. Seguro DFI (dano físico do imóvel)
            <br />
            5. TAC, taxa de abertura de cadastro
          </p>
        </div>
      </div>
      <p className="flex-1 text-[0.78cqw] leading-[1.15cqw] text-[#5A5F7D]">
        *Para o cálculo do Home Equity, foi considerada a menor taxa encontrada em pesquisa com 18 instituições em
        24/08/2026: CET de 1,70% a.m. + IPCA anual de 5,50%, prazo de 240 meses.
      </p>
    </div>
  </V2Canvas>
);
