import coverImage from '../../../../assets/ultra assets/imagem capa.png';
import rooftopLogo from '../../../../assets/ultra assets/Cópia de rooftop-logo_bco.png';
import coverFeatures from '../../../../assets/ultra assets/seguraça-solução-capital.png';
import { HomeCashUltraAccent, HomeCashUltraCanvas } from './homeCashUltraShared';

export const HomeCashUltraCoverSlide = () => (
  <HomeCashUltraCanvas>
    <div className="absolute inset-[100px]">
      <img
        src={coverImage}
        alt="Cobertura de um imóvel contemporâneo com vista para a cidade ao entardecer"
        className="absolute right-0 top-0 h-full w-auto max-w-[63%] object-contain object-right"
      />

      <div className="absolute left-0 top-0 text-[1cqw] font-[500] tracking-[0.01em] text-[#59669a]">
        Rooftop · HomeCash Ultra
      </div>

      <section className="absolute left-0 top-[13%] w-[47%]">
        <img src={rooftopLogo} alt="Rooftop" className="mb-[1.5cqw] w-[7.5cqw] object-contain object-left" />
        <h1 className="text-[5.15cqw] font-[700] leading-[1.02] tracking-[-0.045em] text-[#1C2D7F]">
          Seu patrimônio<br />pode <HomeCashUltraAccent>fazer mais.</HomeCashUltraAccent>
        </h1>
        <div className="my-[1.35cqw] h-[0.2cqw] w-[7cqw] bg-[#EDB424]" />
        <p className="max-w-[35cqw] text-[1.3cqw] leading-[1.45] text-[#505f99]">
          Transformamos o valor do seu imóvel em capital inteligente para <strong>crescimento, expansão</strong> e novas <strong>oportunidades estratégicas.</strong>
        </p>
        <p className="mt-[1.8cqw] text-[4.6cqw] font-[700] leading-[0.92] tracking-[-0.05em] text-[#222435]">
          HomeCash <span className="block pt-[0.35cqw] font-[400] tracking-[0.2em] text-[#1C2D7F]">ULTRA</span>
        </p>
      </section>

      <img
        src={coverFeatures}
        alt="Seguro e confiável; soluções personalizadas; capital para suas ambições"
        className="absolute bottom-0 left-0 h-auto w-[29cqw] object-contain object-left-bottom"
      />
    </div>
  </HomeCashUltraCanvas>
);
