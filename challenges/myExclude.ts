/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in `Exclude<T, U>`

  > Exclude from `T` those types that are assignable to `U`

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */
// U必须是T中的一种,u一定是t的子集
// T extends U这个类型一定是never（U不是T的自己，这个类型没有，限制了u是T的子集）
// 如果U是T的子集的话，这个类型还必须是T（这就是为什么冒号后面是T）
// 你还要看这个表达式要返回什么，T extends U ---》 never 说明 U
// type MyExclude<T, U> = T extends U ? never : T

/* _____________ Your Code Here _____________ */
// U必须是T中的一种,u一定是t的子集
// T extends U这个类型一定是never（U不是T的自己，这个类型没有，限制了u是T的子集）
// 如果U是T的子集的话，这个类型还必须是T（这就是为什么冒号后面是T）
// 你还要看这个表达式要返回什么，T extends U ---》 never 说明 U
type MyExclude<T, U> = T extends U ? never : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
