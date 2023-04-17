var rsp = {
    code: 1,
    status: "success",
    data: null
};
var res;
// if(res.status === '')
//字面量类型
// 对象字面量
//枚举
var Item;
(function (Item) {
    Item[Item["Foo"] = 0] = "Foo";
    Item[Item["Bar"] = 1] = "Bar";
    Item[Item["Baz"] = 2] = "Baz";
})(Item || (Item = {}));
var fooValue = Item.Foo;
console.log('fooValue', fooValue);
console.log('Item["Foo"] = 0', Item["Foo"] = 0);