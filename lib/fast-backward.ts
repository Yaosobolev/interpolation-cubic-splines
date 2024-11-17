export const fastBackward = (alpha: number[], beta: number[], Sb: number) => {
  const m: number[] = [Sb]; // S`(b)

  for (let i = 1; i < alpha.length + 1; i++) {
    m.unshift(alpha[alpha.length - i] * m[i - 1] + beta[alpha.length - i]);
  }

  return m;
};
