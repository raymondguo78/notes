# 面向對象編程



大部分面向對象的編程，都透過“類”（class）來實現對象的繼承。如 A 對象通過繼承 B 對象，就能直接擁有 B 對象的所有屬性和方法。這對於代碼可重用是非常有用。



由於 JavaScript 的發展歷史並沒有採用"類"的形式 (詳見這裡)，但採用了基於構造函數 (constructor) 和原型鏈 (prototype)。



構造函數 (constructor) 

實例對象

```js
var  Vehicle = function () { // Vehicle 是構造函數
  this.price = 1000;
};
```

構造函數的特點有兩個。

- 函數體內部使用了this關鍵字，代表了所要生成的對象實例。
- 生成對象的時候，必須使用new命令。



## new



```js
var Vehicle = function () { //構造函數
  this.price = 1000; //表示實例對像有一個price屬性，值是1000
};

var v = new Vehicle(); // new Vehicle() 生成一個實例對象
v.price // 1000 (從構造函數Vehicle得到了price屬性)
```



使用new命令時，它後面的函數依次執行下面的步驟。

- 創建一個空對象，作為將要返回的對象實例。
- 將這個空對象的原型，指向構造函數的prototype屬性。
- 將這個空對象賦值給函數內部的this關鍵字。
- 開始執行構造函數內部的代碼。



## this 

屬性底方法當前所在對象

```js
var person = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name; //指向person = person.name
  }
};
```



this 的指向可變

```js
var A = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

var B = {
  name: '李四'
};

B.describe = A.describe; // b也擁有describe屬性
B.describe()
// "姓名：李四"
```

因此this 的指向是動態的。



## 固定this的方法

### Function.prototype.call()

函數實例的call方法，可以指定函數內部this的指向（即函數執行時所在的作用域），然後在所指定的作用域中，調用該函數。

```js
var obj = {};

var f = function () {
  return this;
};

f() === window // true (全局環境運行函數f時，this指向全局環境)
f.call(obj) === obj // true (改變this的指向，指定this指向對象obj)
```



如果call方法的參數是一個原始值，那麼這個原始值會自動轉成對應的包裝對象，然後傳入call方法。

```js
var f = function () {
  return this;
};

f.call(5)
// Number {[[PrimitiveValue]]: 5}
```



call方法參數應是對象，否則會當成全局對象。

```js
var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456
```



如果call方法的參數是一個原始值，那麼這個原始值會自動轉成對應的包裝對象

```js
var f = function () {
  return this;
};

f.call(5)
// Number {[[PrimitiveValue]]: 5}
```



call方法還可以接受多個參數。

```js
function add(a, b) {
  return a + b;
}

add.call(this, 1, 2) // 3
```



`call`方法的一個應用是調用對象的原生方法。

```js
var obj = {};
obj.hasOwnProperty('toString') // false

// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
  return true;
};
obj.hasOwnProperty('toString') // true

Object.prototype.hasOwnProperty.call(obj, 'toString') // false
```



### Function.prototype.apply()

基本與call一樣，但apply方法中，必須以數組形式添加。

```js
function f(x, y){
  console.log(x + y);
}

f.call(null, 1, 1) // 2
f.apply(null, [1, 1]) // 2
```



### Function.prototype.bind()

bind方法用於將函數體內的this綁定到某個對象，然後返回一個新函數。

```js
var counter = {
  count: 0,
  inc: function () {
    this.count++; //this 是對應 inc 
  }
};

var func = counter.inc.bind(counter); //將 this 綁定到 counter
func();
counter.count // 1
```

也可以將 this 綁到其他對象

```js
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var obj = {
  count: 100
};
var func = counter.inc.bind(obj);
func();
obj.count // 101
```

more detail:

https://wangdoc.com/javascript/oop/this.html#functionprototypebind



## 原型理解

首先理解一下什麼是：

- 構造函數 (constructor) 

- 實例對象 (object)

```js
// 以下是構造函數 (constructor) 
var Vehicle = function () { 
  this.price = 1000;
};

//以下按構造函數生成實例對象 (object)
var hiace = new Vehicle(); // Vehicle {price: 1000}
```

構造函數的特點有兩個：

- 函數體內部使用了this關鍵字，代表了所要生成的對象實例。
- 生成實例對象的時候，必須使用new命令。



首先要弄清楚最容易混淆的`__porto__` 及 `portotype`，通過理解它們去理解原型。



### `__porto__`

引用《JavaScript權威指南》的一段描述：

> Every JavaScript object has a second JavaScript object (or null ,
> but this is rare) associated with it. This second object is known as a prototype, and the first object inherits properties from the prototype.

意思是每個 js 對象都會有一個原型對象。並從原型繼承方法及屬性。



對象 `__porto__` 的屬性值就是它所對應的原型對象。

```js
var dog1 = {name:a};
var dog2 = new Object();

dog1.__proto__ === Object.prototype //true
dog2.__proto__ === Object.prototype //true
```

你在主控台打一遍以上代碼，查看 `dog1` 及 `dog2` 的屬性就明白了！



但為什麼它對應就是 `Object.prototype` ? 



### `prototype`

`prototype  ` 跟  `__porto__`  不一樣，不會每個對象都有，只有函數才會有 `prototype`。由於 js 不像其他面向對象編程，都透過“類”（class）來實現對象的繼承。如 A 對象通過繼承 B 對象，就能直接擁有 B 對象的所有屬性和方法。而是用函數來實現。



當 js 創建函數時會自動添加 `prototype` 屬性，並包含有一個值是 `constructor` 的屬性，並默認指向 `prototype` 對象創建時所在的構造函數。`constructor`的作用是讓你知道實例對象是由哪一個構造函數所產生。



當你通過 `new `關鍵字調用 `constructor` ，根據其構造函數創建實例對象，實例對象就會繼承構造函數`prototype`的所有屬性和方法（實例通過設置自己的`__proto__`指向承構造函數的`prototype`來實現這種繼承）。





js 就是通過`__porto__` 及 `portotype` 的組合來來實現原型鏈繼承。構造函數通過 `prototype` 來儲存要共享的屬性和方法。



對象的`__proto__`指向自己構造函數的`prototype`。 `obj.__proto__.__proto__...`的原型鏈由此產生。



回應上方的代碼「為什麼它對應就是 `Object.prototype` ?」，`dog2 = new Object()`中`Object`是構造函數，所以`dog2.__proto__`就是`Object.prototype`。至於`dog1`，ES規範定義對象的原型就是`Object.prototype`。

