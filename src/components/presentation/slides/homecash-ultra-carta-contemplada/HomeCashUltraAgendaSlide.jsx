import { HomeCashUltraCanvas, HomeCashUltraSectionLabel } from './homeCashUltraShared';

const AGENDA = [
  ['01', 'Seu patrimônio hoje', 'Quanto do seu imóvel você consegue usar, a ideia por trás do HomeCash Ultra, quem está com a gente e para quem ele faz sentido.'],
  ['02', 'Como funciona', 'Como o HomeCash e a carta contemplada se completam, do imóvel avaliado ao dinheiro na conta em cerca de 60 dias.'],
  ['03', 'Os seus números', 'A simulação com o seu imóvel, o que você pode fazer com o dinheiro, os valores mês a mês e a comparação com o mercado.'],
  ['04', 'Conforto e próximos passos', 'Quem já fez, o que acontece se algo sair do plano e como avançar a partir daqui.']
];

export const HomeCashUltraAgendaSlide = () => (
  <HomeCashUltraCanvas>
    <div className="absolute left-[5.3%] top-[31%] w-[36%]">
      <div className="text-[1cqw] font-medium text-[#1C2D7F]">Rooftop · HomeCash Ultra · Carta Contemplada</div>
      <h1 className="mt-[2.1cqw] text-[6.7cqw] font-[700] leading-[0.98] tracking-[-0.055em]">Agenda</h1>
      <p className="mt-[1.25cqw] max-w-[31cqw] text-[1.42cqw] leading-[1.45]">O que vamos conversar hoje: partimos do seu imóvel e chegamos ao dinheiro na sua conta, com os seus números.</p>
      <p className="mt-[2.7cqw] border-l-[0.28cqw] border-[#EDB424] py-[0.1cqw] pl-[1.15cqw] text-[1.22cqw] leading-[1.45]">Ao final, você sai com clareza para decidir se faz sentido para você. Sem compromisso.</p>
    </div>
    <ol className="absolute left-[48%] right-[5.1%] top-[18%] flex h-[64%] list-none flex-col justify-between border-t border-[#c4cbe1] p-0">
      {AGENDA.map(([number, title, body]) => (
        <li key={number} className="grid grid-cols-[4.1cqw_1fr] items-start gap-[1.2cqw] border-b border-[#c4cbe1] py-[1.5cqw]">
          <span className="pt-[0.05cqw] text-[2.65cqw] font-[700] leading-none text-[#EDB424]">{number}</span>
          <div><HomeCashUltraSectionLabel label={title} className="text-[1.55cqw] font-[700] leading-tight" /><p className="mt-[0.55cqw] text-[1.08cqw] leading-[1.42]">{body}</p></div>
        </li>
      ))}
    </ol>
  </HomeCashUltraCanvas>
);
