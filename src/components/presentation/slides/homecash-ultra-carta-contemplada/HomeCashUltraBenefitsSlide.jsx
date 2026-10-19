import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const BENEFITS = [
  ['~60 dias', 'Até o dinheiro na conta', 'Carta já contemplada: sem sorteio e sem disputa de lance.'],
  ['R$ 149 mil', 'A menos no custo total', 'Comparado ao home equity, e quitado 12 anos antes.'],
  ['Flexível', 'Garantia', 'Seu imóvel e outros, seus ou de terceiros: terreno, comercial ou residencial.'],
  ['90', 'Parcelas', 'Operação quitada em 7,5 anos, e não em 20.']
];

export const HomeCashUltraBenefitsSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="12" label="O que o Ultra entrega" className="absolute left-[5.2%] top-[10.8%] text-[1.2cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.3%] w-[70%] text-[4.05cqw]">
      O que o Ultra entrega que as<br /><HomeCashUltraAccent>alternativas não entregam.</HomeCashUltraAccent>
    </HomeCashUltraTitle>

    <div className="absolute left-[5.2%] right-[4.3%] top-[35.2%] flex h-[20%] items-center rounded-[1.2cqw] bg-[#1C2D7F] px-[3.4cqw] text-white">
      <strong className="mr-[3.2cqw] shrink-0 text-[6.3cqw] font-[700] leading-none text-[#EDB424]">+41%</strong>
      <div>
        <h2 className="text-[1.95cqw] font-[700] leading-[1.2]">Mais dinheiro pelo mesmo imóvel</h2>
        <p className="mt-[0.5cqw] text-[1.12cqw] leading-[1.4] text-white/90">R$ 896,4 mil livres, contra R$ 636 mil de um home equity sobre o mesmo patrimônio.</p>
      </div>
    </div>

    <div className="absolute left-[5.2%] right-[4.3%] top-[60.2%] grid h-[18%] grid-cols-4">
      {BENEFITS.map(([metric, title, body], index) => (
        <div key={title} className={`px-[1.6cqw] first:pl-0 ${index > 0 ? 'border-l border-[#1C2D7F]/25' : ''}`}>
          <strong className="text-[2.55cqw] font-[700] leading-none tracking-[-0.025em]">{metric}</strong>
          <h3 className="mt-[0.65cqw] text-[1.08cqw] font-[700] leading-[1.2]">{title}</h3>
          <p className="mt-[0.35cqw] text-[0.91cqw] leading-[1.4]">{body}</p>
        </div>
      ))}
    </div>
  </HomeCashUltraCanvas>
);
