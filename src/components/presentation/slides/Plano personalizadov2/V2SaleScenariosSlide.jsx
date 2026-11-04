import { V2Canvas, V2Eyebrow, V2Header } from './v2Shared';

const SCENARIOS = [
  { label: 'Sem desconto', sale: 'R$ 813.000', preserved: 'R$ 716.165', share: '88,1%', bar: 'w-[88.1%]', fill: 'bg-[#235CE9]', highlighted: true },
  { label: '5%', sale: 'R$ 772.350', preserved: 'R$ 675.515', share: '83,1%', bar: 'w-[83.1%]', fill: 'bg-[#235CE9]' },
  { label: '10%', sale: 'R$ 731.700', preserved: 'R$ 634.865', share: '78,1%', bar: 'w-[78.1%]', fill: 'bg-[#235CE9]' },
  { label: '15%', sale: 'R$ 691.050', preserved: 'R$ 594.215', share: '73,1%', bar: 'w-[73.1%]', fill: 'bg-[#235CE9]' },
  { label: '20%', sale: 'R$ 650.400', preserved: 'R$ 553.565', share: '68,1%', bar: 'w-[68.1%]', fill: 'bg-[#1C2D7F]' }
];

export const V2SaleScenariosSlide = ({ nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />

    <div className="absolute left-[5%] top-[14.5%]">
      <V2Eyebrow>05 · Saída A · Cenários de venda</V2Eyebrow>
      <h1 className="mt-[0.7cqw] text-[3.13cqw] font-[400] leading-[1.07] tracking-[-0.03em] text-[#1C2D7F]">
        E se a venda sair <span className="font-[700] text-[#235CE9]">com desconto?</span>
      </h1>
    </div>

    <div className="absolute bottom-[9.44%] left-[5%] top-[25.93%] flex w-[57.71cqw] flex-col rounded-[1.25cqw] bg-white px-[1.25cqw] py-[0.63cqw] ring-1 ring-[#1E203F14]">
      <div className="flex h-[3.33cqw] shrink-0 items-center border-b border-[#E5E7F4] px-[0.83cqw] text-[0.89cqw] font-[500] text-[#5A5F7D]">
        <div className="w-[13cqw] shrink-0">Desconto</div>
        <div className="w-[6.77cqw] shrink-0 text-right">Venda por</div>
        <div className="w-[12.5cqw] shrink-0 text-right">Valor preservado</div>
        <div className="flex-1 pl-[2.5cqw]">Do valor do imóvel</div>
      </div>

      {SCENARIOS.map(({ label, sale, preserved, share, bar, fill, highlighted }, index) => (
        <div
          key={label}
          className={`flex flex-1 items-center px-[0.83cqw] ${
            highlighted
              ? 'rounded-[1.04cqw] bg-[#235CE933]'
              : index < SCENARIOS.length - 1
                ? 'border-b border-[#E5E7F4]'
                : ''
          }`}
        >
          <div className="w-[13cqw] shrink-0 text-[1.25cqw] font-[500] text-[#1C2D7F]">{label}</div>
          <div className="w-[6.77cqw] shrink-0 text-right text-[1.25cqw] text-[#5A5F7D]">{sale}</div>
          <div className="w-[12.5cqw] shrink-0 text-right text-[1.25cqw] font-[700] text-[#1C2D7F]">{preserved}</div>
          <div className="flex flex-1 items-center gap-[0.83cqw] pl-[2.5cqw]">
            <div className="flex h-[0.63cqw] flex-1 rounded-full bg-[#E5E7F4]">
              <div className={`h-full rounded-full ${fill} ${bar}`} />
            </div>
            <div className="w-[4.17cqw] shrink-0 text-right text-[1.25cqw] font-[700] text-[#1C2D7F]">{share}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="absolute bottom-[9.44%] left-[63.75%] right-[5%] top-[25.93%] flex flex-col justify-between rounded-[1.25cqw] bg-[#1C2D7F] p-[2.08cqw] text-white">
      <div className="flex items-center justify-between gap-[0.83cqw]">
        <div className="text-[0.83cqw] font-[500] uppercase tracking-[0.1em] text-[#BCCAE9]">No pior cenário da tabela</div>
        <div className="flex h-[1.67cqw] shrink-0 items-center whitespace-nowrap rounded-full bg-[#EDB424] px-[0.73cqw] text-[0.78cqw] font-[500] text-[#1E203F]">
          Venda com 20% de desconto
        </div>
      </div>

      <div className="flex flex-col gap-[0.63cqw]">
        <div className="w-max text-[10.42cqw] font-[700] leading-[9.4cqw] tracking-[-0.06em]">68,1%</div>
        <p className="text-[1.15cqw] leading-[1.67cqw] text-[#BCCAE9]">
          Ainda acima dos 58,8% da conta do primeiro dia, e com a pressão resolvida desde o começo.
        </p>
      </div>

      <div className="flex flex-col gap-[0.73cqw]">
        <ScenarioBar label="Primeiro dia" value="58,8%" width="w-[58.8%]" fill="bg-[#BCCAE9]" labelClass="text-[#BCCAE9]" />
        <ScenarioBar label="Pior cenário" value="68,1%" width="w-[68.1%]" fill="bg-[#EDB424]" labelClass="text-white" />
      </div>
    </div>

    <p className="absolute left-[5%] right-[5%] top-[93.52%] text-[0.78cqw] leading-[1.15cqw] text-[#5A5F7D]">
      Simulação de venda em 12 meses sobre R$ 813.000, com aluguéis e o custo do dinheiro como referência de comparação.
      Cenários ilustrativos, sem garantia de preço ou prazo de venda; sem corretagem e tributos.
    </p>
  </V2Canvas>
);

const ScenarioBar = ({ label, value, width, fill, labelClass }) => (
  <div className="flex items-center gap-[0.83cqw]">
    <div className={`w-[6.25cqw] shrink-0 text-[0.83cqw] ${labelClass}`}>{label}</div>
    <div className="flex h-[0.63cqw] flex-1 rounded-full bg-[#FFFFFF1F]">
      <div className={`h-full rounded-full ${fill} ${width}`} />
    </div>
    <div className="w-[3.33cqw] shrink-0 text-right text-[0.83cqw] text-white">{value}</div>
  </div>
);
