import rooftopLogo from '../../../../assets/plano-v2/v2-logo-rooftop.svg';

const V2_NAV_ITEMS = [
  { key: 'diagnostico', label: 'Diagnóstico' },
  { key: 'quem-somos', label: 'Quem somos' },
  { key: 'mecanismo', label: 'Mecanismo' },
  { key: 'plano', label: 'Plano' },
  { key: 'saidas', label: 'Suas saídas' },
  { key: 'proximos-passos', label: 'Próximos passos' }
];

export const V2Canvas = ({ children, className = '' }) => (
  <div
    className={`relative h-full w-full overflow-hidden font-excon text-[#1E203F] [container-type:size] ${className}`}
    style={{ backgroundImage: 'linear-gradient(180deg, #F0F0F0 0%, #E9ECF7 55%, #DCE3F7 100%)' }}
  >
    {children}
  </div>
);

const CARD_TONES = {
  white: 'bg-white text-[#1C2D7F] ring-1 ring-[#1E203F14]',
  primary: 'bg-[#235CE9] text-white',
  navy: 'bg-[#1C2D7F] text-white'
};

export const V2Card = ({ children, className = '', tone = 'white' }) => (
  <div className={`rounded-[1.25cqw] p-[1.6cqw] ${CARD_TONES[tone]} ${className}`}>{children}</div>
);

export const V2Eyebrow = ({ children, className = '' }) => (
  <div className={`text-[0.85cqw] font-[500] uppercase tracking-[0.1em] text-[#235CE9] ${className}`}>{children}</div>
);

const pad = (value) => String(value ?? 0).padStart(2, '0');

export const V2Logo = ({ className = '' }) => (
  <img src={rooftopLogo} alt="Rooftop" className={`w-[6.46cqw] object-contain object-left ${className}`} />
);

/**
 * Cabeçalho das telas de conteúdo: logo, navegação por seção e numeração.
 * `nav` vem do renderer: { section, pageNumber, pageTotal }.
 */
export const V2Header = ({ nav = {} }) => (
  <header className="absolute left-[5%] right-[5%] top-[5.2%] flex h-[2.5cqw] items-center justify-between">
    <div className="flex w-[10.4cqw] shrink-0 items-center pl-[0.42cqw]">
      <V2Logo />
    </div>
    <nav aria-label="Seções da apresentação" className="flex gap-[0.21cqw] rounded-full bg-white p-[0.21cqw] ring-1 ring-[#1E203F14]">
      {V2_NAV_ITEMS.map(({ key, label }) => {
        const active = nav.section === key;

        return (
          <span
            key={key}
            aria-current={active ? 'page' : undefined}
            className={`flex h-[2.08cqw] items-center rounded-full px-[0.94cqw] text-[0.83cqw] font-[500] leading-none ${
              active ? 'bg-[#1C2D7F] text-white' : 'text-[#5A5F7D]'
            }`}
          >
            {label}
          </span>
        );
      })}
    </nav>
    <span className="w-[10.4cqw] shrink-0 text-right text-[0.83cqw] font-[500] tabular-nums text-[#5A5F7D]">
      {pad(nav.pageNumber)} / {pad(nav.pageTotal)}
    </span>
  </header>
);
