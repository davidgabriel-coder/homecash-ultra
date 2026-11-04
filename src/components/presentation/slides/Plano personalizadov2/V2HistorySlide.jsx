import { CircleCheck, Clock, TrendingUp } from 'lucide-react';
import { V2Canvas, V2Card, V2Eyebrow, V2Header } from './v2Shared';

const RECOMPRA_SEGMENTS = Array.from({ length: 18 }, (_, index) => index < 11);

export const V2HistorySlide = ({ nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />
    <div className="absolute left-[5%] right-[5%] top-[14.5%]">
      <V2Eyebrow>O histórico real de quem já concluiu a jornada</V2Eyebrow>
      <h1 className="mt-[0.6cqw] text-[3.125cqw] font-[400] leading-[3.33cqw] tracking-[-0.03em] text-[#1C2D7F]">
        Como terminam as operações do <span className="font-[700] text-[#235CE9]">HomeCash®</span>
      </h1>
    </div>

    <div className="absolute left-[5%] right-[5%] top-[25.9%] grid h-[62.6%] grid-cols-3 gap-[1.04cqw]">
      <V2Card tone="navy" className="flex flex-col justify-between">
        <span className="flex h-[2.9cqw] w-[2.9cqw] items-center justify-center rounded-full bg-white/[0.12]">
          <CircleCheck className="h-[1.35cqw] w-[1.35cqw]" strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="contents">
          <div className="flex flex-col gap-[0.6cqw]">
            <p className="text-[9.375cqw] font-[700] leading-[0.95] tracking-[-0.06em]">100%</p>
            <p className="text-[1.25cqw] leading-[1.77cqw]">dos casos foram concluídos por uma das saídas previstas.</p>
            <p className="text-[0.94cqw] text-[#BCCAE9]">Nenhum caso ficou sem uma solução de saída.</p>
          </div>
          <div className="flex flex-col gap-[0.63cqw]">
            <div className="flex h-[0.83cqw] gap-[0.31cqw]">
              <span className="flex-[70] rounded-full bg-white" />
              <span className="flex-[30] rounded-full bg-[#EDB424]" />
            </div>
            <div className="flex justify-between text-[0.94cqw]">
              <p>
                <strong className="font-[700]">70%</strong> <span className="text-[#BCCAE9]">venda</span>
              </p>
              <p>
                <strong className="font-[700]">30%</strong> <span className="text-[#BCCAE9]">recompra</span>
              </p>
            </div>
          </div>
        </div>
      </V2Card>

      <V2Card className="flex flex-col justify-between">
        <span className="flex h-[2.9cqw] w-[2.9cqw] items-center justify-center rounded-xl bg-[#E5E7F4]">
          <Clock className="h-[1.35cqw] w-[1.35cqw] text-[#235CE9]" strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="contents">
          <div className="flex flex-col gap-[0.6cqw]">
            <div className="flex items-baseline gap-[0.73cqw]">
              <span className="text-[9.375cqw] font-[700] leading-[0.95] tracking-[-0.06em] text-[#1C2D7F]">11</span>
              <span className="text-[2.08cqw] font-[700] leading-none text-[#1C2D7F]">meses</span>
            </div>
            <p className="text-[1.25cqw] leading-[1.77cqw] text-[#1C2D7F]">
              é o prazo médio para finalizar a operação.
            </p>
          </div>
          <div className="flex flex-col gap-[0.63cqw] rounded-xl bg-[#F0F0F0] px-[1.25cqw] py-[1.04cqw]">
            <div className="flex h-[1.46cqw] gap-[0.26cqw]">
              {RECOMPRA_SEGMENTS.map((filled, index) => (
                <span
                  key={index}
                  className={`flex-1 rounded-[0.1cqw] ${filled ? 'bg-[#235CE9]' : 'bg-[#CBD6F4]'}`}
                />
              ))}
            </div>
            <p className="text-[0.78cqw] text-[#5A5F7D]">11 de até 18 meses previstos em contrato</p>
          </div>
        </div>
      </V2Card>

      <V2Card className="flex flex-col justify-between">
        <span className="flex h-[2.9cqw] w-[2.9cqw] items-center justify-center rounded-xl bg-[#157A381A]">
          <TrendingUp className="h-[1.35cqw] w-[1.35cqw] text-[#157A38]" strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="contents">
          <div className="flex flex-col gap-[0.6cqw]">
            <p className="text-[9.375cqw] font-[700] leading-[0.95] tracking-[-0.06em] text-[#157A38]">35%</p>
            <p className="text-[1.25cqw] leading-[1.77cqw] text-[#1C2D7F]">
              acima do valor de recompra, em média, nas operações que terminaram em venda.
            </p>
          </div>
          <div className="flex flex-col gap-[0.21cqw] rounded-xl bg-[#157A38] px-[1.25cqw] py-[1.04cqw] text-white">
            <p className="text-[0.83cqw] font-[500]">No seu caso</p>
            <p className="text-[2.08cqw] font-[700] leading-[2.29cqw] tracking-[-0.03em]">≈ R$ 831 mil</p>
            <p className="text-[0.78cqw]">R$ 615.825 de recompra + 35%</p>
          </div>
        </div>
      </V2Card>
    </div>

    <p className="absolute left-[5%] right-[5%] top-[91.6%] text-[0.78cqw] leading-[1.15cqw] text-[#5A5F7D]">
      Dados internos da Rooftop sobre os últimos casos fechados, até agosto de 2026. Médias históricas; resultados
      passados não garantem resultados futuros. &quot;No seu caso&quot; aplica a média ao seu preço de recompra de 12
      meses, apenas como ilustração.
    </p>
  </V2Canvas>
);
