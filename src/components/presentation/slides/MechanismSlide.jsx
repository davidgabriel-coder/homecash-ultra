import mechanismPanelOne from '../../../assets/mecanismo assets/retangulo 1.svg';
import mechanismPanelTwo from '../../../assets/mecanismo assets/Ratangulo 2.svg';
import mechanismPanelThree from '../../../assets/mecanismo assets/retangulo 3.svg';
import mechanismPanelFour from '../../../assets/mecanismo assets/retangulo 4.svg';
import mechanismPanelFive from '../../../assets/mecanismo assets/retangulo 5.svg';
import mechanismPanelSix from '../../../assets/mecanismo assets/retangulo 6.svg';
import mechanismBuildingImage from '../../../assets/mecanismo assets/imagem predinho.png';

const MechanismCard = ({
  src,
  alt,
  left,
  top,
  heightClass,
  title,
  body,
  titleClassName,
  bodyClassName,
  contentWidthClassName = 'w-[82%]',
  contentTopClassName = 'top-[10%]',
  contentLeftClassName = 'left-[6.4%]'
}) => (
  <section className={`absolute z-10 ${heightClass} w-auto`} style={{ left, top }}>
    <img src={src} alt={alt} className="block h-full w-auto select-none" draggable="false" />
    <div className={`absolute ${contentLeftClassName} ${contentTopClassName} ${contentWidthClassName}`}>
      <h2 className={titleClassName}>{title}</h2>
      <div className={bodyClassName}>{body}</div>
    </div>
  </section>
);

export const MechanismSlide = ({ presentationTextContent }) => (
  <div className="relative h-full overflow-hidden bg-[#f0f0f0] font-excon text-[#253793] [container-type:size]">
    <div className="absolute inset-0 bg-[linear-gradient(200.49deg,rgba(0,2,63,0.024)_46.29%,rgba(11,38,194,0.15)_80.3%),linear-gradient(90deg,#f0f0f0_0%,#f0f0f0_100%)]" />

    <div className="absolute left-1/2 top-[12.8%] z-20 -translate-x-1/2 text-center">
      <h1 className="whitespace-nowrap text-[3.38cqw] font-[400] leading-[0.98] tracking-[-0.018em] text-[#253793]">
        O Mecanismo <span className="font-[700]">HomeCash®</span>
      </h1>
      <p className="mt-[1.45cqw] w-[46cqw] text-[1.25cqw] leading-[1.28] tracking-[-0.006em] text-[#253793]">
        {presentationTextContent.mechanismSubtitle}
      </p>
    </div>

    <MechanismCard
      src={mechanismPanelOne}
      alt=""
      left="5.15%"
      top="34.78%"
      heightClass="h-[14.65cqw]"
      title="1. Diagnóstico da situação"
      body={
        <p className="mt-[0.9cqw] max-w-[88%] text-[1.04cqw] leading-[1.38] tracking-[-0.005em] text-white">
          Nosso time jurídico e de inteligência imobiliária faz o diagnóstico do caso e o nível de pressão financeira
          envolvido.
        </p>
      }
      titleClassName="whitespace-nowrap text-[1.7cqw] font-[700] leading-[1.08] tracking-[-0.018em] text-white"
      contentWidthClassName="w-[88%]"
      contentTopClassName="top-[11%]"
    />

    <MechanismCard
      src={mechanismPanelTwo}
      alt=""
      left="35.78%"
      top="34.78%"
      heightClass="h-[14.65cqw]"
      title="2. Plano Personalizado"
      body={
        <p className="mt-[0.9cqw] max-w-[94%] text-[1.04cqw] leading-[1.38] tracking-[-0.005em] text-white">
          Estruturamos um plano personalizado, viabilizando liquidez, previsibilidade de custos e um caminho real para
          encerrar a pressão financeira.
        </p>
      }
      titleClassName="whitespace-nowrap text-[1.7cqw] font-[700] leading-[1.08] tracking-[-0.018em] text-white"
      contentWidthClassName="w-[90%]"
      contentTopClassName="top-[11%]"
    />

    <MechanismCard
      src={mechanismPanelThree}
      alt=""
      left="63.45%"
      top="34.78%"
      heightClass="h-[14.65cqw]"
      title="3. Aprovação"
      body={
        <p className="mt-[0.9cqw] max-w-[91%] text-[1.02cqw] leading-[1.34] tracking-[-0.006em] text-white">
          Com o plano aprovado, conduzimos a operação de reorganização financeira para proteger seu patrimônio com
          previsibilidade e segurança. Em média, o valor é liberado em até 45 dias.
        </p>
      }
      titleClassName="text-[1.7cqw] font-[700] leading-[1.08] tracking-[-0.018em] text-white"
      contentWidthClassName="w-[85%]"
      contentTopClassName="top-[12%]"
    />

    <MechanismCard
      src={mechanismPanelFour}
      alt=""
      left="5.15%"
      top="62.92%"
      heightClass="h-[14.65cqw]"
      title="4. Saída da operação"
      body={
        <p className="mt-[0.72cqw] max-w-[94%] text-[1.02cqw] leading-[1.29] tracking-[-0.006em] text-white">
          Durante esse período, você conta com duas opções: <span className="font-[700]">A.</span> Recomprar o imóvel
          pelo <span className="font-[700]">valor previamente acordado.</span>
          <br />
          <span className="font-[700]">B.</span> Buscar uma oferta de maior valor.
          <br />
          Toda a diferença obtida fica 100% com você.
        </p>
      }
      titleClassName="whitespace-nowrap text-[1.7cqw] font-[700] leading-[1.08] tracking-[-0.018em] text-white"
      contentWidthClassName="w-[88%]"
      contentTopClassName="top-[10%]"
    />

    <MechanismCard
      src={mechanismPanelFive}
      alt=""
      left="34.3%"
      top="62.92%"
      heightClass="h-[14.65cqw]"
      title="5. Pressão resolvida"
      body={
        <p className="mt-[0.72cqw] max-w-[92%] text-[1.02cqw] leading-[1.34] tracking-[-0.006em] text-white">
          O trabalho duro já foi feito e agora você pode seguir com seus planos.
        </p>
      }
      titleClassName="whitespace-nowrap text-[1.7cqw] font-[700] leading-[1.16] tracking-[-0.045em] text-white"
      contentWidthClassName="w-[78%]"
      contentTopClassName="top-[10%]"
      contentLeftClassName="left-[7%]"
    />

    <section className="absolute left-[55.74%] top-[62.92%] z-10 h-[14.65cqw] w-auto">
      <img src={mechanismPanelSix} alt="" className="block h-full w-auto select-none" draggable="false" />
      <div className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-[2.52cqw] font-[700] leading-[1.38] tracking-[-0.025em] text-[#253793]">
          Até 35% mais barato
          <br />
          que o Home Equity!
        </p>
      </div>
    </section>

    <img
      src={mechanismBuildingImage}
      alt=""
      className="absolute right-[-12.2%] top-[28.6%] z-20 h-[44.2cqw] select-none object-contain"
      draggable="false"
    />
  </div>
);
