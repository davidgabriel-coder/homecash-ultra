import { ChartNoAxesColumnIncreasing, Check, DollarSign, House } from 'lucide-react';
import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const USES = ['Expandir o neg\u00f3cio', 'Refor\u00e7ar o capital de giro', 'Trocar d\u00edvida cara', 'Investir em novos ativos'];
const USE_ICONS = [ChartNoAxesColumnIncreasing, DollarSign, Check, House];

export const AfterContemplationSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="07" label="Depois da liberação" className="absolute left-[5.2%] top-[10.8%] text-[1.2cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.4%] text-[4.1cqw]">
      Dinheiro na conta.<br /><HomeCashUltraAccent>O que voc&#234; faz com ele?</HomeCashUltraAccent>
    </HomeCashUltraTitle>

    <HomeCashUltraCard dark className="absolute bottom-[10.4%] left-[5.2%] top-[36.8%] flex w-[33%] flex-col rounded-[1.3cqw] p-[2cqw]">
      <div className="text-[0.84cqw] font-[700] uppercase tracking-[0.08em] text-white/65">Seu dinheiro livre</div>
      <strong className="mt-[0.55cqw] text-[2.55cqw] leading-none">R$ 896,4 mil</strong>
      <div className="my-[1.1cqw] h-[0.22cqw] w-[4.1cqw] bg-[#EDB424]" />
      <p className="text-[1cqw] leading-[1.45] text-white/90">Capital livre, conquistado com o mesmo im&#243;vel que estava parado. Direto na sua conta, sem burocracia de destina&#231;&#227;o.</p>
      <small className="mt-auto text-[0.78cqw] text-white/65">Caso de refer&#234;ncia &#183; im&#243;vel de R$ 1,06 milh&#227;o</small>
    </HomeCashUltraCard>

    <div className="absolute right-[4.3%] top-[36.8%] grid h-[36.1%] w-[55.5%] grid-cols-2 grid-rows-2 gap-[1.2cqw]">
      {USES.map((use, index) => {
        const Icon = USE_ICONS[index];
        return (
          <HomeCashUltraCard key={use} className="flex flex-col items-start justify-center gap-[1.45cqw] rounded-[1.2cqw] px-[1.75cqw] py-[1.5cqw]">
            <span className="flex h-[3.2cqw] w-[3.2cqw] shrink-0 items-center justify-center rounded-[0.58cqw] bg-[#1C2D7F] text-white">
              <Icon size="1.45cqw" strokeWidth={2} />
            </span>
            <strong className="text-[1.8cqw] leading-[1.16]">{use}</strong>
          </HomeCashUltraCard>
        );
      })}
    </div>

    <div className="absolute bottom-[10.4%] right-[4.3%] flex h-[14.5%] w-[55.5%] items-center justify-between rounded-[1.2cqw] bg-[#EDB424] px-[2cqw] text-[#1C2D7F]">
      <div className="pr-[1.3cqw]">
        <HomeCashUltraSectionLabel label="Ou simplesmente" className="mb-[0.35cqw] text-[0.8cqw] font-bold uppercase tracking-[0.1em]" />
        <strong className="text-[1.75cqw] leading-[1.15]">O que fizer sentido para voc&#234;.</strong>
      </div>
      <p className="w-[35%] shrink-0 border-l border-[#1C2D7F]/45 pl-[1.7cqw] text-[1.08cqw] leading-[1.5]">O capital &#233; seu, e o pr&#243;ximo movimento tamb&#233;m. Sem destina&#231;&#227;o obrigat&#243;ria.</p>
    </div>
  </HomeCashUltraCanvas>
);
