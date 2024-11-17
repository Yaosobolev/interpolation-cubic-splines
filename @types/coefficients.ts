export interface CoefficientsMatrix {
  A: {
    value: number;
    id: number;
  }[];
  B: {
    value: number;
    id: number;
  }[];
  C: {
    value: number;
    id: number;
  }[];
  D: {
    value: number;
    id: number;
  }[];
  E: {
    value: number;
    id: number;
  }[];
  sigma: number[];
  h: {
    value: number;
    id: number;
  }[];
}
