declare type InferFunctionArgsAfterFirstArg<T extends (...args: any[]) => any> =
  T extends (arg: any, ...rest: infer R) => any ? R : never;
