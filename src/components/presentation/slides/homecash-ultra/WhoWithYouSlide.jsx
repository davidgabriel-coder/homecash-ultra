import { HomeCashUltraAccent, HomeCashUltraCanvas, HomeCashUltraCard, HomeCashUltraSectionLabel, HomeCashUltraTitle } from './homeCashUltraShared';

const PARTNERS = [['Ademicon','Administra o consórcio e a carta.'],['OXY','Financia a recompra no Modelo 2.'],['Rooftop','Estrutura e acompanha a operação do início ao fim.']];

export const WhoWithYouSlide = () => (
  <HomeCashUltraCanvas>
    <HomeCashUltraSectionLabel number="11" label="Quem está com você" className="absolute left-[5.2%] top-[7%]" />
    <HomeCashUltraTitle className="absolute left-[5.2%] top-[13%] w-[70%] text-[3.4cqw]">Quem já fez, e quem <HomeCashUltraAccent>caminha junto</HomeCashUltraAccent><br/>em cada etapa.</HomeCashUltraTitle>
    <HomeCashUltraCard className="absolute bottom-[9%] left-[5.2%] top-[34%] w-[53%] p-[1.7cqw]">
      <div className="flex items-start justify-between"><div className="flex gap-[0.8cqw]"><div className="h-[2.8cqw] w-[2.8cqw] rounded-full bg-[linear-gradient(135deg,#1C2D7F,#1C2D7F)]"/><div><h2 className="text-[1.25cqw] font-[700]">Fernanda e Paulo C., 52 e 55 anos</h2><p className="text-[0.82cqw] text-[#6d779e]">Sócios de uma distribuidora · Ribeirão Preto (SP)</p></div></div><span className="rounded-full bg-[#EDB424] px-[0.9cqw] py-[0.32cqw] text-[0.72cqw] font-[700] uppercase tracking-[0.06em]">Caso ilustrativo</span></div>
      <div className="mt-[1.2cqw] grid grid-cols-3 gap-[1.2cqw]">{[['A situação','Tinham dois imóveis quitados, um deles parado, e queriam comprar a sede da empresa sem tirar dinheiro do caixa.'],['O que fez','HomeCash Ultra no Modelo 2: carta de cerca de R$ 815 mil, contemplada no 3º mês, com a recompra financiada pela OXY.'],['O resultado','Compraram a sede com a carta, trocaram aluguel por patrimônio e mantiveram o caixa da empresa intacto.']].map(([title,body])=><div key={title} className="border-l-[0.22cqw] border-[#EDB424] pl-[0.75cqw]"><div className="text-[0.72cqw] font-[700] uppercase tracking-[0.08em]">{title}</div><p className="mt-[0.25cqw] text-[0.78cqw] leading-[1.4]">{body}</p></div>)}</div>
      <blockquote className="absolute bottom-[1.3cqw] left-[1.7cqw] right-[1.7cqw] text-[0.9cqw] italic leading-[1.4]">“A gente tinha patrimônio parado e pagava aluguel. Hoje a empresa está num imóvel nosso, e o caixa continua trabalhando.”</blockquote>
    </HomeCashUltraCard>
    <div className="absolute right-[5.2%] top-[43%] flex h-[45%] w-[35%] flex-col justify-between">
      {PARTNERS.map(([name,body])=><HomeCashUltraCard key={name} className="flex min-h-[27%] items-center gap-[1.1cqw] px-[1.4cqw] py-[0.9cqw]"><strong className="w-[7cqw] shrink-0 text-[1.18cqw]">{name}</strong><p className="text-[0.9cqw] leading-[1.4]">{body}</p></HomeCashUltraCard>)}
    </div>
  </HomeCashUltraCanvas>
);
