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


//字面量类型-主要包括字符串字面量类型、数字字面量类型、布尔字面量类型和对象字面量类型-可以直接作为类型标注
// const str: "linbudu" = "linbudu";
// const num: 599 = 599;
// const bool: true = true;

// 对象字面量
interface Tmp {
    obj: {
      name: "linbudu",
      age: 18
    }
  }
  
  const tmp: Tmp = {
    obj: {
      name: "linbudu",
      age: 18
    }
  }


//枚举
enum PageUrl {
    Home_Page_Url = "url1",
    Setting_Page_Url = "url2",
    Share_Page_Url = "url3",
}
  
const home = PageUrl.Home_Page_Url;

enum Item{
    Foo,
    Bar,
    Baz
}

const fooValue = Item.Foo
console.log('fooValue', fooValue);


//常量枚举
const enum Items {
    Foo
}
console.log('Items["Foo"]', Items["Foo"]);
// console.log('Items[0]', Items[0]);
