const nullTest: null = null
const undeTest: undefined = undefined

const superTypeStr1: string = null
const superTypeStr2: string = undefined

function func1() {} //返回值类型被隐式推导为void
function func2() {  //返回值类型被隐式推导为void
    return
}

const voidVar1: void = null //关闭 strictNullChecks的情况下，否则报错
const voidVar2: void = undefined //关闭 strictNullChecks的情况下

const arr1: string[] = []
const arr2:Array<string> = []