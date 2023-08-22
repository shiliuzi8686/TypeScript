// null、undefined  
// --》这两者在没有开启 strictNullChecks 检查的情况下，会被视作其他类型的子类型
const nullTest: null = null
const undeTest: undefined = undefined
// const tmp3: string = null; // 仅在关闭 strictNullChecks 时成立，下同
// const tmp4: string = undefined;


// string
const superTypeStr1: string = null
const superTypeStr2: string = undefined

// number
const age: number = 24;

// boolean
const male: boolean = false;

// object-所有非原始类型的类型，即数组、对象与函数类型这些：
const obj: object = { name, age, male };

// Object
// 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
const tmp1: Object = undefined;
const tmp2: Object = null;
const tmp3: Object = void 0;

const tmp4: Object = 'linbudu';
const tmp5: Object = 599;
const tmp6: Object = { name: 'linbudu' };
const tmp7: Object = () => {};
const tmp8: Object = [];
// Object 类似的还有 Boolean、Number、String、Symbol，这几个装箱类型（Boxed Types） 同样包含了一些超出预期的类型
const tmp9: String = undefined;
const tmp10: String = null;
const tmp11: String = void 0;
const tmp12: String = 'linbudu';
// 以下不成立，因为不是字符串类型的拆箱类型
// const tmp13: String = 599; // X
// const tmp14: String = { name: 'linbudu' }; // X
// const tmp15: String = () => {}; // X
// const tmp16: String = []; // X
// 在任何情况下，你都不应该使用这些装箱类型。

// { }


// symbol
const symbolVar: symbol = Symbol('unique');

// bigint
// const bigintVar1: bigint = 9007199254740991n;
// const bigintVar2: bigint = BigInt(9007199254740991);

// void
function func1() {} //返回值类型被隐式推导为void
function func2() {  //返回值类型被隐式推导为void
    return
}

const voidVar1: void = null //关闭 strictNullChecks的情况下，否则报错
const voidVar2: void = undefined //关闭 strictNullChecks的情况下

// 数组
const arr1: string[] = []
const arr2: Array<string> = []
// arr1[1]
const [str1, str2, rest1] = arr1
// 具名元组
const arr7: [name: string, age: number, male: boolean] = ['linbudu', 599, true];
// 数组的显式越界访问和隐式越界访问
    // const arr5: [string, string] = ['linbudu', 'linbudu']
    // arr5[1] = 'linbudu'
    // arr5[2] = 'linbudu'

    // const arr5: [string, number, boolean] = ['linbudu', 599, true];
    // // 长度为 "3" 的元组类型 "[string, number, boolean]" 在索引 "3" 处没有元素。
    // const [name, age, male, other] = arr5;




// 元组
const tupple1: [number, string, boolean] = [1, '1', true]
const tupple2: [name: string, age: number] = ['ting', 18]
const tupple3: [name: string, age?: number] = ['liu']
// tupple1[7]
// const [num, str, bool, rest] = tupple1

// 对象
//  interface 声明一个结构，然后使用这个结构来作为一个对象的类型标注
// interface IDescription {
//     name: string;
//     age: number;
//     male: boolean;
// }
// const obj1: IDescription = {
//     name: 'linbudu',
//     age: 599,
//     male: true,
// };

// 可选
// 数组
const arr6: [string, number?, boolean?] = ['linbudu'];
// 下面这么写也可以
// const arr6: [string, number?, boolean?] = ['linbudu', , ,];

// 接口-饰接口属性
//  ？ --》 可选属性【相当于undefind类型，是吗？】
interface IDescription {
    name: string;
    age: number;
    male?: boolean;
    func?: Function;
}

const obj2: IDescription = {
    name: 'linbudu',
    age: 599,
    male: true,
    // 无需实现 func 也是合法的
};

// interface 用来描述对象、类的结构
// 类型别名用来将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型