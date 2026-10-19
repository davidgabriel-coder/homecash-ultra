export const pctX = (value) => `${(value / 1920) * 100}%`;
export const pctY = (value) => `${(value / 1080) * 100}%`;
export const absoluteBox = (x, y, width, height) => ({
  left: pctX(x),
  top: pctY(y),
  width: pctX(width),
  height: pctY(height)
});
