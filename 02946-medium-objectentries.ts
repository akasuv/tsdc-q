// ============= Test Cases =============
import type { Equal, Expect, ExpectExtends } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>
];

// ============= Your Code Here =============
type ObjectEntries<T, U extends keyof T = keyof T> = U extends unknown
  ? [
      U,
      T[U] extends infer V | undefined
        ? V extends never
          ? undefined
          : V
        : T[U]
    ]
  : never;
