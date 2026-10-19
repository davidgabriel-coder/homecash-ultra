import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const FAQ = [
  ['E se a contempla\u00e7\u00e3o demorar?', 'O lance \u00e9 dimensionado com o hist\u00f3rico real de mais de 52 mil assembleias da Ademicon. At\u00e9 a contempla\u00e7\u00e3o, o custo segue o mesmo: s\u00f3 o aluguel e a parcela do cons\u00f3rcio.'],
  ['Posso quitar antes?', 'Sim, quando quiser. Como o cons\u00f3rcio n\u00e3o tem juros (o custo est\u00e1 na taxa de administra\u00e7\u00e3o), voc\u00ea quita exatamente o saldo que falta.'],
  ['E se o valor do im\u00f3vel cair?', 'O valor de recompra \u00e9 definido no in\u00edcio e n\u00e3o muda com as oscila\u00e7\u00f5es do mercado imobili\u00e1rio.'],
  ['E se eu n\u00e3o conseguir recomprar?', 'Voc\u00ea pode vender o im\u00f3vel a um terceiro e ficar com a diferen\u00e7a sobre o valor de recompra. Toda opera\u00e7\u00e3o de HomeCash at\u00e9 hoje teve um desses dois desfechos.']
];
const GUARANTEES = ['Valor de recompra definido no in\u00edcio', 'Lance baseado em dados reais da Ademicon', 'Sem taxas escondidas: todo custo na mesa desde o primeiro dia', 'Acompanhamento da Rooftop em todas as etapas'];

const QuestionCard = ({ question, answer, number }) => (
  <HomeCashUltraCard className="h-full p-[1.65cqw]">
    <h2 className="flex items-start gap-[0.8cqw] text-[1.28cqw] font-[700] leading-[1.2]">
      <span className="flex h-[1.7cqw] min-w-[1.7cqw] items-center justify-center rounded-[0.35cqw] bg-[#1C2D7F] px-[0.35cqw] text-[0.92cqw] leading-none text-white">{number}</span>
      <span>{question}</span>
    </h2>
    <p className="mt-[0.85cqw] text-[1.16cqw] leading-[1.48]">{answer}</p>
  </HomeCashUltraCard>
);

export const OperationSafetySlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="12" label="Seguran\u00e7a" className="absolute left-[5.2%] top-[10.8%] text-[1.2cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.2%] w-[47%] text-[4.05cqw]">
      E se algo <HomeCashUltraAccent>sair do plano?</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute right-[4.3%] top-[15.2%] w-[42.2%] text-[1.36cqw] leading-[1.48]">
      Mexer no patrim&#244;nio da fam&#237;lia n&#227;o &#233; uma decis&#227;o leve. Estas s&#227;o as respostas para as perguntas que costumam vir, antes que voc&#234; precise faz&#234;-las.
    </p>

    <div className="absolute left-[5.2%] right-[4.3%] top-[29.1%] grid h-[27%] grid-cols-3 gap-[1.3cqw]">
      {FAQ.slice(0, 3).map(([question, answer], index) => (
        <QuestionCard key={question} question={question} answer={answer} number={index + 1} />
      ))}
    </div>

    <div className="absolute left-[5.2%] right-[4.3%] top-[58.3%] grid h-[26.8%] grid-cols-[0.5fr_1fr] gap-[1.3cqw]">
      <QuestionCard question={FAQ[3][0]} answer={FAQ[3][1]} number="4" />
      <div className="rounded-[1.1cqw] bg-[#1C2D7F] p-[2cqw] text-white">
        <h2 className="text-[1.38cqw] font-[700] text-[#EDB424]">O que n&#227;o muda</h2>
        <div className="mt-[1.05cqw] grid grid-cols-2 gap-x-[2cqw] gap-y-[0.95cqw]">
          {GUARANTEES.map((item) => (
            <div key={item} className="flex items-start gap-[0.65cqw] text-[1.12cqw] leading-[1.4]">
              <span aria-hidden="true" className="mt-[0.42em] h-[0.58cqw] w-[0.58cqw] shrink-0 rounded-full bg-[#EDB424]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </HomeCashUltraCanvas>
);
