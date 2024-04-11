declare type InferObjectOfFunctionsAfterFirtArg<S, T> = T extends object
  ? {
      [K in keyof T]: T[K] extends (...args: any[]) => any
        ? (arg: S, ...rest: InferFunctionArgsAfterFirstArg<T[K]>) => void
        : never;
    }
  : never;
