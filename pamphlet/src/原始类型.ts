// null、undefined
const nullTest: null = null
const undeTest: undefined = undefined

// string
const superTypeStr1: string = null
const superTypeStr2: string = undefined

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