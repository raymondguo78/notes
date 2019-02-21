# null & undefined



`null` 及 `undefined` 都可以表示為沒有。意思幾乎相同，但為何會有它們的出現？ 這就涉及js的發展歷史，可參考：

https://wangdoc.com/javascript/types/null-undefined-boolean.html#概述



如果真的要嚴格理解兩者的分別，可以按以下理解。

`null`是定義值為空，如使用函數時，某參數未有任何數值就可以寫入`null`，表示該參數是空。或有一個對象 obj，還不想給值。

`undefined`就是未定義，以下是常見場景：

```js
//變量沒有賦值
var x
x // undefined


//調用函數時，該提供的參數沒有提供，該參數等於undefined
function f(x) {
    return x;
}
f() // undefined


//對象沒有賦值的屬性
var person = new Object();
p.p //undefined


//函數沒有返回值，默認返回undefined
function f(){
}
f() // undefined
```

