import { ArrowRight, CalendarDays, Check, House, WalletCards, Zap } from 'lucide-react';
import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const STEPS = [
  {
    icon: House,
    title: 'Imóvel avaliado',
    body: 'O HomeCash Ultra libera cerca de 50% do valor do imóvel em liquidez.',
    timing: <>1º passo<br />Mês zero</>,
    tag: '~50% do imóvel',
    color: 'navy'
  },
  {
    icon: Zap,
    title: 'Carta já contemplada',
    body: 'Parte da liquidez paga a entrada (ágio médio de 30%) de uma carta da Ademicon. O resto já fica com você.',
    timing: <>2º passo<br />Mês zero</>,
    tag: 'ágio médio de 30%',
    color: 'blue'
  },
  {
    icon: CalendarDays,
    title: 'Carta liberada',
    body: 'Sem esperar assembleia, sem sorteio e sem disputa de lance.',
    timing: <>3º passo<br />Mês 2 · cerca de 60 dias</>,
    tag: '~60 dias',
    color: 'blue'
  },
  {
    icon: House,
    title: 'Recompra do imóvel',
    body: 'A própria carta quita a recompra, com ITBI e cartório. O imóvel entra na garantia da carta, junto com outros se for preciso.',
    timing: <>4º passo<br />Mês 2</>,
    tag: 'imóvel de volta',
    color: 'gold'
  },
  {
    icon: Check,
    title: 'Dinheiro na conta',
    body: 'O restante da carta é seu, para usar como quiser. Depois, só as parcelas da carta.',
    timing: <>5º passo<br />Mês 2</>,
    tag: '84,6% do imóvel',
    color: 'navy'
  }
];

const STEP_LEFTS = ['5.2%', '24.1%', '43%', '61.9%', '80.8%'];
const ARROW_LEFTS = ['18.3%', '37.2%', '56.1%', '75%'];

export const OperationFlowSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="05" label="Como funciona" className="absolute left-[5.2%] top-[10.8%] text-[1.05cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.2%] w-[68%] text-[4.15cqw] leading-[1.06] tracking-[-0.045em]">
      Do imóvel ao dinheiro na conta,<br />em <HomeCashUltraAccent>cerca de 60 dias.</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[34.8%] w-[60%] text-[1.15cqw] leading-[1.4]">Um caminho único, em cinco passos. Sem sorteio, sem disputa de lance e sem escolhas no meio do caminho.</p>

    {ARROW_LEFTS.map((left) => (
      <ArrowRight key={left} className="absolute top-[52.4%] h-[2cqw] w-[3.4cqw] text-[#aeb7d3]" style={{ left }} strokeWidth={1.3} aria-hidden="true" />
    ))}

    {STEPS.map(({ icon: Icon, title, body, timing, tag, color }, index) => (
      <section key={title} className="absolute top-[47.6%] flex w-[14%] flex-col items-center text-center" style={{ left: STEP_LEFTS[index] }}>
        <div className={`flex h-[6.7cqw] w-[6.7cqw] items-center justify-center rounded-[1.05cqw] ${color === 'gold' ? 'bg-[#EDB424] text-[#1C2D7F]' : color === 'blue' ? 'bg-[#2864ec] text-white' : 'bg-[#1C2D7F] text-white'}`}>
          <Icon className="h-[2.8cqw] w-[2.8cqw]" strokeWidth={2} aria-hidden="true" />
        </div>
        <span className="mt-[1.2cqw] min-h-[3.25cqw] rounded-[0.6cqw] bg-[#e4e6ef] px-[0.75cqw] py-[0.35cqw] text-[0.82cqw] font-[700] leading-[1.15] text-[#1C2D7F]">{timing}</span>
        <h2 className="mt-[1.1cqw] text-[1.18cqw] font-[700] leading-[1.2]">{title}</h2>
        <p className="mt-[0.55cqw] text-[0.88cqw] leading-[1.35]">{body}</p>
        <span className="absolute top-[23cqw] rounded-[0.45cqw] border border-[#9ba5c4] bg-white/70 px-[0.85cqw] py-[0.32cqw] text-[0.8cqw] font-[700] leading-none whitespace-nowrap">{tag}</span>
      </section>
    ))}
  </HomeCashUltraCanvas>
);
