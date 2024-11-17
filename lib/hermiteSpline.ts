export const hermiteSpline = (
  x: number[],
  xStar: number,
  y: number[],
  m: number[],
  h: {
    value: number;
    id: number;
  }[]
) => {
  let s;

  for (let i = 1; i < x.length - 1; i++) {
    if (xStar > x[i] && xStar < x[i + 1]) {
      const t = (xStar - x[i]) / h[i].value;
      s =
        y[i] * (1 - 3 * Math.pow(t, 2) + 2 * Math.pow(t, 3)) +
        y[i + 1] * (3 * Math.pow(t, 2) - 2 * Math.pow(t, 3)) +
        m[i] * h[i].value * (t - 2 * Math.pow(t, 2) + Math.pow(t, 3)) +
        m[i + 1] * h[i].value * (Math.pow(t, 3) - Math.pow(t, 2));
      break;
    }
  }

  return s;
};
