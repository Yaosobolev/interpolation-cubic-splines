export const fastForward = (
  a: { value: number; id: number }[],
  b: { value: number; id: number }[],
  c: { value: number; id: number }[],
  d: { value: number; id: number }[],
  e: { value: number; id: number }[],
  h: { value: number; id: number }[],
  f: number[],
  Sa: number
) => {
  const alpha: number[] = [0];
  const beta: number[] = [Sa]; // S`(a)

  for (let i = 1; i < a.length; i++) {
    const denominator = a[i - 1].value * alpha[i - 1] + b[i - 1].value;

    alpha.push(-c[i - 1].value / denominator);

    beta.push(
      ((d[i - 1].value * (f[i + 1] - f[i])) / h[i - 1].value +
        (e[i - 1].value * (f[i] - f[i - 1])) / h[i - 1].value -
        a[i - 1].value * beta[i - 1]) /
        denominator
    );
  }

  return {
    alpha,
    beta,
  };
};
