import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const PARTNERS = [
  ['Ademicon', 'Fornece a carta contemplada e administra o consórcio.'],
  ['Rooftop', 'Estrutura e acompanha a operação do início ao fim.']
];

const CASE_STEPS = [
  ['A situação', 'Tinha um imóvel quitado de R$ 1,2 milhão e a chance de comprar duas clínicas concorrentes, com 90 dias para fechar.'],
  ['O que fez', 'HomeCash Ultra com uma carta contemplada da Ademicon de R$ 1,73 milhão. Dinheiro na conta em 58 dias.'],
  ['O resultado', 'Cerca de R$ 1 milhão livre, aquisição fechada dentro do prazo, sem vender participação e sem depender de banco.']
];

export const WhoWithYouSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="10" label="Quem está com você" className="absolute left-[5.2%] top-[10.5%] text-[1.05cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17%] w-[75%] text-[4.15cqw] leading-[1.08] tracking-[-0.045em]">
      Quem já fez, e quem <HomeCashUltraAccent>caminha junto</HomeCashUltraAccent><br />em cada etapa.
    </HomeCashUltraTitle>

    <HomeCashUltraCard className="absolute bottom-[12%] left-[5.2%] top-[34.7%] w-[50.5%] rounded-[1.2cqw] p-[2cqw]">
      <div className="flex items-start justify-between gap-[1cqw]">
        <div className="flex items-center gap-[1.15cqw]">
          <div aria-hidden="true" className="h-[3.6cqw] w-[3.6cqw] shrink-0 rounded-full bg-[linear-gradient(135deg,#1C2D7F,#5968ba)]" />
          <div>
            <h2 className="text-[1.35cqw] font-[700] leading-tight">Ricardo M., 48 anos</h2>
            <p className="mt-[0.2cqw] text-[0.92cqw] text-[#6d779e]">Sócio de uma rede de clínicas · Campinas (SP)</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-[#EDB424] px-[0.9cqw] py-[0.35cqw] text-[0.78cqw] font-[700] uppercase tracking-[0.06em]">Caso ilustrativo</span>
      </div>

      <div className="mt-[1.45cqw] grid grid-cols-3 gap-[1.35cqw]">
        {CASE_STEPS.map(([title, body]) => (
          <div key={title} className="border-l-[0.24cqw] border-[#EDB424] pl-[0.9cqw]">
            <div className="text-[0.82cqw] font-[700] uppercase tracking-[0.08em]">{title}</div>
            <p className="mt-[0.35cqw] text-[1.05cqw] leading-[1.48]">{body}</p>
          </div>
        ))}
      </div>

      <blockquote className="absolute bottom-[2cqw] left-[2cqw] right-[2cqw] text-[1.18cqw] italic leading-[1.4]">
        “Eu tinha o patrimônio, faltava tempo. Em menos de dois meses o dinheiro estava na conta e o negócio, fechado.”
      </blockquote>
    </HomeCashUltraCard>

    <div className="absolute right-[5.2%] top-[48.5%] grid h-[25.5%] w-[37.3%] grid-rows-2 gap-[2.2cqw]">
      {PARTNERS.map(([name, body]) => (
        <HomeCashUltraCard key={name} className="grid grid-cols-[8.7cqw_1fr] items-start gap-[1cqw] rounded-[0.9cqw] px-[1.65cqw] py-[1.75cqw]">
          <strong className="text-[1.35cqw] leading-tight">{name}</strong>
          <p className="text-[1.12cqw] leading-[1.45]">{body}</p>
        </HomeCashUltraCard>
      ))}
    </div>
  </HomeCashUltraCanvas>
);
