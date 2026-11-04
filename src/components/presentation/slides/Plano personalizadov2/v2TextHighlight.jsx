/**
 * Texto vindo da planilha: o trecho entre [colchetes] vai na classe de destaque, sem os colchetes.
 * Ex.: "Desde 2020, ao lado de quem está [sob pressão]".
 */
export const renderBracketHighlight = (text, highlightClassName = 'font-[700] text-[#235CE9]') =>
  String(text ?? '')
    .split(/(\[[^\]]*\])/)
    .map((part, index) =>
      part.startsWith('[') && part.endsWith(']') ? (
        <span key={index} className={highlightClassName}>
          {part.slice(1, -1)}
        </span>
      ) : (
        part
      )
    );
