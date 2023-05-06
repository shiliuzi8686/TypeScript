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

// 它的基本语法是 as NewType，你可以将 any / unknown 类型断言到一个具体的类型

let unknownVar: unknown
