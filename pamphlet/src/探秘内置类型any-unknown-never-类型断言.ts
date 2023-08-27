// any
// log(message?: any, ...optionalParams: any[]): void
// let foo; //在 tsconfig 中启用了 noImplicitAny 时会报错

// foo、bar 均为 any
// function func(foo, bar){}


// 被标记为 any 类型的变量可以拥有任意类型的值
let anyVar: any = "linbudu";

anyVar = false;
anyVar = "linbudu";
anyVar = {
  site: "juejin"
};

anyVar = () => { }

// 标记为具体类型的变量也可以接受任何 any 类型的值
const val1: string = anyVar;
const val2: number = anyVar;
const val3: () => {} = anyVar;
const val4: {} = anyVar;


let dididi: any

dididi = () => {
    console.log('hhh');
    
}

let didi: string = dididi

let str:string = didi
// let num:number = didi

// 那如果是unknown类型呢
let lalala: unknown
lalala = () => {
    console.log('hhh');
    
}

// let lala: string = lalala
//对于一个unknown类型,就不能赋值给string类型，这样的话就做了拦截，否则的话像any类型那样，什么类型的值就都可以给lalala了
//但使用unknown类型进行赋值的话，咋搞呢？？？使用类型断言



// never与void的兼容性（never比void更底层）
let v1: never
let v2: void
// v1 = v2
v2 = v1

// 类型断言：警告编译器不准报错 --- 是一个将变量的已有类型更改为新指定类型的操作
// let unknownVar: unknown;

// (unknownVar as { foo: () => {} }).foo();

// const str: string = "linbudu";

// (str as any).func().foo().prop;

// function foo(union: string | number) {
//     if ((union as string).includes("linbudu")) { }

//     if ((union as number).toFixed() === '599') { }
// }

// 类型断言的正确使用方式是，在 TypeScript 类型分析不正确或不符合预期时，将其断言为此处的正确类型
// interface IFoo {
//     name: string;
//   }
  
//   declare const obj: {
//     foo: IFoo
//   }
  
//   const {
//     foo = {} as IFoo
//   } = obj

// 它的基本语法是 as NewType，你可以将 any / unknown 类型断言到一个具体的类型

let unknownVar: unknown
