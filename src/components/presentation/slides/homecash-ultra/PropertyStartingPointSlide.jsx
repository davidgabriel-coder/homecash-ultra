import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';
import { ArrowRight, Clock3, DollarSign, LockKeyhole } from 'lucide-react';

const NOTES = [
  ['O banco decide quanto você usa', 'O limite de crédito é definido sobre o imóvel, não sobre o que você precisa.'],
  ['E cobra pelo acesso', 'O limite de crédito é definido sobre o imóvel, não sobre o que você precisa.'],
  ['O restante segue parado', 'Cada mês sem uso é um mês em que esse patrimônio não financia nada.']
];

const NOTE_ICONS = [LockKeyhole, DollarSign, Clock3];

export const PropertyStartingPointSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="01" label="Ponto de partida" className="absolute left-[5.2%] top-[7%] text-[1.05cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[14%] w-[78%] text-[3.45cqw]">
      Um imóvel de R$ 1 milhão.<br />Quanto dele <HomeCashUltraAccent>dá para usar hoje?</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[31%] w-[58%] text-[1.2cqw] leading-[1.4]">Um exemplo simples, antes de falar de solução: o que o mercado costuma oferecer sobre um imóvel quitado.</p>
    <div className="absolute left-[5.2%] right-[5.2%] top-[43%]">
      <div className="mb-[0.55cqw] flex justify-between text-[0.85cqw] font-[700] uppercase tracking-[0.08em]"><span className="text-[14px] normal-case font-[300] tracking-normal">Valor do seu imóvel</span><span className="text-[1.3cqw] tracking-normal">R$ 1.000.000</span></div>
      <div className="flex h-[5.3cqw] overflow-hidden rounded-[0.8cqw]">
        <div className="flex w-[60%] flex-col justify-center bg-[#1C2D7F] px-[1.5cqw] text-white"><strong className="text-[1.45cqw] text-[#EDB424]">R$ 600 mil</strong><span className="text-[0.83cqw]">o que um home equity libera (60% do imóvel)</span></div>
        <div className="flex w-[40%] items-center bg-[repeating-linear-gradient(135deg,#e0e1e8_0_0.5cqw,#f4f4f5_0.5cqw_1cqw)] px-[1.4cqw]"><div><strong className="text-[1.3cqw]">R$ 400 mil</strong><p className="text-[0.82cqw]">continua parado, sem trabalhar por você</p></div></div>
      </div>
    </div>
    <div className="absolute bottom-[12.5%] left-[5.2%] right-[5.2%] grid h-[24.5%] grid-cols-[repeat(3,minmax(0,1fr))_1.22fr] gap-[0.7cqw]">
      {NOTES.map(([title, body], index) => {
        const Icon = NOTE_ICONS[index];

        return (
          <HomeCashUltraCard key={title} className="flex flex-col justify-start p-[1.45cqw]">
            <div className="mb-[0.9cqw] flex h-[2.6cqw] w-[2.6cqw] items-center justify-center rounded-[0.5cqw] bg-[#1C2D7F] text-white">
              <Icon className="h-[1.15cqw] w-[1.15cqw]" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h2 className="text-[1.2cqw] font-[700] leading-[1.2]">{title}</h2>
            <p className="mt-[0.7cqw] text-[1.02cqw] leading-[1.42]">{body}</p>
          </HomeCashUltraCard>
        );
      })}
      <div className="relative flex items-center rounded-[1.1cqw] bg-[#EDB424] px-[3.4cqw] py-[2.3cqw] text-[#1C2D7F]">
        <p className="text-[1.8cqw] font-[700] leading-[1.35]">E se o mesmo patrimônio pudesse liberar mais crédito?</p>
        <ArrowRight className="absolute right-[12%] top-[24%] h-[1.8cqw] w-[1.8cqw]" strokeWidth={1.5} aria-hidden="true" />
      </div>
    </div>
  </HomeCashUltraCanvas>
);
