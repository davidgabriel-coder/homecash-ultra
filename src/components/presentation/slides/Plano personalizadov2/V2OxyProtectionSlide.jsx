import { Check } from 'lucide-react';
import folhaLogo from '../../../../assets/plano-v2/v2-logo-folha.svg';
import { V2Canvas, V2Eyebrow, V2Header } from './v2Shared';

const CheckItem = ({ children, iconClass, textClass }) => (
  <li className={`flex items-center gap-[0.52cqw] text-[0.885cqw] leading-[1.15cqw] ${textClass}`}>
    <Check className={`h-[0.94cqw] w-[0.94cqw] shrink-0 ${iconClass}`} strokeWidth={2.5} aria-hidden="true" />
    {children}
  </li>
);

export const V2OxyProtectionSlide = ({ nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />

    <div className="absolute left-[5%] top-[14.5%]">
      <V2Eyebrow>05 · Saída B · Rede de proteção</V2Eyebrow>
      <h1 className="mt-[0.7cqw] text-[3.13cqw] font-[400] leading-[1.07] tracking-[-0.03em] text-[#1C2D7F]">
        Rede de proteção <span className="font-[700] text-[#235CE9]">HomeCash®</span> by{' '}
        <span className="font-[700] text-[#157A38]">OXY®</span>
      </h1>
    </div>

    <div className="absolute bottom-[11.48%] left-[5%] right-[5%] top-[25.93%] flex flex-col gap-[1.04cqw]">
      <div className="flex h-[0.52cqw] shrink-0 gap-[1.04cqw]">
        <div className="flex-1 rounded-full bg-[#1C2D7F]" />
        <div className="flex-1 rounded-full bg-[#235CE9]" />
        <div className="flex-1 rounded-full bg-[#235CE9]" />
        <div className="flex-1 rounded-full bg-[#157A38]" />
      </div>

      <div className="flex min-h-0 flex-1 gap-[1.04cqw]">
        <div className="flex flex-1 flex-col justify-between rounded-[1.25cqw] bg-[#1C2D7F] p-[1.46cqw] text-white">
          <div className="flex flex-col gap-[0.73cqw]">
            <p className="text-[0.78cqw] font-[500] uppercase tracking-[0.1em] text-[#BCCAE9]">Primeira etapa · assinatura</p>
            <h2 className="text-[1.46cqw] font-[700] leading-[1.77cqw] tracking-[-0.02em]">Você já começa protegido</h2>
            <p className="text-[0.885cqw] leading-[1.35cqw] text-[#BCCAE9]">
              Desde a assinatura do HomeCash, você conta com um caminho pensado para a recompra do seu imóvel: a Rede de
              proteção.
            </p>
          </div>
          <ul className="flex flex-col gap-[0.52cqw]">
            <CheckItem iconClass="text-[#EDB424]" textClass="text-white">Taxa a partir de 1,05% a.m. + IPCA</CheckItem>
            <CheckItem iconClass="text-[#EDB424]" textClass="text-white">Pensado para você recomprar</CheckItem>
          </ul>
        </div>

        <div className="flex flex-1 flex-col justify-between rounded-[1.25cqw] bg-white p-[1.46cqw] text-[#1C2D7F] ring-1 ring-[#1E203F14]">
          <div className="flex flex-col gap-[0.73cqw]">
            <p className="text-[0.78cqw] font-[500] uppercase tracking-[0.1em] text-[#235CE9]">Durante o contrato</p>
            <h2 className="text-[1.46cqw] font-[700] leading-[1.77cqw] tracking-[-0.02em]">
              Viva sua vida, com alguns cuidados simples
            </h2>
            <p className="text-[0.885cqw] leading-[1.35cqw] text-[#5A5F7D]">
              Cuidados do dia a dia que já te preparam para a recompra.
            </p>
          </div>
          <ul className="flex flex-col gap-[0.52cqw]">
            <CheckItem iconClass="text-[#157A38]" textClass="text-[#1C2D7F]">Aluguel sempre em dia</CheckItem>
            <CheckItem iconClass="text-[#157A38]" textClass="text-[#1C2D7F]">Sem novas restrições no seu nome</CheckItem>
            <CheckItem iconClass="text-[#157A38]" textClass="text-[#1C2D7F]">Capacidade de pagamento mantida</CheckItem>
          </ul>
        </div>

        <div className="flex flex-1 flex-col justify-between rounded-[1.25cqw] bg-white p-[1.46cqw] text-[#1C2D7F] ring-1 ring-[#1E203F14]">
          <div className="flex flex-col gap-[0.73cqw]">
            <p className="text-[0.78cqw] font-[500] uppercase tracking-[0.1em] text-[#235CE9]">No momento do pedido</p>
            <h2 className="text-[1.46cqw] font-[700] leading-[1.77cqw] tracking-[-0.02em]">
              Checagem única, e você já chega pronto
            </h2>
            <p className="text-[0.885cqw] leading-[1.35cqw] text-[#5A5F7D]">
              Na hora de recomprar, basta uma verificação simples e completa. Seguindo os cuidados, você fica elegível para a
              Rede de proteção.
            </p>
          </div>
          <ul className="flex flex-col gap-[0.52cqw]">
            <CheckItem iconClass="text-[#157A38]" textClass="text-[#1C2D7F]">Você já chega elegível</CheckItem>
          </ul>
        </div>

        <div className="flex flex-1 flex-col justify-between rounded-[1.25cqw] bg-[#157A38] p-[1.46cqw] text-white">
          <div className="flex flex-col gap-[0.73cqw]">
            <p className="text-[0.78cqw] font-[500] uppercase tracking-[0.1em] text-[#D6F0DE]">Fim da operação</p>
            <h2 className="text-[1.46cqw] font-[700] leading-[1.77cqw] tracking-[-0.02em]">Sua conquista, com mais fôlego</h2>
            <p className="text-[0.885cqw] leading-[1.35cqw] text-[#D6F0DE]">
              Com o financiamento da OXY, o valor pode ser parcelado em até 240 meses, com parcelas menores no seu dia a dia.
            </p>
          </div>
          <div className="flex items-baseline gap-[0.52cqw]">
            <span className="text-[2.92cqw] font-[700] leading-[2.92cqw] tracking-[-0.04em]">20 anos</span>
            <span className="text-[0.885cqw] text-[#D6F0DE]">240 meses</span>
          </div>
        </div>
      </div>

      <div className="flex h-[13.7cqw] shrink-0 gap-[1.04cqw]">
        <div className="flex flex-1 flex-col justify-between rounded-[1.25cqw] bg-[#235CE9] p-[1.46cqw] text-white">
          <p className="text-[0.885cqw] text-[#DCE3F7]">Parcela média</p>
          <p className="text-[2.71cqw] font-[700] leading-[2.92cqw] tracking-[-0.03em]">
            R$ 6.171<span className="text-[1.04cqw] tracking-normal text-[#DCE3F7]"> /mês</span>
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-between rounded-[1.25cqw] bg-white p-[1.46cqw] ring-1 ring-[#1E203F14]">
          <p className="text-[0.885cqw] text-[#5A5F7D]">CET a partir de</p>
          <p className="whitespace-nowrap text-[1.77cqw] font-[700] leading-[2.08cqw] tracking-[-0.03em] text-[#1C2D7F]">
            1,05% a.m. + IPCA
          </p>
        </div>

        <div className="flex flex-[2] flex-col justify-between rounded-[1.25cqw] bg-white px-[1.67cqw] py-[1.46cqw] ring-1 ring-[#1E203F14]">
          <div className="flex items-center justify-between">
            <img src={folhaLogo} alt="Folha de S.Paulo" className="h-[0.9cqw] object-contain object-left" />
            <span className="text-[0.73cqw] text-[#5A5F7D]">Painel S.A. · 13/10/2026</span>
          </div>
          <div className="flex flex-col gap-[0.52cqw]">
            <p className="text-[0.73cqw] font-[500] uppercase tracking-[0.1em] text-[#235CE9]">Saiu na imprensa</p>
            <h2 className="text-[1.09cqw] font-[700] leading-[1.56cqw] text-[#1C2D7F]">
              Empresas fecham parceria para financiar a recompra de imóveis de endividados
            </h2>
          </div>
          <p className="text-[0.83cqw] leading-[1.25cqw] text-[#5A5F7D]">
            &quot;Esses clientes agora poderão financiar até 80% do valor necessário para a recompra desse imóvel por um
            período de até 240 meses.&quot;
          </p>
        </div>
      </div>
    </div>

    <p className="absolute left-[5%] right-[5%] top-[91.48%] text-[0.78cqw] leading-[1.15cqw] text-[#5A5F7D]">
      Valores pré-aprovados e simulados para fins ilustrativos. Os valores finais podem variar, para mais ou para menos,
      conforme a análise definitiva. A análise, aprovação e concessão do financiamento são de responsabilidade exclusiva da
      OXY, instituição financeira parceira, sem garantia de crédito por parte da Rooftop.
    </p>
  </V2Canvas>
);
