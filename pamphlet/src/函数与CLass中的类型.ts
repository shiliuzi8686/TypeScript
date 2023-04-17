// 函数（参数类型、返回值类型）
function test(params:string):string { //函数声明
    return 'heiheihei'
}

const test1 = function (name: string): number { //函数表达式
    return name.length
}
/**
 * 
 * @description 
 * (name: string) => number  在这里是函数类型签名
 */
const test2: (name: string) => number = function (name) {
    return name.length
}

//箭头函数
const foo = (name: string): number => {
    return name.length
}

const foo1: (name: string) => number = (name) => { // 代码的可读性会非常差，一般不推荐这么使用
    return name.length
}

//使用类型别名将函数声明抽离出来：
type FuncFoo = (name: string) => number

const foo3: FuncFoo = name => {
    return name.length
}

// 可选参数
// 在函数逻辑中注入可选参数默认值
function foo5(name: string, age?: number): number {
    const inputAge = age || 18; // 或使用 age ?? 18
    return name.length + inputAge
}
  
// 直接为可选参数声明默认值
function foo2(name: string, age: number = 18): number {
    const inputAge = age;
    return name.length + inputAge
}

// rest 参数的类型
function bar(arg1: string, ...rest: any[]) { }

// 使用元组类型进行标注：
function bar1(arg1: string, ...rest: [number, boolean]) { }

bar1("linbudu", 18, true)



// 重载
/**
 * 
 * @description 
 * 在某些逻辑较复杂的情况下，函数可能有多组入参类型和返回值类型
 */
function func(foo: number, bar?: boolean): string | number {
    if (bar) {
        return String(foo);
    } else {
        return foo * 599;
    }
}

// 可以使用 TypeScript 提供的函数重载签名 ???不太懂
function func1(foo: number, bar: true): string;
function func1(foo: number, bar?: false): number;
function func1(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number

// 异步函数
/**
 * 
 * @description 
 * 返回值必定为一个 Promise 类型，而 Promise 内部包含的类型则通过泛型的形式书写，即 Promise<T>
 */
async function hhh(params:string): Promise<void> {
    
}


// 面向对象编程


// Class
// 类与类成员的类型签名
// 到了 Class 中其实也一样，它的主要结构只有构造函数、属性、方法和访问符（Accessor），我们也只需要关注这三个部分即可

// 类声明的方式
class Foo {
    prop: string;

    constructor(inputProp: string) {
        this.prop = inputProp;
    }

    print(addon: string): void {
        console.log(`${this.prop} and ${addon}`)
    }

    get propA(): string {
        return `${this.prop}+A`;
    }

    set propA(value: string) {
        this.prop = `${value}+A`
    }
}

// 类表达式的方式
const Foo1 = class {
    prop: string;

    constructor(inputProp: string) {
        this.prop = inputProp;
    }

    print(addon: string): void {
        console.log(`${this.prop} and ${addon}`)
    }

    // ...
}

// 访问性修饰符


// 继承



// 抽象类