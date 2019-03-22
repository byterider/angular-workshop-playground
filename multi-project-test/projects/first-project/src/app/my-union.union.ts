export type MyUnionHouse = 'A' | 'B' | 'C';

export interface MyUnionBase {
  house: MyUnionHouse;
}

export interface A extends MyUnionBase {
  house: 'A';
  a: 1;
}

export interface B extends MyUnionBase {
  house: 'B';
  b: 2;
}

export interface C extends MyUnionBase {
  house: 'C';
  c: 3;
}

export type MyUnion = A | B | C;
