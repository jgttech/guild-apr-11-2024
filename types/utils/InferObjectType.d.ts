declare type InferObjectType<T> = T extends object
  ? { [K in keyof T]: InferObjectType<T[K]> }
  : T;
