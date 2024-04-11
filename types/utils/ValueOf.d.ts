declare type ValuesOf<T> =
  T extends Record<infer K, infer V> ? Record<K, V>[keyof Record<K, V>] : never;
