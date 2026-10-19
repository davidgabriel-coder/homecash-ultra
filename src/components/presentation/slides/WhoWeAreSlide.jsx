import logoCirculo from '../../../assets/quem somos assets/logo circulo.svg';
import materiaBrazilJournal from '../../../assets/quem somos assets/materia brazil journal.svg';
import materiaExa1 from '../../../assets/quem somos assets/materia exa 1.svg';
import materiaExame2 from '../../../assets/quem somos assets/materia exame 2.svg';
import materiaMoneyTimes from '../../../assets/quem somos assets/materia money times.svg';
import svgBox from '../../../assets/quem somos assets/svg box.svg';
import { punchlineBoxTextClassName, renderPunchlineText } from '../presentationTextLibrary';

export const WhoWeAreSlide = ({ presentationTextContent }) => (
  <div className="relative h-full overflow-hidden bg-[#eef0f7] font-excon text-[#23358c] [container-type:size]">
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(239,241,248,0.98)_100%)]" />

    <section className="absolute left-[5.31%] top-1/2 w-[39%] -translate-y-1/2">
      <h1 className="text-[5.33cqw] font-[700] leading-[0.98] tracking-[0] text-[#253793]">Quem somos</h1>

      <div className="mt-[4.35cqw] w-[36.6cqw] text-[1.97cqw] leading-[1.31] tracking-[0] text-[#253793]">
        {presentationTextContent.whoWeAreBody}
      </div>
    </section>

    <section className="absolute left-[52.81%] top-[14.44%] h-[71.25%] w-[41.8%]">
      <div className="absolute left-0 top-0 grid w-full grid-cols-2 grid-rows-2 gap-[1.1cqw]">
        <img
          src={materiaExa1}
          alt=""
          className="aspect-[391/251] w-full rounded-[0.78cqw] object-cover shadow-[0_10px_20px_rgba(13,23,62,0.12)]"
          draggable="false"
        />
        <img
          src={materiaExame2}
          alt=""
          className="aspect-[391/250] w-full rounded-[0.78cqw] object-cover shadow-[0_10px_20px_rgba(13,23,62,0.12)]"
          draggable="false"
        />
        <img
          src={materiaBrazilJournal}
          alt=""
          className="aspect-[391/250] w-full rounded-[0.78cqw] object-cover shadow-[0_10px_20px_rgba(13,23,62,0.12)]"
          draggable="false"
        />
        <img
          src={materiaMoneyTimes}
          alt=""
          className="aspect-[391/250] w-full rounded-[0.78cqw] object-cover shadow-[0_10px_20px_rgba(13,23,62,0.12)]"
          draggable="false"
        />
      </div>

      <img
        src={logoCirculo}
        alt=""
        className="absolute left-[50%] top-[33.85%] z-10 h-[6.5cqw] w-[6.5cqw] -translate-x-1/2 -translate-y-1/2 select-none"
        draggable="false"
      />

      <div className="absolute left-0 top-[72.7%] w-[41.8cqw]">
        <img src={svgBox} alt="" className="w-full select-none" draggable="false" />
        <p className={punchlineBoxTextClassName}>
          {renderPunchlineText(presentationTextContent.whoWeArePunchline)}
        </p>
      </div>
    </section>
  </div>
);
