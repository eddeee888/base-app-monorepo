type Omit<T, K extends keyof any> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;

export default Omit;
