import { HomeCashUltraCanvas, HomeCashUltraEyebrow, HomeCashUltraSectionLabel } from './homeCashUltraShared';

const AGENDA = [
  ['01', 'Seu patrimônio hoje', 'Quanto do seu imóvel você consegue usar, a ideia por trás do HomeCash Ultra, quem está por trás dele e para quem ele faz sentido.'],
  ['02', 'Como funciona', 'O caminho completo da operação, do imóvel avaliado à carta contemplada, e as duas formas de fazer a recompra.'],
  ['03', 'Os seus números', 'A simulação com o seu imóvel, o que você pode fazer com a carta, os valores mês a mês e a comparação com o mercado.'],
  ['04', 'Conforto e próximos passos', 'Quem já fez, o que acontece se algo sair do plano e como avançar a partir daqui.']
];

export const HomeCashUltraAgendaSlide = () => (
  <HomeCashUltraCanvas>
    <div className="absolute left-[5.2%] top-[20%] w-[34%]">
      <div className="text-[1cqw] text-[#59669a]">Rooftop · HomeCash Ultra</div>
      <h1 className="mt-[1cqw] text-[5.8cqw] font-[700] leading-none tracking-[-0.05em]">Agenda</h1>
      <div className="my-[1.25cqw] h-[0.2cqw] w-[7cqw] bg-[#EDB424]" />
      <p className="text-[1.28cqw] leading-[1.45]"><strong>O que vamos conversar hoje:</strong> partimos do seu imóvel e chegamos a uma simulação com os seus números.</p>
      <p className="mt-[1.2cqw] text-[1.28cqw] leading-[1.45]">Uma visão clara de tudo que vamos apresentar hoje sobre o <strong>HomeCash Ultra.</strong></p>
    </div>
    <ol className="absolute left-[48%] right-[5.2%] top-[11%] flex h-[78%] list-none flex-col justify-between p-0">
      {AGENDA.map(([number, title, body]) => (
        <li key={number} className="grid grid-cols-[5.2cqw_1fr] items-center gap-[1.2cqw]">
          <span className="text-[3.45cqw] font-[700] leading-none text-[#EDB424]">{number}</span>
          <div><HomeCashUltraSectionLabel label={title} className="text-[1.42cqw] font-[700]" /><p className="mt-[0.45cqw] text-[1.12cqw] leading-[1.4]">{body}</p></div>
        </li>
      ))}
    </ol>
  </HomeCashUltraCanvas>
);
