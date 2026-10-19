const DIAGNOSTIC_AREAS = ['Financeiro', 'Jurídico', 'Patrimonial', 'Tempo'];

export const DiagnosticsIntroSlide = () => (
  <div
    className="relative h-full overflow-hidden bg-[#f0f0f0] font-excon text-[#253793] [container-type:size]"
    style={{
      background:
        'linear-gradient(200.49deg, rgba(0, 2, 63, 0.024) 46.29%, rgba(11, 38, 194, 0.15) 80.3%), linear-gradient(90deg, #f0f0f0 0%, #f0f0f0 100%)'
    }}
  >
    <section className="absolute left-[5.2%] top-[41.45%]">
      <div className="flex items-center gap-[0.72cqw]">
        {DIAGNOSTIC_AREAS.map((area) => (
          <span
            key={area}
            className="inline-flex h-[2.45cqw] items-center justify-center rounded-full bg-[#2864ed] px-[1.48cqw] text-[1.02cqw] font-[500] leading-none tracking-[-0.01em] text-white"
          >
            {area}
          </span>
        ))}
      </div>

      <h1 className="mt-[1.05cqw] whitespace-nowrap text-[3.35cqw] font-[400] leading-[1.02] tracking-[-0.025em]">
        Diagnóstico <span className="font-[700]">HomeCash®</span>
      </h1>
    </section>

    <p className="absolute left-[46.9%] top-1/2 w-[47.2%] -translate-y-1/2 text-[1.73cqw] font-[400] leading-[1.34] tracking-[0.006em]">
      Os gráficos não representam previsões financeiras, jurídicas ou patrimoniais. São simulações estratégicas desenvolvidas para ilustrar os impactos do tempo e da inércia, refletindo padrões normalmente observados em cenários de pressão financeira, patrimonial, jurídica ou operacional.
    </p>
  </div>
);
