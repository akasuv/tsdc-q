// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
];

// ============= Your Code Here =============
type PartialByKeys<T, K extends keyof any = keyof T> = {
  [Key in keyof T as Key extends K ? Key : never]?: T[Key];
} & { [Key in keyof T as Key extends K ? never : Key]: T[Key] } extends infer O
  ? { [Key in keyof O]: O[Key] }
  : never;
