import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const BENEFITS = [
  ['2', 'Modelos, para perfis diferentes', 'Recompra \u00e0 vista ou financiada em at\u00e9 240 meses, sem exigir capital de uma vez.'],
  ['R$ 694 mil', 'A menos no custo total', 'Comparado ao home equity, sobre o mesmo im\u00f3vel.'],
  ['14,76%', 'CET ao ano', 'Contra 28,69% a.a. de um home equity tradicional.'],
  ['Zero', 'IOF na nossa opera\u00e7\u00e3o', 'Diferente do home equity, que paga IOF normalmente.']
];

export const HomeCashUltraBenefitsSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="13" label="O que o Ultra entrega" className="absolute left-[5.2%] top-[10.8%] text-[1.2cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.3%] w-[70%] text-[4.05cqw]">
      O que o Ultra entrega que as<br /><HomeCashUltraAccent>alternativas n&#227;o entregam.</HomeCashUltraAccent>
    </HomeCashUltraTitle>

    <div className="absolute left-[5.2%] right-[4.3%] top-[36.7%] flex h-[20%] items-center rounded-[1.2cqw] bg-[#1C2D7F] px-[3.4cqw] text-white">
      <strong className="mr-[3.2cqw] shrink-0 text-[6.3cqw] font-[700] leading-none text-[#EDB424]">+28%</strong>
      <div>
        <h2 className="text-[1.95cqw] font-[700] leading-[1.2]">Mais capital pelo mesmo im&#243;vel</h2>
        <p className="mt-[0.5cqw] text-[1.12cqw] leading-[1.4] text-white/90">R$ 815.385 na carta, contra R$ 636 mil de um home equity sobre o mesmo patrim&#244;nio.</p>
      </div>
    </div>

    <div className="absolute left-[5.2%] right-[4.3%] top-[62.5%] grid h-[17%] grid-cols-4">
      {BENEFITS.map(([metric, title, body], index) => (
        <div key={title} className={`px-[1.6cqw] first:pl-0 ${index > 0 ? 'border-l border-[#1C2D7F]/25' : ''}`}>
          <strong className="text-[2.35cqw] font-[700] leading-none tracking-[-0.025em]">{metric}</strong>
          <h3 className="mt-[0.65cqw] text-[1.08cqw] font-[700] leading-[1.2]">{title}</h3>
          <p className="mt-[0.35cqw] text-[0.91cqw] leading-[1.4]">{body}</p>
        </div>
      ))}
    </div>
  </HomeCashUltraCanvas>
);
