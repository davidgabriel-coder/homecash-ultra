import {
  ArrowLeftRight,
  CalendarDays,
  Check,
  Coins,
  DollarSign,
  House,
  WalletCards
} from 'lucide-react';
import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const STEPS = [
  {
    icon: House,
    title: 'Imóvel avaliado',
    body: 'O HomeCash Ultra libera 50% do valor do imóvel: essa é a base da liquidez.',
    left: '5.2%'
  },
  {
    icon: ArrowLeftRight,
    title: 'Liquidez vira lance',
    body: 'Esse valor inteiro entra na assembleia como lance do consórcio. Não existe sobejo: nada sobra para devolver depois.',
    left: '18.6%',
    blue: true
  },
  {
    icon: CalendarDays,
    title: 'Contemplação',
    body: 'O cliente tem em mãos uma carta bem maior que a liquidez original: o efeito do lance.',
    left: '33.8%',
    blue: true
  },
  {
    icon: DollarSign,
    title: 'Recomprar',
    body: 'O cliente escolhe.',
    left: '49.1%',
    highlighted: true
  }
];

const FLOW_ARROW_SVG = (
  <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <marker id="flow-arrow-muted" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M1 1 7 4.5 1 8" fill="none" stroke="#aeb7d3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </marker>
      <marker id="flow-arrow-navy" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M1 1 7 4.5 1 8" fill="none" stroke="#1C2D7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </marker>
    </defs>
    <g fill="none" stroke="#aeb7d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
      <path d="M113 595 H178" stroke="#1C2D7F" markerEnd="url(#flow-arrow-navy)" />
      <path d="M246 595 H330" markerEnd="url(#flow-arrow-muted)" />
      <path d="M398 595 H483" markerEnd="url(#flow-arrow-muted)" />
      <path d="M543 595 H602 V440 H653" markerEnd="url(#flow-arrow-muted)" />
      <path d="M602 595 V740 H653" markerEnd="url(#flow-arrow-muted)" />
      <path d="M712 440 H785 V595" />
      <path d="M712 740 H785 V595" />
      <path d="M785 595 H822" markerEnd="url(#flow-arrow-muted)" />
    </g>
  </svg>
);

export const OperationFlowSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="05" label="Como funciona" className="absolute left-[5.2%] top-[10.8%] text-[1.2cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[15.2%] w-[70%] text-[5.15cqw] leading-[1.05] tracking-[-0.045em]">
      Um fluxo só, até o ponto<br />onde <HomeCashUltraAccent>você escolhe.</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[34.5%] text-[1.15cqw] leading-[1.4]">
      A única bifurcação real acontece na hora da recompra, antes disso, o caminho é único.
    </p>

    <div className="absolute inset-0">{FLOW_ARROW_SVG}</div>

    {STEPS.map(({ icon: Icon, title, body, left, highlighted, blue }) => (
      <section key={title} className="absolute top-[54.8%] w-[9.2%]" style={{ left }}>
        <div className={`mb-[0.65cqw] flex h-[5.2cqw] w-[5.2cqw] items-center justify-center rounded-[1.05cqw] ${highlighted ? 'bg-[#EDB424] text-[#1C2D7F]' : blue ? 'bg-[#235CE8] text-white' : 'bg-[#1C2D7F] text-white'}`}>
          <Icon className="h-[2.55cqw] w-[2.55cqw]" strokeWidth={1.8} aria-hidden="true" />
        </div>
        <h2 className="text-[1cqw] font-[700] leading-[1.2]">{title}</h2>
        <p className="mt-[0.3cqw] text-[0.85cqw] leading-[1.24]">{body}</p>
      </section>
    ))}

    <section className="absolute left-[65.8%] top-[39.4%] w-[12%]">
      <div className="flex h-[5.2cqw] w-[5.2cqw] items-center justify-center rounded-[1.05cqw] bg-[#1C2D7F] text-white">
        <Coins className="h-[2.55cqw] w-[2.55cqw]" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h2 className="mt-[0.55cqw] text-[1cqw] font-[700] leading-[1.2]">Modelo 1</h2>
      <p className="mt-[0.3cqw] text-[0.85cqw] leading-[1.24]">À vista, pagamento único no mês 12</p>
    </section>

    <section className="absolute left-[65.8%] top-[69.2%] w-[12%]">
      <div className="flex h-[5.2cqw] w-[5.2cqw] items-center justify-center rounded-[1.05cqw] bg-[#235CE8] text-white">
        <WalletCards className="h-[2.55cqw] w-[2.55cqw]" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h2 className="mt-[0.55cqw] text-[1cqw] font-[700] leading-[1.2]">Modelo 2</h2>
      <p className="mt-[0.3cqw] text-[0.85cqw] leading-[1.24]">Financiado em até 240 meses</p>
    </section>

    <section className="absolute left-[82.6%] top-[54.8%] w-[12%]">
      <div className="flex h-[5.2cqw] w-[5.2cqw] items-center justify-center rounded-[1.05cqw] bg-[#EDB424] text-[#1C2D7F]">
        <Check className="h-[2.55cqw] w-[2.55cqw]" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h2 className="mt-[0.65cqw] text-[1cqw] font-[700] leading-[1.2]">Operação encerrada</h2>
      <p className="mt-[0.3cqw] text-[0.85cqw] leading-[1.24]">Consórcio e, se houver, financiamento seguem seu prazo próprio até a quitação total.</p>
    </section>
  </HomeCashUltraCanvas>
);
