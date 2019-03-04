## call、apply、bind 的用法分别



###`.call`

函數實例的 call 方法，可以指定函數內部 this 的指向（即函數執行時所在的作用域），然後在所指定的作用域中，調用該函數。

```js
var obj = {};

var a = function () {
  return this;
};

f() === window // true
a.call(obj) === obj // true
```



###`.apply`

 作用與 call 類似，也是改變 this 的指向，然後調用該函數。但區別是 apply 接收一個數組作為函數執行時的參數。

```js
a.apply(this, [arg1, arg2, ...])
```



### `.bind`

用於函數體內的 this 綁定到某個對象，然後返回一個新函數。

```js
var d = new Date();
d.getTime() // 1481869925657

// getTime 內部的this 綁定在  Date 對象實例

var print = d.getTime;
print() // Uncaught TypeError: this is not a Date object.

// getTime 賦量給 print 後，內部的 this 就不是指向 Date 對象實例了
```



bind 就可以解決以上的問題

```js
var print = d.getTime.bind(d);
print() // 1481869925657

//getTime 內部的 this 綁定到 d 對象
```

