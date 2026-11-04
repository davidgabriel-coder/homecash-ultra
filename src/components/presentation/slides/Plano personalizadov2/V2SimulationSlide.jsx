import { ArrowRight, Calendar, ChevronDown, Coins, DollarSign } from 'lucide-react';
import { V2Canvas, V2Eyebrow, V2Header } from './v2Shared';

const PlanColumn = ({ position, tone = 'navy', icon: Icon, label, children }) => (
  <div className={`absolute flex w-[22.3%] flex-col gap-[0.6cqw] ${position}`}>
    <div
      className={`flex h-[3.125cqw] items-center justify-between rounded-[0.625cqw] px-[1.15cqw] text-white ${
        tone === 'primary' ? 'bg-[#235CE9]' : 'bg-[#1C2D7F]'
      }`}
    >
      <div className="flex items-center gap-[0.6cqw]">
        <Icon className="h-[1.25cqw] w-[1.25cqw] shrink-0" strokeWidth={2} aria-hidden="true" />
        <span className="text-[1.25cqw] font-[500] leading-none">{label}</span>
      </div>
      <ChevronDown className="h-[1.15cqw] w-[1.15cqw] shrink-0" strokeWidth={2} aria-hidden="true" />
    </div>
    <div className="flex flex-col gap-[0.5cqw] px-[1.25cqw]">{children}</div>
  </div>
);

const Tile = ({ tone = 'navy', className = '', children }) => (
  <div
    className={`flex flex-col items-center justify-center rounded-[0.625cqw] text-center text-white ${
      tone === 'primary' ? 'bg-[#235CE9]' : 'bg-[#1C2D7F]'
    } ${className}`}
  >
    {children}
  </div>
);

export const V2SimulationSlide = ({ nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />
    <div className="absolute left-[5%] right-[5%] top-[14.5%]">
      <V2Eyebrow>04 · Contrato de locação do HomeCash®</V2Eyebrow>
      <h1 className="mt-[0.7cqw] text-[3.125cqw] font-[400] leading-[1.05] tracking-[-0.03em] text-[#1C2D7F]">
        Simulação <span className="font-[700] text-[#235CE9]">HomeCash®</span>
      </h1>
    </div>

    <div aria-hidden="true">
      {['left-[5%]', 'left-[27.3%]', 'left-[49.6%]', 'left-[71.9%]', 'left-[94.2%]'].map((position) => (
        <div key={position} className={`absolute top-[25.9%] bottom-[12.2%] w-px bg-[#CBD6F4] ${position}`} />
      ))}
      <div className="absolute left-[5%] right-[5%] top-[26.67%] flex items-center">
        <div className="h-[2px] grow bg-[#9AA6CF]" />
        <ArrowRight className="h-[0.83cqw] w-[0.83cqw] shrink-0 text-[#7C85AD]" strokeWidth={2.5} />
      </div>
    </div>

    <PlanColumn position="left-[5%] top-[44.44%]" icon={DollarSign} label="Liquidez imediata">
      <Tile className="h-[6.67cqw]">
        <div className="text-[1.35cqw] leading-[1.16]">
          Pagamento
          <br />
          <strong className="font-[700]">à vista</strong>
          <br />
          na sua conta
        </div>
        <span className="mt-[0.3cqw] text-[0.65cqw] leading-[1.3] text-[#BCCAE9]">
          Já descontando os custos e comissões
        </span>
      </Tile>
      <Tile className="h-[3.96cqw]">
        <span className="text-[1.77cqw] font-[700] tracking-[-0.02em]">+R$ 477.850</span>
      </Tile>
    </PlanColumn>

    <PlanColumn position="left-[27.3%] top-[39.07%]" tone="primary" icon={Coins} label="Custos mensais">
      <Tile tone="primary" className="h-[6.67cqw]">
        <div className="text-[1.35cqw] leading-[1.16]">
          Continue
          <br />
          <strong className="font-[700]">morando</strong>
          <br />
          no imóvel*
        </div>
      </Tile>
      <Tile tone="primary" className="h-[3.96cqw] gap-[0.1cqw]">
        <span className="text-[1.77cqw] font-[700] tracking-[-0.02em]">
          R$ 3.600
          <span className="text-[0.78cqw] font-[700]"> /aluguel mês</span>
        </span>
        <span className="text-[0.65cqw] leading-[1.3] text-[#DCE3F7]">valor vigente durante o período da operação</span>
      </Tile>
    </PlanColumn>

    <PlanColumn position="left-[49.6%] top-[33.7%]" icon={Calendar} label="01 a 12 meses">
      <Tile className="h-[6.67cqw]">
        <div className="text-[1.35cqw] leading-[1.16]">
          Recompra
          <br />
          com valor fixo
          <br />
          <strong className="font-[700]">exclusivo</strong>
        </div>
        <span className="mt-[0.3cqw] text-[0.65cqw] leading-[1.3] text-[#BCCAE9]">
          Direito apenas do cliente HomeCash
        </span>
      </Tile>
      <Tile className="h-[3.96cqw]">
        <span className="text-[1.77cqw] font-[700] tracking-[-0.02em]">R$ 615.825</span>
      </Tile>
    </PlanColumn>

    <PlanColumn position="left-[71.9%] top-[28.33%]" tone="primary" icon={Calendar} label="13 a 18 meses">
      <Tile tone="primary" className="h-[6.67cqw]">
        <div className="text-[1.35cqw] leading-[1.16]">
          Recompra
          <br />
          com valor fixo
          <br />
          <strong className="font-[700]">a mercado</strong>
        </div>
        <span className="mt-[0.3cqw] text-[0.65cqw] leading-[1.3] text-[#DCE3F7]">
          Locatário continua com a preferência
        </span>
      </Tile>
      <Tile tone="primary" className="h-[3.96cqw]">
        <span className="text-[1.77cqw] font-[700] tracking-[-0.02em]">R$ 668.000</span>
      </Tile>
    </PlanColumn>

    <p className="absolute left-[11.4%] right-[11.4%] top-[90.6%] text-center text-[0.9cqw] leading-[1.35cqw] text-[#5A5F7D]">
      *O contrato de locação prevê três aluguéis como caução. Valores simulados com base nas premissas desta proposta,
      sujeitos à análise de crédito, à aprovação do comitê e às condições do contrato assinado.
    </p>
  </V2Canvas>
);
