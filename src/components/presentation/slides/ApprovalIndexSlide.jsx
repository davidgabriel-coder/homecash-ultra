import semiCircle98 from '../../../assets/approval-index/semi-circle.svg';
import semiCircle96 from '../../../assets/approval-index/semi-circle-96.svg';

const approvalSlideCopy = {
  approval: {
    titlePrefix: 'Índice de aprovação dos clientes',
    subtitle: 'De acordo com nossos clientes essa é o índice de aprovação do HomeCash',
    percent: '98%',
    semiCircle: semiCircle98
  },
  referral: {
    titlePrefix: 'Índice de Recomendação dos clientes',
    subtitle: 'De acordo com nossos clientes essa é o índice de indicação do HomeCash',
    percent: '96%',
    semiCircle: semiCircle96
  }
};

export const ApprovalIndexSlide = ({ variant = 'approval' }) => {
  const copy = approvalSlideCopy[variant] ?? approvalSlideCopy.approval;

  return (
    <div className="relative h-full overflow-hidden bg-[#f0f0f0] font-excon text-[#1c2d7f] [container-type:size]">
    <div className="absolute inset-0 bg-[linear-gradient(213.59deg,rgba(0,2,63,0.024)_46.29%,rgba(11,38,194,0.15)_80.3%),linear-gradient(90deg,#f0f0f0_0%,#f0f0f0_100%)]" />

    <h1 className="absolute left-1/2 top-[9.35%] z-10 w-[88%] -translate-x-1/2 whitespace-nowrap text-center text-[3.33cqw] font-[400] leading-[4.74cqw] tracking-[0] text-[#1c2d7f]">
      {copy.titlePrefix} <span className="font-[700]">HomeCash</span>
      <sup className="ml-[0.18cqw] align-super text-[1.42cqw] font-[700] leading-none">®</sup>
    </h1>

    <p className="absolute left-1/2 top-[17.78%] z-10 w-[59.17%] -translate-x-1/2 text-center text-[1.67cqw] font-[400] leading-[2.34cqw] tracking-[0] text-[rgba(28,45,127,0.7)]">
      {copy.subtitle}
      <sup className="ml-[0.06cqw] align-super text-[0.78cqw] font-[700] leading-none">®</sup>
    </p>

    <img
      src={copy.semiCircle}
      alt=""
      className="absolute left-[23.7%] top-[29.2%] h-auto w-[52.55cqw] select-none"
      draggable="false"
    />

    <div
      className="absolute left-1/2 top-[45.46%] z-10 w-[23.54%] -translate-x-1/2 bg-[linear-gradient(360deg,#dedfe7_-34.68%,rgba(255,255,255,0)_100%),linear-gradient(0deg,#1c2d7f,#1c2d7f)] bg-clip-text text-center text-[11.35cqw] font-[500] leading-[16.15cqw] tracking-[0] text-transparent"
    >
      {copy.percent}
    </div>
    </div>
  );
};
