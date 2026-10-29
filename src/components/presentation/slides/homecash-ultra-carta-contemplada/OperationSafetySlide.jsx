import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const FAQ = [
  ['E se não houver uma carta do tamanho certo?', 'Sempre haverá. A Ademicon tem o maior estoque de cartas contempladas do Brasil, em todas as faixas de valor, e a carta é confirmada antes de você assinar.'],
  ['Qual imóvel fica em garantia?', 'O do HomeCash Ultra entra na garantia, somado a outros imóveis se for preciso: terreno, comercial, qualquer um.'],
  ['Posso quitar antes dos 90 meses?', 'Sim, quando quiser. Como o consórcio não tem juros (o custo está na taxa de administração), não há desconto de amortização: você quita exatamente o que falta.'],
  ['E se o valor do imóvel cair?', 'Nada muda. Carta, ágio e recompra são definidos no início, e o mercado imobiliário não altera nenhum desses números.']
];

const GUARANTEES = [
  'Carta, ágio e recompra definidos antes de fechar',
  'Garantia real, do início ao fim',
  'Sem taxas escondidas: todo custo na mesa desde o primeiro dia',
  'Acompanhamento da Rooftop em todas as etapas'
];

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
    <HomeCashUltraSectionLabel number="11" label="Conforto" className="absolute left-[5.2%] top-[10.8%] text-[1.2cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.2%] w-[47%] text-[4.05cqw]">
      E se algo <HomeCashUltraAccent>sair do plano?</HomeCashUltraAccent>
    </HomeCashUltraTitle>
    <p className="absolute right-[4.3%] top-[17.5%] w-[42.2%] text-[1.36cqw] leading-[1.48]">
      Mexer no patrimônio não é uma decisão leve. Estas são as respostas para as perguntas que costumam vir, antes que você precise fazê-las.
    </p>

    <div className="absolute left-[5.2%] right-[5.2%] top-[29.3%] grid h-[30.3%] grid-cols-3 gap-[1.3cqw]">
      {FAQ.slice(0, 3).map(([question, answer], index) => (
        <QuestionCard key={question} question={question} answer={answer} number={index + 1} />
      ))}
    </div>

    <div className="absolute left-[5.2%] right-[5.2%] top-[61.7%] grid h-[26.9%] grid-cols-[0.5fr_1fr] gap-[1.3cqw]">
      <QuestionCard question={FAQ[3][0]} answer={FAQ[3][1]} number="4" />
      <div className="rounded-[1.1cqw] bg-[#1C2D7F] p-[2cqw] text-white">
        <h2 className="text-[1.38cqw] font-[700] text-[#EDB424]">O que não muda</h2>
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
