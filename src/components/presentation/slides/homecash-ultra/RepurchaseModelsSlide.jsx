import { ShieldCheck } from 'lucide-react';
import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const MODELS = [
  { title: 'Modelo 1 · Recompra à vista', color: 'bg-[#1C2D7F] text-white', fields: [['Para quem é','Quem tem um evento de liquidez previsto, como a venda de um ativo ou um recebível.'],['Como funciona','Pagamento único da recompra no mês 12. Depois disso, só o consórcio segue até o fim.'],['O que você ganha','Menor custo total e operação encerrada mais cedo.'],['Ponto de atenção','Exige um alto volume de capital disponível no mês 12, para a recompra à vista.']] },
  { title: 'Modelo 2 · Financiamento + Consórcio', color: 'bg-[#EDB424] text-[#1C2D7F]', fields: [['Para quem é','Quem prefere previsibilidade mensal e não quer imobilizar caixa.'],['Como funciona','A recompra é financiada pela OXY em até 240 meses, junto com a parcela do consórcio.'],['O que você ganha','Mantém o caixa livre e dilui o compromisso no tempo.'],['Ponto de atenção','Custo total maior, pelo prazo mais longo.']] }
];

export const RepurchaseModelsSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="06" label="Dois caminhos" className="absolute left-[5.2%] top-[10.8%] text-[1.2cqw]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[17.5%] w-[85%] text-[4.1cqw] leading-[1.08] tracking-[-0.04em]">Na recompra, você escolhe o caminho<br />que <HomeCashUltraAccent>cabe na sua vida.</HomeCashUltraAccent></HomeCashUltraTitle>
    <p className="absolute left-[5.2%] top-[34.5%] text-[1.15cqw] leading-[1.4]">Até a contemplação o fluxo é o mesmo. A única escolha real acontece aqui.</p>
    <div className="absolute left-[5.2%] right-[5.2%] top-[42.5%] grid h-[46.5%] grid-cols-2 gap-[2cqw]">
      {MODELS.map((model)=><section key={model.title} className="flex min-h-0 flex-col overflow-hidden rounded-[1.1cqw] border border-[#1C2D7F]/45"><h2 className={`px-[2.2cqw] py-[1.7cqw] text-[1.72cqw] font-[700] leading-[1.2] ${model.color}`}>{model.title}</h2><div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-x-[1.8cqw] gap-y-[1.8cqw] px-[2.2cqw] pb-[2cqw] pt-[2.1cqw]">{model.fields.map(([heading,body])=><div key={heading}><div className={`mb-[0.4cqw] text-[0.88cqw] font-[700] uppercase tracking-[0.08em] ${heading==='Ponto de atenção'?'text-[#EDB424]':'text-[#69739e]'}`}>{heading}</div><p className="text-[1.15cqw] leading-[1.42]">{body}</p></div>)}</div></section>)}
    </div>
    <div className="absolute bottom-[6.2%] left-[5.2%] flex items-center gap-[1cqw] text-[1.05cqw]"><ShieldCheck className="h-[1.55cqw] w-[1.55cqw] shrink-0 text-[#1C2D7F]" strokeWidth={1.8} aria-hidden="true" />Ainda não sabe qual escolher? Na conversa, simulamos os dois caminhos com os números do seu imóvel.</div>
  </HomeCashUltraCanvas>
);
