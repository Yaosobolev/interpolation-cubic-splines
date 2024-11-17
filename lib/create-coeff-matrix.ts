import { CoefficientsMatrix } from "@/@types/coefficients";

export const createCoeffMatrix = (
  x: number[],
  y: number[],
  n: number
): CoefficientsMatrix => {
  const h = Array(n)
    .fill(0)
    .map((_, i) => ({ value: x[i + 1] - x[i], id: i }));
  const sigma = Array(n).fill(0);

  const A = [],
    B = [],
    C = [],
    D = [],
    E = [];
  for (let i = 1; i <= n - 1; i++) {
    A.push({
      value: -2 / h[i - 1].value + (sigma[i] * 6) / Math.pow(h[i - 1].value, 2),
      id: i,
    });
    B.push({
      value:
        -4 / h[i].value -
        4 / h[i - 1].value -
        (sigma[i] * 6) / Math.pow(h[i].value, 2) +
        (sigma[i] * 6) / Math.pow(h[i - 1].value, 2),
      id: i,
    });
    C.push({
      value: -2 / h[i].value - (sigma[i] * 6) / Math.pow(h[i].value, 2),
      id: i,
    });
    D.push({
      value: -6 / h[i].value - (sigma[i] * 12) / Math.pow(h[i].value, 2),
      id: i,
    });
    E.push({
      value:
        -6 / h[i - 1].value + (sigma[i] * 12) / Math.pow(h[i - 1].value, 2),
      id: i,
    });
  }

  return {
    A,
    B,
    C,
    D,
    E,
    sigma,
    h,
  };
};
