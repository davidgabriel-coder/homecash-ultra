import { V2Canvas, V2Eyebrow, V2Header } from './v2Shared';

const SALE_ROWS = [
  { label: 'Venda do imóvel', sub: 'Valor informado no diagnóstico', value: '+ R$ 813.000', positive: true },
  { label: 'Quitação da recompra', sub: 'Valor fixo de 12 meses', value: '− R$ 615.825' },
  { label: 'Liquidez recebida no início', sub: 'Pagamento à vista do HomeCash®', value: '+ R$ 477.850', positive: true },
  { label: 'Aluguéis do período', sub: '12 × R$ 3.600', value: '− R$ 43.200' },
  {
    label: 'Custo do dinheiro que você deixa de pagar',
    sub: 'Referência: CDI + 4% a.a. por 12 meses',
    value: '+ R$ 84.340',
    positive: true
  }
];

const PRESERVED_BARS = [
  { label: 'Primeiro dia', value: '58,8%', width: 'w-[58.8%]', fill: 'bg-[#BCCAE9]', labelClass: 'text-[#BCCAE9]' },
  { label: 'Fim da operação', value: '88,1%', width: 'w-[88.1%]', fill: 'bg-[#EDB424]', labelClass: 'text-white' }
];

export const V2ExitSaleSlide = ({ nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />
    <div className="absolute left-[5%] right-[5%] top-[14.5%]">
      <V2Eyebrow>05 · Saída A · Venda em 12 meses</V2Eyebrow>
      <h1 className="mt-[0.7cqw] text-[3.125cqw] font-[400] leading-[1.05] tracking-[-0.03em] text-[#1C2D7F]">
        O imóvel é vendido e <span className="font-[700] text-[#235CE9]">a diferença é sua</span>
      </h1>
    </div>

    <div className="absolute left-[5%] top-[25.9%] flex h-[64.6%] w-[57.7%] flex-col rounded-[1.25cqw] bg-white px-[2.08cqw] py-[0.625cqw] ring-1 ring-[#1E203F14]">
      {SALE_ROWS.map(({ label, sub, value, positive }) => (
        <div key={label} className="flex flex-1 items-center justify-between border-b border-[#E5E7F4]">
          <div className="flex flex-col gap-[0.25cqw]">
            <span className="text-[1.15cqw] font-[500] leading-none text-[#1C2D7F]">{label}</span>
            <span className="text-[0.89cqw] leading-none text-[#5A5F7D]">{sub}</span>
          </div>
          <span
            className={`text-[1.56cqw] font-[700] leading-none ${positive ? 'text-[#157A38]' : 'text-[#1C2D7F]'}`}
          >
            {value}
          </span>
        </div>
      ))}
      <div className="flex flex-1 items-center justify-between">
        <span className="text-[1.35cqw] font-[700] leading-none text-[#1C2D7F]">Valor econômico preservado</span>
        <span className="text-[2.5cqw] font-[900] leading-none tracking-[-0.03em] text-[#235CE9]">R$ 716.165</span>
      </div>
    </div>

    <div className="absolute left-[63.75%] top-[25.9%] flex h-[64.6%] w-[31.25%] flex-col justify-between rounded-[1.25cqw] bg-[#1C2D7F] p-[2.08cqw] text-white">
      <div className="flex items-center justify-between">
        <span className="text-[0.83cqw] font-[500] uppercase leading-none tracking-[0.1em] text-[#BCCAE9]">
          Você preserva
        </span>
        <span className="flex h-[1.67cqw] items-center rounded-full bg-[#EDB424] px-[0.73cqw] text-[0.78cqw] font-[500] text-[#1E203F]">
          Em 18 meses: 84,9%
        </span>
      </div>

      <div className="flex flex-col gap-[0.6cqw]">
        <div className="text-[10.42cqw] font-[700] leading-none tracking-[-0.06em]">88,1%</div>
        <p className="w-[24.2cqw] text-[1.15cqw] leading-[1.45] text-[#BCCAE9]">
          do valor do imóvel, contra os 58,8% da conta do primeiro dia.
        </p>
      </div>

      <div className="flex flex-col gap-[0.73cqw]">
        {PRESERVED_BARS.map(({ label, value, width, fill, labelClass }) => (
          <div key={label} className="flex items-center gap-[0.83cqw]">
            <span className={`w-[6.25cqw] shrink-0 text-[0.83cqw] leading-tight ${labelClass}`}>{label}</span>
            <div className="flex h-[0.625cqw] grow overflow-hidden rounded-full bg-[#FFFFFF1F]">
              <div className={`h-full rounded-full ${width} ${fill}`} />
            </div>
            <span className="w-[3.33cqw] shrink-0 text-right text-[0.83cqw] leading-none">{value}</span>
          </div>
        ))}
      </div>
    </div>

    <p className="absolute left-[5%] top-[93.7%] text-[0.78cqw] leading-[1.2] text-[#5A5F7D]">
      Simulação ilustrativa com as premissas da proposta, sem garantia de preço ou prazo de venda e sem corretagem e
      tributos. O custo do dinheiro é uma referência de comparação, não um valor recebido.
    </p>
  </V2Canvas>
);
