// 类型别名
type A = string;

// 抽离一组联合类型：
type StatusCode = 200 | 301 | 400 | 500 | 502;
type PossibleDataTypes = string | number | (() => unknown);
const status: StatusCode = 502;

// 抽离一个函数类型：
type Handler = (e: Event) => void;
const clickHandler: Handler = (e) => { };
const moveHandler: Handler = (e) => { };
const dragHandler: Handler = (e) => { };

// 声明一个对象类型，就像接口那样：
type ObjType = {
  name: string;
  age: number;
}

// 类型别名还能作为工具类型。工具类同样基于类型别名，只是多了个泛型
// 工具类型就像一个函数一样，泛型是入参，内部逻辑基于入参进行某些操作，再返回一个新的类型
type Factory<T> = T | number | string;

// 简单接受了一个泛型，然后把它作为联合类型的一个成员，返回了这个联合类型
const foo: Factory<boolean> = true;

// 我们一般不会直接使用工具类型来做类型标注，而是再度声明一个新的类型别名：
type FactoryWithBool = Factory<boolean>;
const foo: FactoryWithBool = true;

// 泛型参数的名称（上面的 T ）也不是固定的。通常我们使用大写的 T / K / U / V / M / O ...这种形式。
// 如果为了可读性考虑，我们也可以写成大驼峰形式（即在驼峰命名的基础上，首字母也大写）的名称
type Factory<NewType> = NewType | number | string;

// 声明一个简单、有实际意义的工具类型：
type MaybeNull<T> = T | null;
// 这个工具类型会接受一个类型，并返回一个包括 null 的联合类型。
// 这样一来，在实际使用时就可以确保你处理了可能为空值的属性读取与方法调用：
type MaybeNull<T> = T | null;
function process(input: MaybeNull<{ handler: () => {} }>) {
  input?.handler();
}

// 类似的还有 MaybePromise、MaybeArray。这也是我在日常开发中最常使用的一类工具类型：
type MaybeArray<T> = T | T[];
// 函数泛型我们会在后面了解~
function ensureArray<T>(input: MaybeArray<T>): T[] {
  return Array.isArray(input) ? input : [input];
}

// 另外，类型别名中可以接受任意个泛型，以及为泛型指定约束、默认值等
// 对于工具类型来说，它的主要意义是基于传入的泛型进行各种类型操作，得到一个新的类型。而这个类型操作的指代就非常非常广泛了


// 联合类型与交叉类型

// 联合类型还有一个和它有点像的孪生兄弟：交叉类型
// 联合类型的符号是|，它代表了按位或，即只需要符合联合类型中的一个类型，既可以认为实现了这个联合类型，如A | B，只需要实现 A 或 B 即可
// 按位与的 & 则不同，你需要符合这里的所有类型，才可以说实现了这个交叉类型，即 A & B，需要同时满足 A 与 B 两个类型才行

// 交叉类型
// ProfileStruct 其实就是一个新的，同时包含 NameStruct 和 AgeStruct 两个接口所有属性的类型。这里是对于对象类型的合并
interface NameStruct {
  name: string;
}
interface AgeStruct {
  age: number;
}
type ProfileStruct = NameStruct & AgeStruct;
const profile: ProfileStruct = {
  name: "linbudu",
  age: 18
}

// 那对于原始类型呢
type StrAndNum = string & number; // never  -》  描述根本不存在的类型

// 对于对象类型的交叉类型，其内部的同名属性类型同样会按照交叉类型进行合并：
type Struct1 = {
  primitiveProp: string;
  objectProp: {
    name: string;
  }
}
type Struct2 = {
  primitiveProp: number;
  objectProp: {
    age: number;
  }
}
type Composed = Struct1 & Struct2;
type PrimitivePropType = Composed['primitiveProp']; // never
type ObjectPropType = Composed['objectProp']; // { name: string; age: number; }

type UnionIntersection1 = (1 | 2 | 3) & (1 | 2); // 1 | 2
type UnionIntersection2 = (string | number | symbol) & string; // string
// 总结一下交叉类型和联合类型的区别就是，联合类型只需要符合成员之一即可（||），而交叉类型需要严格符合每一位成员（&&）。


// 索引类型----索引签名类型、索引类型查询与索引类型访问
// 它们都通过索引的形式来进行类型操作，但索引签名类型是声明，后两者则是读取

// 索引签名类型
// 在接口或类型别名中，通过以下语法来快速声明一个键值类型一致的类型结构：
interface AllStringTypes {
  [key: string]: string;
}
type AllStringTypes = {
  [key: string]: string;
}

