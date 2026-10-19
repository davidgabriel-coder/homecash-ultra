import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const resolveDotValue = ({ value, payload, dataKey }) => {
  const directValue = Array.isArray(value) ? value[value.length - 1] : value;
  const payloadValue = dataKey ? payload?.[dataKey] : payload?.value;
  const fallbackValue = payload?.value;
  const resolvedValue = directValue ?? payloadValue ?? fallbackValue ?? 0;
  const number = Number(resolvedValue);

  return Number.isFinite(number) ? number : 0;
};

const ChartDot = ({
  cx,
  cy,
  stroke,
  color,
  payload,
  value,
  dataKey,
  formatValue,
  viewBox,
  index,
  dataLength,
  compact = false,
  labelSize,
  labelWeight,
  labelOffsetY,
  showLabels = true,
  alwaysShowFinalLabel = false,
  showOnlyEndpoints = false
}) => {
  if (cx == null || cy == null) return null;

  const isFinalPoint = index === dataLength - 1;
  const shouldShowLabel =
    alwaysShowFinalLabel && isFinalPoint ? true : showLabels && (!showOnlyEndpoints || index === 0 || isFinalPoint);
  const dotColor = color ?? stroke;
  const label = formatValue(resolveDotValue({ value, payload, dataKey }));
  const leftBound = viewBox?.x ?? 0;
  const topBound = viewBox?.y ?? 0;
  const rightBound = leftBound + (viewBox?.width ?? 0);
  const bottomBound = topBound + (viewBox?.height ?? 0);
  const nearTop = cy <= topBound + 28;
  const nearBottom = cy >= bottomBound - 20;
  const nearRight = viewBox ? cx >= rightBound - 72 : false;
  const nearLeft = viewBox ? cx <= leftBound + 24 : false;
  const hasCustomOffset = Number.isFinite(labelOffsetY);
  const placeBelow = nearTop && !nearBottom;
  const resolvedOffsetY = hasCustomOffset && !placeBelow ? labelOffsetY : placeBelow ? 18 : -16;
  const labelY = cy + resolvedOffsetY;
  const textAnchor = nearRight ? 'end' : nearLeft ? 'start' : 'middle';
  const labelX = nearRight ? cx - 24 : nearLeft ? cx + 18 : cx;

  return (
    <g>
      <circle cx={cx} cy={cy} r={compact ? 4.5 : 6} fill={dotColor} stroke="#fff" strokeWidth={2} />
      {shouldShowLabel ? (
        <text
          x={labelX}
          y={labelY}
          textAnchor={textAnchor}
          dominantBaseline={placeBelow ? 'hanging' : 'auto'}
          fill={dotColor}
          fontSize={labelSize ?? (compact ? 11 : 13)}
          fontWeight={labelWeight ?? 700}
        >
          {label}
        </text>
      ) : null}
    </g>
  );
};


const getSeriesDomain = (data, seriesKey) => {
  const values = data.map((point) => Number(point[seriesKey]) || 0);
  const min = Math.min(...values);
  const max = Math.max(...values);

  return min === max ? [0, max || 1] : [min, max];
};

const getPaddedSeriesDomain = (data, seriesKey) => {
  const values = data.map((point) => Number(point[seriesKey]) || 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, max * 0.1, 1);
  const lowerBound = values[0] ?? min;

  return [lowerBound, max + range * 0.22];
};

const getEvenTicks = ([lowerBound, upperBound]) =>
  [0, 1, 2, 3, 4].map((step) => lowerBound + ((upperBound - lowerBound) / 4) * step);

const SeriesAreaChart = ({
  data,
  series,
  gradientId,
  dotFormat,
  yTickFormat,
  yAxisDomain,
  yAxisTicks,
  yAxisInterval,
  yAxisWidth,
  xAxisInterval,
  axisTickWeight,
  compact,
  labelSize,
  labelWeight,
  labelOffsetY,
  showAxes = true,
  showLabels = true,
  margin,
  curveType = 'monotone',
  strokeWidth,
  showOnlyEndpoints = false
}) => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={data} margin={margin}>
      <defs>
        <linearGradient id={`${gradientId}-${series.key}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={series.color} stopOpacity={series.isTotal ? 0.34 : 0.22} />
          <stop offset="100%" stopColor={series.color} stopOpacity={0.03} />
        </linearGradient>
      </defs>
      {showAxes ? <CartesianGrid vertical={false} stroke="#e2e8f0" /> : null}
      <XAxis
        dataKey="month"
        axisLine={false}
        tickLine={false}
        hide={!showAxes}
        tick={{ fill: '#475569', fontSize: compact ? 10 : 12, fontWeight: axisTickWeight ?? 600 }}
        tickMargin={6}
        dy={8}
        interval={xAxisInterval ?? (compact ? 1 : 0)}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        hide={!showAxes}
        tick={{ fill: '#475569', fontSize: compact ? 10 : 12, fontWeight: axisTickWeight ?? 600 }}
        tickFormatter={yTickFormat}
        domain={yAxisDomain}
        ticks={yAxisTicks}
        interval={yAxisInterval}
        width={yAxisWidth ?? (compact ? 48 : 58)}
        tickMargin={8}
        dx={-3}
      />
      <Area
        type={curveType}
        dataKey={series.key}
        stroke={series.color}
        strokeWidth={strokeWidth ?? (series.isTotal ? 3 : 2)}
        fill={`url(#${gradientId}-${series.key})`}
        fillOpacity={1}
        dot={
          <ChartDot
            dataKey={series.key}
            color={series.color}
            formatValue={dotFormat}
            compact={compact}
            labelSize={labelSize}
            labelWeight={labelWeight}
            labelOffsetY={labelOffsetY}
            showLabels={showLabels}
            showOnlyEndpoints={showOnlyEndpoints || !series.isTotal}
            dataLength={data.length}
          />
        }
        activeDot={{ r: series.isTotal ? 7 : 5, strokeWidth: 0 }}
        animationDuration={1000}
      />
    </AreaChart>
  </ResponsiveContainer>
);

const MiniSeriesCard = ({ data, series, gradientId, dotFormat, compact }) => {
  const lastValue = data.at(-1)?.[series.key] ?? 0;
  const isOtherDebtsSeries = series.key === 'otherDebts';

  return (
    <div className="flex min-h-0 flex-col overflow-hidden rounded-[10px] border border-[rgba(28,45,127,0.14)] bg-white px-2 py-1.5 shadow-[0_4px_12px_rgba(28,45,127,0.04)]">
      <div className="flex shrink-0 items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: series.color }} />
          <span className="truncate text-[9px] font-bold leading-none text-[#1c2d7f]">{series.label}</span>
        </div>
        <span className="shrink-0 text-[9px] font-bold leading-none" style={{ color: series.color }}>
          {dotFormat(lastValue)}
        </span>
      </div>
      {series.detail ? (
        <div className="mt-1 truncate text-[12px] font-bold leading-none text-[rgba(28,45,127,0.68)]">{series.detail}</div>
      ) : null}
      <div className="min-h-0 flex-1">
        <SeriesAreaChart
          data={data}
          series={series}
          gradientId={gradientId}
          dotFormat={dotFormat}
          yTickFormat={dotFormat}
          yAxisDomain={getSeriesDomain(data, series.key)}
          compact={compact}
          labelSize={0}
          showAxes={false}
          showLabels={false}
          curveType={isOtherDebtsSeries ? 'natural' : 'monotone'}
          strokeWidth={isOtherDebtsSeries ? 2.8 : 2}
          margin={{ top: 6, right: 4, left: 4, bottom: 2 }}
        />
      </div>
    </div>
  );
};

export const PanelShell = ({ number, title, subtitle, badge, disclaimer, children, className = '', compact = false }) => (
  <section className={`flex h-full min-h-0 flex-col overflow-hidden bg-white ${className}`}>
    <div
      className={`flex shrink-0 items-start justify-between gap-3 px-4 ${
        compact ? 'min-h-[52px] pt-3' : 'min-h-[66px] pt-4 xl:px-5 xl:pt-5'
      }`}
    >
      <div className="min-w-0 flex-1">
        <h2 className={`${compact ? 'text-[18px]' : 'text-[23px]'} font-bold leading-none tracking-[-0.04em] text-[#1c2d7f]`}>
          {number}. {title}
        </h2>
        <p className={`mt-1 text-[12px] leading-tight text-[#1c2d7f] ${compact ? 'line-clamp-1 max-w-[320px]' : 'max-w-[270px]'}`}>
          {subtitle}
        </p>
      </div>

      {badge ? (
        <div className="inline-flex min-h-[24px] max-w-[48%] shrink-0 items-center justify-center whitespace-normal rounded-[5px] bg-[#1c2d7f] px-3 py-1 text-center text-[11px] font-medium uppercase leading-snug tracking-wide text-[#f0f0f0] [overflow-wrap:anywhere]">
          {badge}
        </div>
      ) : null}
    </div>

    <div className={`min-h-0 flex-1 px-4 ${compact ? 'pb-2 pt-1' : 'pb-3 pt-2 xl:px-5 xl:pb-4'}`}>{children}</div>

    {disclaimer ? (
      <div
        className={`flex shrink-0 items-start gap-2 border-t border-[rgba(28,45,127,0.12)] bg-[#f8faff] px-4 text-[#1c2d7f] xl:px-5 ${
          compact ? 'min-h-[42px] py-1.5' : 'min-h-[34px] py-2'
        }`}
        title={disclaimer}
      >
        <span className="mt-0.5 shrink-0 rounded-full border border-[rgba(28,45,127,0.28)] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em]">
          Metodologia
        </span>
        <span className="min-w-0 whitespace-normal text-[10px] font-medium leading-tight text-[rgba(28,45,127,0.72)] [overflow-wrap:anywhere] [word-break:normal]">
          {disclaimer}
        </span>
      </div>
    ) : null}
  </section>
);

const InfoStrip = ({ items }) => (
  <div className="rounded-[12px] border border-[rgba(28,45,127,0.5)] bg-white">
    <div className="grid grid-cols-1 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`flex items-center gap-3 px-3 py-2.5 ${index > 0 ? 'md:border-l md:border-[#cbd5e1]' : ''}`}
        >
          <div className={item.iconWrapClassName} style={item.style}>
            {item.icon}
          </div>
          <div className="uppercase">
            <div className="text-[10px] leading-tight text-[rgba(28,45,127,0.7)]">{item.label}</div>
            <div className={item.valueClassName ?? 'mt-0.5 text-[15px] font-bold leading-tight text-[#1c2d7f]'}>
              {item.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const InsightStrip = ({ items, compact = false }) => {
  if (!items?.length) return null;

  return (
    <div
      className={`absolute left-0 right-0 top-0 z-10 flex items-center justify-center gap-2 ${
        compact ? 'hidden' : ''
      }`}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(28,45,127,0.14)] bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[#1c2d7f] shadow-[0_4px_12px_rgba(28,45,127,0.06)]"
        >
          {item.color ? <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} /> : null}
          <span className="text-[rgba(28,45,127,0.62)]">{item.label}</span>
          <span style={item.color ? { color: item.color } : undefined}>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export const ChartPanel = ({
  data,
  stroke,
  series,
  gradientId,
  dotFormat,
  yTickFormat,
  badge,
  infoItems,
  insightItems,
  yAxisDomain,
  yAxisTicks,
  yAxisInterval,
  xAxisInterval,
  axisTickWeight,
  dotLabelSize,
  dotLabelWeight,
  className = '',
  compact = false
}) => {
  const chartSeries =
    series?.map((item) => ({
      ...item,
      color: item.color ?? stroke
    })) ?? [];
  const labelOffset = compact ? -18 : -22;
  const totalSeries = chartSeries.find((item) => item.isTotal) ?? chartSeries[0];
  const detailSeries = chartSeries.filter((item) => item.key !== totalSeries?.key);
  const hasSeriesBreakdown = detailSeries.length > 0;
  const totalValue = totalSeries ? data.at(-1)?.[totalSeries.key] ?? 0 : 0;

  return (
    <div className={`flex h-full flex-col ${className}`}>
      {compact ? (
        <div
          className={`grid shrink-0 overflow-hidden rounded-[10px] border border-[rgba(28,45,127,0.5)] bg-white ${
            infoItems.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'
          }`}
        >
          {infoItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex min-w-0 items-center gap-3 px-3 py-2.5 uppercase ${index > 0 ? 'border-l border-[#e2e8f0]' : ''}`}
            >
              <div className={`${item.iconWrapClassName} shrink-0`} style={item.style}>
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="truncate text-[10px] leading-tight text-[rgba(28,45,127,0.7)]">{item.label}</div>
                <div className="mt-1 truncate text-[17px] font-bold leading-tight text-[#1c2d7f]">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <InfoStrip items={infoItems} />
      )}

      <div className={`relative flex min-h-0 flex-1 flex-col ${compact ? 'mt-1' : 'mt-3'}`}>
        {badge ? (
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-[5px] bg-[#1c2d7f] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#f0f0f0]">
            {badge}
          </div>
        ) : null}
        {!badge ? <InsightStrip items={insightItems} compact={compact} /> : null}

        <div className={`min-h-0 flex-1 overflow-visible ${compact ? 'pt-1' : 'pt-7'}`}>
          {hasSeriesBreakdown ? (
            <div
              className={`grid h-full min-h-0 ${
                compact ? 'grid-cols-[minmax(0,1.52fr)_minmax(98px,0.48fr)] gap-2' : 'grid-cols-[minmax(0,1.45fr)_minmax(170px,0.55fr)] gap-3'
              }`}
            >
              <div className="flex min-h-0 flex-col overflow-hidden rounded-[14px] border border-[rgba(28,45,127,0.18)] bg-white shadow-[0_10px_26px_rgba(28,45,127,0.05)]">
                <div className="flex shrink-0 items-start justify-between gap-2 border-b border-[rgba(28,45,127,0.1)] px-3 py-2">
                  <div className="min-w-0">
                    <div className="truncate text-[10px] font-bold uppercase tracking-[0.08em] text-[rgba(28,45,127,0.62)]">
                      Projeção total
                    </div>
                    <div className={`${compact ? 'text-[14px]' : 'text-[18px]'} mt-0.5 font-bold leading-none text-[#1c2d7f]`}>
                      {totalSeries?.label ?? 'Total projetado'}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[rgba(28,45,127,0.58)]">36 meses</div>
                    <div
                      className="mt-0.5 leading-none"
                      style={{
                        color: totalSeries.color,
                        fontSize: `${dotLabelSize ?? (compact ? 12 : 14)}px`,
                        fontWeight: dotLabelWeight ?? 900
                      }}
                    >
                      {dotFormat(totalValue)}
                    </div>
                  </div>
                </div>
                <div className="min-h-0 flex-1">
                  <SeriesAreaChart
                    data={data}
                    series={totalSeries}
                    gradientId={gradientId}
                    dotFormat={dotFormat}
                    yTickFormat={yTickFormat}
                    yAxisDomain={getPaddedSeriesDomain(data, totalSeries.key)}
                    yAxisTicks={getEvenTicks(getPaddedSeriesDomain(data, totalSeries.key))}
                    yAxisInterval={yAxisInterval}
                    xAxisInterval={xAxisInterval}
                    axisTickWeight={axisTickWeight}
                    compact={compact}
                    labelSize={dotLabelSize ?? (compact ? 12 : 14)}
                    labelWeight={dotLabelWeight}
                    labelOffsetY={labelOffset}
                    showOnlyEndpoints={compact}
                    yAxisWidth={compact ? 58 : 68}
                    margin={compact ? { top: 18, right: 54, left: 6, bottom: 14 } : { top: 24, right: 68, left: 10, bottom: 18 }}
                  />
                </div>
              </div>

              <div
                className="grid min-h-0 gap-1.5"
                style={{ gridTemplateRows: `repeat(${detailSeries.length}, minmax(0, 1fr))` }}
              >
                {detailSeries.map((item) => (
                  <MiniSeriesCard
                    key={item.key}
                    data={data}
                    series={item}
                    gradientId={gradientId}
                    dotFormat={dotFormat}
                    compact={compact}
                  />
                ))}
              </div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={compact ? { top: 30, right: 30, left: 0, bottom: 2 } : { top: 34, right: 44, left: 10, bottom: 6 }}
              >
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={stroke} stopOpacity={0.8} />
                    <stop offset="100%" stopColor={stroke} stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#e2e8f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#475569', fontSize: compact ? 10 : 12, fontWeight: axisTickWeight ?? 600 }}
                  tickMargin={6}
                  dy={8}
                  interval={xAxisInterval ?? (compact ? 1 : 0)}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#475569', fontSize: compact ? 10 : 12, fontWeight: axisTickWeight ?? 600 }}
                  tickFormatter={yTickFormat}
                  domain={yAxisDomain}
                  ticks={yAxisTicks}
                  interval={yAxisInterval}
                  width={compact ? 48 : 58}
                  tickMargin={6}
                  dx={-2}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={stroke}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill={`url(#${gradientId})`}
                  activeDot={{ r: 7, strokeWidth: 0 }}
                  dot={
                    <ChartDot
                      dataKey="value"
                      formatValue={dotFormat}
                      compact={compact}
                      labelSize={dotLabelSize}
                      labelWeight={dotLabelWeight}
                      dataLength={data.length}
                    />
                  }
                  animationDuration={1000}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};
