/// <reference path="./IntEnumerate.d.ts" />

declare type IntRange<F extends number, T extends number> = Exclude<
  IntEnumerate<T>,
  IntEnumerate<F>
>;
