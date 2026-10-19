import rooftopLogo from '../../../assets/rooftop-homecash-logo.svg';

export const CoverSlide = ({ coverTitle, clientName }) => (
  <div className="relative h-full overflow-hidden bg-[#1c2d7f] font-excon text-white [container-type:size]">
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(199.52deg, rgba(0, 84, 240, 0) 0.29419%, rgba(0, 0, 0, 0.53) 99.706%), linear-gradient(90deg, rgb(28, 45, 127) 0%, rgb(28, 45, 127) 100%)'
      }}
    />

    <img
      src={rooftopLogo}
      alt="Rooftop HomeCash"
      className="absolute left-[5.365%] top-[21.852%] w-[36.042cqw] select-none"
      draggable="false"
    />

    <p className="absolute left-[5.156%] top-[48.15%] whitespace-nowrap text-[3.333cqw] font-[400] leading-[1.2] tracking-[0] text-[#f0f0f0]">
      {coverTitle}
    </p>

    <p className="absolute left-[5.156%] top-[65.56%] whitespace-nowrap text-[5cqw] font-[700] leading-[1.2] tracking-[0] text-white">
      {clientName}
    </p>
  </div>
);
