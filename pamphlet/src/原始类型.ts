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

// object
const obj: object = { name, age, male };

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

// 修饰接口属性
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