import beginningPropertyImage from '../../../assets/começo de tudo assets/imagem imovel.png';
import beginningRightPanel from '../../../assets/começo de tudo assets/retangulo direita.svg';
import beginningLeftPanel from '../../../assets/começo de tudo assets/retangulo esquerda.svg';
import beginningBottomPanel from '../../../assets/começo de tudo assets/retangulo inferior.svg';

export const BeginningSlide = () => (
  <div className="relative h-full overflow-hidden bg-[#f0f0f0] font-excon text-white [container-type:size]">
    <div className="absolute inset-0 bg-[linear-gradient(200.49deg,rgba(0,2,63,0.024)_46.29%,rgba(11,38,194,0.15)_80.3%),linear-gradient(90deg,#f0f0f0_0%,#f0f0f0_100%)]" />

    <h1 className="absolute left-[25.25%] top-[12.85%] z-30 whitespace-nowrap text-[4.85cqw] font-[400] leading-none tracking-[0] text-[#1c2d7f]">
      O <span className="font-[700]">começo</span> de tudo
    </h1>

    <section className="absolute left-[6.52%] top-[27.25%] z-10 w-[37.08cqw]">
      <img src={beginningLeftPanel} alt="" className="block w-full select-none" draggable="false" />
      <div className="absolute left-[5.15%] top-[9.25%] w-[82.3%]">
        <h2 className="text-[1.55cqw] font-[700] leading-[1.16] tracking-[0]">Uma história de cuidado ao próximo</h2>
        <p className="mt-[1.28cqw] text-[1.1cqw] font-[400] leading-[1.34] tracking-[0] text-white">
          Com mais de 15 anos de experiência, os fundadores da <span className="font-[700]">Rooftop</span> lançaram o{' '}
          <span className="font-[700]">HomeCash</span> em 2020 após Daniel Gava arrematar um imóvel em leilão por{' '}
          <span className="font-[700]">R$ 1 milhão</span> em razão de uma dívida de apenas R$ 30 mil.
        </p>
      </div>
    </section>

    <section className="absolute left-[44.61%] top-[27.25%] z-10 w-[31.56cqw]">
      <img src={beginningRightPanel} alt="" className="block w-full select-none" draggable="false" />
      <div className="absolute left-[5.45%] top-[8.65%] w-[79%]">
        <h2 className="text-[1.55cqw] font-[700] leading-[1.28] tracking-[0]">
          Dias depois, surge a ideia de criar o <span className="font-[700]">HomeCash®.</span>
        </h2>
        <p className="mt-[0.75cqw] text-[1.09cqw] font-[400] leading-[1.34] tracking-[0] text-white">
          Desenvolvido e aperfeiçoado, o <span className="font-[700]">HomeCash</span> se consolidou como uma{' '}
          <span className="font-[700]">alternativa inédita no Brasil</span>, permitindo que proprietários de{' '}
          <span className="font-[700]">imóveis sob pressão</span> convertam seus ativos em capital de forma rápida e
          segura.
        </p>
      </div>
    </section>

    <section className="absolute left-[6.52%] top-[61.42%] z-10 w-[88.49cqw]">
      <img src={beginningBottomPanel} alt="" className="block w-full select-none" draggable="false" />
      <div className="absolute left-[2.65%] top-[12.3%] w-[58%]">
        <h2 className="text-[2.33cqw] font-[700] leading-[1.1] tracking-[0]">
          Mas o que são imóveis sob pressão?
        </h2>
        <p className="mt-[1.15cqw] text-[1.3cqw] font-[400] leading-[1.37] tracking-[0] text-white">
          <span className="font-[700]">Imóvel sob pressão</span> Imóveis sob pressão são ativos impactados por questões 
          financeiras, jurídicas ou operacionais que reduzem o tempo de decisão e aumentam o risco de perda 
          patrimonial. A pressão vem do contexto financeiro, jurídico ou temporal 
          em que o proprietário se encontra.
        </p>
      </div>
    </section>

    <img
      src={beginningPropertyImage}
      alt=""
      className="absolute bottom-[-8.6%] right-[-16.1%] z-20 h-[101.5%] select-none object-contain"
      draggable="false"
    />
  </div>
);
