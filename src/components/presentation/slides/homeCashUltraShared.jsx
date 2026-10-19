export const HOME_CASH_ULTRA_COLORS = {
  ink: '#1C2D7F',
  navy: '#1C2D7F',
  gold: '#EDB424',
  canvas: '#f1f1f3',
  muted: '#717ba9',
  green: '#2ca667',
  paleGreen: '#e6f4eb'
};

export const HomeCashUltraCanvas = ({ children, className = '' }) => (
  <div className={`relative h-full w-full overflow-hidden bg-[#f1f1f3] font-excon text-[#1C2D7F] [container-type:size] ${className}`}>
    {children}
  </div>
);

export const HomeCashUltraSectionLabel = ({ number, label, className = '' }) => (
  <div className={`text-[1.06cqw] font-[600] tracking-[-0.01em] text-[#1C2D7F] ${className}`}>
    {number ? <span>{number} · </span> : null}
    {label}
  </div>
);

export const HomeCashUltraTitle = ({ children, className = '' }) => (
  <h1 className={`text-[3.45cqw] font-[700] leading-[1.06] tracking-[-0.035em] text-[#1C2D7F] ${className}`}>{children}</h1>
);

export const HomeCashUltraCard = ({ children, className = '', dark = false }) => (
  <div
    className={`rounded-[1.1cqw] border border-[#1C2D7F]/55 p-[1.55cqw] ${dark ? 'border-[#1C2D7F] bg-[#1C2D7F] text-white' : 'bg-[#f1f1f3] text-[#1C2D7F]'} ${className}`}
  >
    {children}
  </div>
);

export const HomeCashUltraEyebrow = ({ children, className = '' }) => (
  <div className={`text-[0.78cqw] font-[700] uppercase tracking-[0.09em] text-[#64709f] ${className}`}>{children}</div>
);

export const HomeCashUltraAccent = ({ children }) => <span className="text-[#EDB424]">{children}</span>;
