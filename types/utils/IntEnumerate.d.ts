declare type IntEnumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : IntEnumerate<N, [...Acc, Acc['length']]>;
