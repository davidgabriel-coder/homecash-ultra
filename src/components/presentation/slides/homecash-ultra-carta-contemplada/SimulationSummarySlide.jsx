import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraEyebrow, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const SUMMARY = [
  ['Liquidez liberada', 'R$ 530.000'],
  ['Carta contemplada (Ademicon)', 'R$ 1.530.000'],
  ['Ágio médio (30% da carta)', 'R$ 459.000'],
  ['Prazo estimado da carta', '90 meses']
];

const RESULTS = [
  {
    label: 'Liquidez disponível para a entrada',
    rows: [
      { label: 'Liquidez liberada', value: 'R$ 530.000' },
      { label: 'Dívidas informadas', value: '− R$ 0' }
    ],
    total: 'R$ 530 mil'
  },
  {
    label: 'Carta contemplada',
    rows: ['Liberada em ~60 dias', 'Quita a recompra (com ITBI e cartório): − R$ 704,6 mil'],
    total: 'R$ 1,53 mi',
    note: 'Garantia: este imóvel + outro de R$ 1,2 mi · cobre 103% da carta'
  }
];

export const SimulationSummarySlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="06" label="Simulação" className="absolute left-[5.2%] top-[10.8%] text-[1.05cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.2%] w-[62%] text-[4.15cqw] leading-[1.06] tracking-[-0.045em]">
      Quanto o seu imóvel libera,<br />e <HomeCashUltraAccent>quanto fica com você.</HomeCashUltraAccent>
    </HomeCashUltraTitle>

    <div className="absolute left-[5.2%] right-[5.2%] top-[36.2%] grid grid-cols-4 gap-[1.2cqw] border-b border-[#1C2D7F]/20 pb-[1.2cqw]">
      {SUMMARY.map(([label, value]) => (
        <div key={label}>
          <HomeCashUltraEyebrow className="text-[0.72cqw]">{label}</HomeCashUltraEyebrow>
          <div className="mt-[0.25cqw] text-[1.35cqw] font-[700] leading-tight">{value}</div>
        </div>
      ))}
    </div>

    <div className="absolute bottom-[6.5%] left-[5.2%] right-[5.2%] grid h-[45%] grid-cols-[1fr_1fr_1.22fr] gap-[1.35cqw]">
      {RESULTS.map(({ label, rows, total, note }) => (
        <section key={label} className="flex flex-col rounded-[0.9cqw] border border-[#1C2D7F]/45 p-[1.55cqw]">
          <HomeCashUltraEyebrow className="text-[0.72cqw]">{label}</HomeCashUltraEyebrow>
          <div className="mt-[0.9cqw]">
            {rows.map((row) => (
              <p
                key={typeof row === 'string' ? row : row.label}
                className={`border-b border-[#1C2D7F]/20 py-[0.6cqw] text-[1.08cqw] leading-[1.25] ${typeof row === 'string' ? '' : 'flex justify-between gap-[0.8cqw]'}`}
              >
                {typeof row === 'string' ? row : <><span>{row.label}</span><strong className="whitespace-nowrap">{row.value}</strong></>}
              </p>
            ))}
          </div>
          <strong className="mt-auto text-[2.55cqw] font-[700] leading-none tracking-[-0.03em]">{total}</strong>
          {note ? <p className="mt-[1.5cqw] text-[0.75cqw] leading-[1.3] text-[#64709f]">{note}</p> : null}
        </section>
      ))}

      <section className="flex flex-col rounded-[0.9cqw] bg-[#1C2D7F] p-[1.55cqw] text-white">
        <HomeCashUltraEyebrow className="text-[0.72cqw] text-white/75">Dinheiro livre para você</HomeCashUltraEyebrow>
        <div className="mt-[0.9cqw]">
          <p className="border-b border-white/20 py-[0.6cqw] text-[1.08cqw]">R$ 71 mil no início</p>
          <p className="border-b border-white/20 py-[0.6cqw] text-[1.08cqw]">+ R$ 825,4 mil na liberação</p>
        </div>
        <strong className="mt-auto border-b border-white/20 pb-[1.05cqw] text-[2.65cqw] font-[700] leading-none tracking-[-0.03em]">R$ 896,4 mil</strong>
        <div className="grid grid-cols-2 gap-[1.2cqw] pt-[0.9cqw]">
          <div><strong className="text-[2.05cqw] leading-none text-[#EDB424]">84,6%</strong><p className="mt-[0.15cqw] text-[0.75cqw]">do valor do imóvel</p></div>
          <div><strong className="text-[2.05cqw] leading-none text-[#EDB424]">+41%</strong><p className="mt-[0.15cqw] text-[0.75cqw]">que o home equity</p></div>
        </div>
      </section>
    </div>
  </HomeCashUltraCanvas>
);
