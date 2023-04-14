interface Res {
    code: 1 | 0,
    status: "success" | "failure", //联合类型(|) 与 字面量类型
    data: any
}

const rsp: Res = {
    code: 1,
    status: "success",
    data: null
}

let res: Res;
// if(res.status === '')


//字面量类型

// 对象字面量