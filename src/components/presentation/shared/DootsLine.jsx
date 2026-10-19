import dootsLine from '../../../assets/doots line.svg';

export const DootsLine = ({ className = '', style }) => (
  <img src={dootsLine} alt="" aria-hidden="true" className={`absolute z-10 block ${className}`} style={style} />
);
