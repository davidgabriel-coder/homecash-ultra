import { ArrowUpRight, BookOpen, Lightbulb } from 'lucide-react';
import danielGavaPhoto from '../../../../assets/plano-v2/v2-quem-somos-daniel-gava.jpg';
import exameLogo from '../../../../assets/plano-v2/v2-logo-exame.svg';
import folhaLogo from '../../../../assets/plano-v2/v2-logo-folha.svg';
import moneyTimesLogo from '../../../../assets/plano-v2/v2-logo-money-times.svg';
import valorEconomicoLogo from '../../../../assets/plano-v2/v2-logo-valor-economico.svg';
import { DEFAULT_PLANO_V2_TEXT_CONTENT } from './planoPersonalizadoV2TextLibrary';
import { renderBracketHighlight } from './v2TextHighlight';
import { V2Canvas, V2Card, V2Eyebrow, V2Header } from './v2Shared';

const PRESSURE_TAGS = ['Parcelas atrasadas', 'Dívidas', 'CPF travado', 'Processos judiciais'];

// Punchline em 3 partes (planilha: K acima do número, L número em destaque, M abaixo).
const PunchlineFigure = ({ top, number, bottom }) => {
  const value = number ?? '';
  // "R$ 1 bi" (7 caracteres) usa o tamanho cheio; valores mais longos encolhem para caber no card.
  const valueFontSize = `${Math.min(6.5, (6.5 * 7) / Math.max(value.length, 1)).toFixed(2)}cqw`;

  return (
    <div className="flex flex-col gap-[0.83cqw]">
      {top ? <p className="text-[1.15cqw] leading-[1.46cqw] text-[#BCCAE9]">{top}</p> : null}
      <strong
        className="block max-w-full whitespace-nowrap pr-[1.5cqw] font-[700] leading-[1] tracking-[-0.05em] text-white"
        style={{ fontSize: valueFontSize }}
      >
        {value}
      </strong>
      {bottom ? <p className="text-[1.15cqw] leading-[1.46cqw] text-[#BCCAE9]">{bottom}</p> : null}
    </div>
  );
};

const IconBox = ({ children, className = '' }) => (
  <span className={`flex h-[2.1cqw] w-[2.1cqw] items-center justify-center rounded-[0.7cqw] ${className}`}>{children}</span>
);

export const V2WhoWeAreSlide = ({ presentationTextContent = DEFAULT_PLANO_V2_TEXT_CONTENT, nav }) => (
  <V2Canvas>
    <V2Header nav={nav} />

    <div className="absolute left-[5%] top-[14.8%] right-[5%]">
      <V2Eyebrow>02 · Quem somos</V2Eyebrow>
      <h1 className="mt-[0.5cqw] text-[3.4cqw] font-[400] leading-[1.05] tracking-[-0.03em] text-[#1C2D7F]">
        {renderBracketHighlight(presentationTextContent.whoWeAreTitle)}
      </h1>
    </div>

    <div className="absolute bottom-[9.1%] left-[5%] top-[25.9%] flex w-[27.1%] flex-col gap-[1.04cqw]">
      <V2Card className="flex min-h-0 flex-1 flex-col justify-between">
        <div className="flex items-start justify-between">
          <V2Eyebrow className="text-[0.95cqw]">+15 anos</V2Eyebrow>
          <IconBox className="bg-[#E5E7F4] text-[#235CE9]">
            <BookOpen className="h-[1.1cqw] w-[1.1cqw]" strokeWidth={1.8} aria-hidden="true" />
          </IconBox>
        </div>
        <div>
          <h2 className="text-[1.5cqw] font-[700] leading-[1.15] tracking-[-0.02em]">Uma história de cuidado ao próximo</h2>
          <p className="mt-[0.8cqw] text-[0.95cqw] leading-[1.45] text-[#5A5F7D]">
            Os fundadores da Rooftop lançaram o HomeCash em 2020, depois que Daniel Gava arrematou em leilão um imóvel de{' '}
            <strong className="text-[#1C2D7F]">R$ 1 milhão</strong>, perdido por uma dívida de apenas{' '}
            <strong className="text-[#1C2D7F]">R$ 30 mil</strong>.
          </p>
        </div>
      </V2Card>

      <V2Card tone="primary" className="flex min-h-0 flex-1 flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-[0.95cqw] font-[500]">2020</span>
          <IconBox className="bg-white/15">
            <Lightbulb className="h-[1.1cqw] w-[1.1cqw]" strokeWidth={1.8} aria-hidden="true" />
          </IconBox>
        </div>
        <div>
          <h2 className="text-[1.5cqw] font-[700] leading-[1.15] tracking-[-0.02em]">Dias depois, nasce o HomeCash®</h2>
          <p className="mt-[0.8cqw] text-[0.95cqw] leading-[1.45] text-[#DCE3F7]">
            Uma alternativa inédita no Brasil para que donos de imóveis sob pressão convertam o ativo em capital, de forma
            rápida e segura.
          </p>
        </div>
      </V2Card>
    </div>

    <div className="absolute bottom-[9.1%] left-[33.5%] top-[25.9%] flex w-[27.1%] flex-col gap-[1.04cqw]">
      <V2Card className="flex h-[48.6%] shrink-0 flex-col gap-[0.9cqw]">
        <h2 className="text-[1.5cqw] font-[700] leading-[1.15] tracking-[-0.02em]">O que é um imóvel sob pressão?</h2>
        <p className="text-[0.95cqw] leading-[1.45] text-[#5A5F7D]">
          É um ativo afetado por questões financeiras, jurídicas ou operacionais, que reduzem o tempo de decisão e aumentam o
          risco de perda patrimonial.
        </p>
        <div className="mt-auto flex flex-wrap gap-[0.5cqw]">
          {PRESSURE_TAGS.map((tag) => (
            <span key={tag} className="rounded-full bg-[#E5E7F4] px-[0.9cqw] py-[0.35cqw] text-[0.85cqw] font-[500] text-[#1C2D7F]">
              {tag}
            </span>
          ))}
          <span className="rounded-full bg-[#C42A1E]/10 px-[0.9cqw] py-[0.35cqw] text-[0.85cqw] font-[500] text-[#C42A1E]">
            Risco de leilão
          </span>
        </div>
      </V2Card>

      <V2Card className="flex h-[16.7%] shrink-0 flex-col justify-center gap-[1.04cqw] !px-[1.67cqw] !py-[1.46cqw]">
        <span className="text-[0.8cqw] uppercase tracking-[0.1em] text-[#5A5F7D]">Saiu na imprensa</span>
        <div className="flex items-center justify-between">
          <img src={valorEconomicoLogo} alt="Valor Econômico" className="h-[1.2cqw] object-contain" />
          <img src={moneyTimesLogo} alt="Money Times" className="h-[0.9cqw] object-contain" />
          <img src={folhaLogo} alt="Folha de S.Paulo" className="h-[1.05cqw] object-contain" />
        </div>
      </V2Card>

      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.25cqw] bg-white ring-1 ring-[#1E203F14]">
        <img
          src={danielGavaPhoto}
          alt="Daniel Gava, CEO da Rooftop"
          className="absolute -top-[2%] left-[27%] h-[157%] w-[97.7%] object-cover object-center"
        />
        <div className="absolute inset-y-0 left-0 w-[63.5%] bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_45%,rgba(255,255,255,0)_100%)]" />
        <img src={exameLogo} alt="" aria-hidden="true" className="absolute left-[1.35cqw] top-[1.04cqw] w-[10.4cqw] object-contain object-left" />
        <blockquote className="absolute left-[1.67cqw] top-[3.6cqw] w-[14cqw] border-l-2 border-[#235CE9] pl-[0.6cqw]">
          <p className="text-[0.72cqw] italic leading-[0.98cqw] text-[#1C2D7F]">
            &ldquo;O mercado todo se posicionava contra o devedor. Ele identificava um problema&hellip;&rdquo;
          </p>
        </blockquote>
        <div className="absolute bottom-[1.46cqw] left-[1.67cqw] flex flex-col gap-[0.1cqw]">
          <div className="text-[0.78cqw] font-[700] leading-[1.04cqw] text-[#1C2D7F]">Daniel Gava</div>
          <div className="text-[0.73cqw] leading-[0.94cqw] text-[#5A5F7D]">CEO da Rooftop</div>
        </div>
      </div>
    </div>

    <V2Card tone="navy" className="absolute bottom-[9.1%] left-[61.7%] right-[5%] top-[25.9%] flex flex-col justify-between !p-[2.08cqw]">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white/15 px-[1cqw] py-[0.35cqw] text-[0.85cqw] font-[500]">A Rooftop em números</span>
        <span className="flex h-[2.4cqw] w-[2.4cqw] items-center justify-center rounded-full bg-white text-[#1C2D7F]">
          <ArrowUpRight className="h-[1.1cqw] w-[1.1cqw]" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <PunchlineFigure
        top={presentationTextContent.punchlineTop}
        number={presentationTextContent.punchlineNumber}
        bottom={presentationTextContent.punchlineBottom}
      />
      <div className="border-t border-[#BCCAE9]/25 pt-[0.52cqw] text-[1.35cqw] leading-[2.19cqw] text-white">
        {presentationTextContent.whoWeAreBody}
      </div>
    </V2Card>

    <p className="absolute bottom-[3%] left-[5%] text-[0.85cqw] text-[#5A5F7D]">
      Valores e marcos institucionais da Rooftop. Matérias publicadas em Exame, Money Times e Folha de S.Paulo.
    </p>
  </V2Canvas>
);
