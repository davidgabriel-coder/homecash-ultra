import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraEyebrow, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const PERIODS = [
  {
    period: 'Mês 0',
    title: 'Liquidez',
    rows: [['Liquidez HomeCash', '+ R$ 530.000'], ['Ágio da carta (30%)', '− R$ 459.000']],
    total: ['Fica com você', 'R$ 71.000'],
    tone: 'gold'
  },
  {
    period: 'Meses 1 e 2',
    title: 'Até a carta sair',
    rows: [['Parcela da carta', 'R$ 20.060'], ['Aluguel HomeCash', 'R$ 3.710']],
    total: ['Por mês', 'R$ 23.770']
  },
  {
    period: 'Mês 2',
    title: 'Carta liberada',
    rows: [['Valor da carta', '+ R$ 1.530.000'], ['Recompra + ITBI + cartório', '− R$ 704.600']],
    total: ['Fica com você', 'R$ 825.400'],
    tone: 'gold'
  },
  {
    period: 'Meses 3 a 90',
    title: 'Só a carta',
    rows: [['Parcela da carta', 'R$ 20.060'], ['Inclui taxa de administração', '18%']],
    total: ['Por mês', 'R$ 20.060'],
    tone: 'dark'
  }
];

export const MonthlyValuesSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="08" label="Valores" className="absolute left-[5.2%] top-[12.8%] text-[1.05cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[20.2%] text-[4.1cqw] leading-[1.08] tracking-[-0.04em]">
      Valores da operação, <HomeCashUltraAccent>mês a mês.</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[31.2%] text-[1.08cqw]">Tudo o que entra e tudo o que sai, do início à última parcela.</p>

    <div className="absolute left-[5.2%] right-[5.2%] top-[39.2%] grid h-[36.2%] grid-cols-4 gap-[1.2cqw]">
      {PERIODS.map((item) => (
        <section
          key={item.period}
          className={`flex flex-col rounded-[1cqw] border p-[1.35cqw] ${
            item.tone === 'dark'
              ? 'border-[#1C2D7F] bg-[#1C2D7F] text-white'
              : item.tone === 'gold'
                ? 'border-[#EDB424] bg-[#f5ead0]'
                : 'border-[#1C2D7F]/55 bg-[#f1f1f3]'
          }`}
        >
          <HomeCashUltraEyebrow className={`text-[0.68cqw] ${item.tone === 'dark' ? 'text-white/70' : ''}`}>
            {item.period}
          </HomeCashUltraEyebrow>
          <h2 className="mt-[0.35cqw] border-b border-current/15 pb-[0.5cqw] text-[1.42cqw] font-[700] leading-tight">{item.title}</h2>
          <div className="mt-[0.35cqw]">
            {item.rows.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-[0.35cqw] border-b border-current/10 py-[0.55cqw] text-[0.88cqw] leading-[1.2]">
                <span>{label}</span><strong className="shrink-0 whitespace-nowrap">{value}</strong>
              </div>
            ))}
          </div>
          <div className="mt-auto border-t-2 border-current/50 pt-[0.65cqw]">
            <div className="flex justify-between gap-[0.3cqw] text-[0.92cqw] leading-tight"><strong>{item.total[0]}</strong><strong className="whitespace-nowrap">{item.total[1]}</strong></div>
          </div>
        </section>
      ))}
    </div>

    <div className="absolute bottom-[10.2%] right-[5.2%] w-[28%] rounded-[0.9cqw] bg-[#EDB424] px-[1.5cqw] py-[0.9cqw] text-[#1C2D7F]">
      <HomeCashUltraEyebrow className="text-[0.75cqw] text-[#1C2D7F]">Custo total (soma de tudo o que é pago)</HomeCashUltraEyebrow>
      <strong className="mt-[0.2cqw] block text-[1.95cqw] leading-none">R$ 2.976.420</strong>
    </div>
  </HomeCashUltraCanvas>
);
