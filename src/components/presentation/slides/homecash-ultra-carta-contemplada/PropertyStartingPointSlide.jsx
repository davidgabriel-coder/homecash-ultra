import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';
import { ArrowRight, Clock3, DollarSign, LockKeyhole } from 'lucide-react';

const NOTES = [
  ['O banco decide quanto você usa', 'O limite é definido sobre o imóvel, não sobre o que o seu negócio precisa.'],
  ['E cobra caro por anos', 'São 240 parcelas, com juros, IOF e seguro embutidos no valor de cada uma.'],
  ['Oportunidade não espera', 'Para quem empreende, o tempo até o dinheiro chegar também tem custo.']
];

const NOTE_ICONS = [LockKeyhole, DollarSign, Clock3];

export const PropertyStartingPointSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="01" label="Ponto de partida" className="absolute left-[5.2%] top-[8%] text-[1.05cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[15%] w-[78%] text-[3.9cqw] leading-[1.08]">
      Um imóvel de R$ 1 milhão.<br />Quanto dele <HomeCashUltraAccent>dá para usar hoje?</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[35%] w-[57%] text-[1.22cqw] leading-[1.42]">Um exemplo simples, antes de falar de solução: o que o mercado costuma oferecer sobre um imóvel quitado.</p>

    <div className="absolute left-[5.2%] right-[5.2%] top-[46%]">
      <div className="mb-[0.55cqw] flex items-end justify-between text-[0.82cqw] font-[700] uppercase tracking-[0.08em]">
        <span>Exemplo · Imóvel quitado</span>
        <span className="text-[1.3cqw] tracking-normal">R$ 1.000.000</span>
      </div>
      <div className="flex h-[5.2cqw] overflow-hidden rounded-[0.8cqw]">
        <div className="flex w-[60%] flex-col justify-center bg-[#1C2D7F] px-[1.5cqw] text-white">
          <strong className="text-[1.45cqw] leading-tight">R$ 600 mil</strong>
          <span className="text-[0.82cqw]">o que um home equity libera (60% do imóvel)</span>
        </div>
        <div className="flex w-[40%] items-center bg-[repeating-linear-gradient(135deg,#dfe1e9_0_0.5cqw,#f1f1f3_0.5cqw_1cqw)] px-[1.4cqw]">
          <div><strong className="text-[1.35cqw] leading-tight">R$ 400 mil</strong><p className="text-[0.82cqw] leading-tight">continua parado, sem trabalhar pelo dono</p></div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-[9.5%] left-[5.2%] right-[5.2%] grid h-[28%] grid-cols-[repeat(3,minmax(0,1fr))_1.12fr] gap-[1.2cqw]">
      {NOTES.map(([title, body], index) => {
        const Icon = NOTE_ICONS[index];
        return (
          <HomeCashUltraCard key={title} className="flex flex-col justify-start rounded-[0.9cqw] p-[1.35cqw]">
            <div className="mb-[0.85cqw] flex h-[2.55cqw] w-[2.55cqw] items-center justify-center rounded-[0.48cqw] bg-[#1C2D7F] text-white">
              <Icon className="h-[1.15cqw] w-[1.15cqw]" strokeWidth={1.7} aria-hidden="true" />
            </div>
            <h2 className="text-[1.18cqw] font-[700] leading-[1.2]">{title}</h2>
            <p className="mt-[0.55cqw] text-[0.98cqw] leading-[1.4]">{body}</p>
          </HomeCashUltraCard>
        );
      })}
      <div className="relative flex items-start rounded-[0.9cqw] bg-[#EDB424] px-[1.55cqw] py-[1.55cqw] text-[#1C2D7F]">
        <p className="text-[1.32cqw] font-[700] leading-[1.35]">E se esse mesmo imóvel liberasse mais de 80% do valor, em cerca de 60 dias?</p>
        <ArrowRight className="absolute bottom-[1.25cqw] right-[1.45cqw] h-[1.35cqw] w-[1.35cqw]" strokeWidth={1.7} aria-hidden="true" />
      </div>
    </div>
  </HomeCashUltraCanvas>
);
