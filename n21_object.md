# 對象 object



obj 是鍵值對 （key-value） 的無序復合數據。



### 1.1 生成方式

```js
var person = {
    name: 'ray', //name: is key （鍵名）; 'ray' is value （鍵值) 
    age: '27'//對象屬性之間需用逗號作分隔，但最後一個屬性可以不加。
}

//以下方式也可創建對象
var person1 = new Object(); 
var person2 = Object.create(Object.prototype);
```





### 1.2 鍵名

所有obj 的鍵名 (key)  都是字符串，所以不加引號也是可以。



##### 數字命名鍵名

鍵名即使以數字命名，但也會換化成字符串。

```js
var num = {
    1: a,
    2: b,
    3.14: true
}

obj['3.14'] //true
```



##### 鍵名命名規則

但鍵名必須符合標識符的條件，否則會報錯。如果不符合條件，必須加上引號

```js
// 報錯
var obj = {
  1p: 'Hello World',
  *: 'Hello World',
  -a:'Hello World'
};

// 加上引號不報錯
var obj = {
  '1p': 'Hello World',
  'h w': 'Hello World',
  'p+q': 'Hello World'
};
```



標識符命名規則，可參考：

https://wangdoc.com/javascript/basic/grammar.html#标识符



##### 鍵名與屬性

對象的每個鍵名又稱屬性 (property)，它的鍵值可配對任何數據類型。如果屬性的值是了函數，通常會把這個屬性稱作方法。可以像函數般調用。

```js
var obj = {
    x: function(y){
        return 2*y;
    }
}; // x是obj的屬性，並指向一個函數

obj.x(2) //4
```



##### 鍵式引用

如果屬性的值是一對象，就形成鍵式引用。

```js
var person = {}; //對象person沒有屬性；不必在對象聲明就指定屬性
var person2 = {name:'Ray'}

person.son = person2 // person創建屬性son，值並指向person2
person.son.name // 'Ray' （鍵式引用了person2的屬性）
```



  ### 1.3 對象的引用

如不同的變量都指向同一對象，也就是它們都是引用同一個對象，是同一內存地址。如修改其中一個變量，也會影響其他的變量。

````js
var person = {}
var person2 = person

person.a = 1 // 創建了屬性a值是1
person2.a // 1 （person2也會有屬性a值是1）

person2.b = 2 // 創建了屬性b值是2
person.b // 2 （person也會有屬性b值是2）
````



這種引用只限於對象，如應用於原始類型的值，變量只會是值的複製。

```js
var x = 1;
var y = x;

x = 2;
y // 1 （這表示x與y不像對象般只向同一內存地址）
```



但如果取消某一個變量對原對象的引用，就不會影響到另一變量。

```js
var person = {} // 賦值為對象
var person2 = person // 指向person同一對象

person = 1 // 重新賦值為1
person2 // {} 還是原來的對象，不受 person 重新賦值影響
```



### 1.4 表達式與語句



```js
{ foo: 123 } // 是對象？或是代碼塊？
```

js 遇到這個情況，一律會當作是代碼塊。



如果要解釋為對象，便要加上圓括號 `()` ，括號內只能是表達式。

```js
({foo: 123})
```



# 屬性操作

### 2.1 讀取屬性

讀取屬性有兩種方法

```js
var person = {
    s: 'hello world!'
};

person.s // 'hello world!' （方法1 點運算符）
person['s'] // 'hello world!' （方法2 方括號運算符）
```



使用方括號運算符，鍵名必須放入引號內。

```js
var s = "v"

var person = {
    s: 'hello world!',
    v: '2'
    
};

person[s] // 2 (沒有加上引號便會當成變量，指向字符串v)
perons['s'] // 'hello world!' 

```

在方括號運算符，鍵名如果是數字可不加引號，因為最後也會自動轉為字符串。



方括號運算符內部可使用表達式。

```js
person['hello'+'world']
person[1+1]
```



點運算符不可以使用以數值命名的鍵名，因為會被當成小數點。只能用方括號運算符。

```js
var person = {
  123: 'hello world!'
};

obj.123 // 報錯
obj[123] // "hello world!
```



### 2.2 屬性賦值

點運算符及方括號運算符也可以為屬性賦值。

```js
var person = {}

person.name = 'Ray';
person['age'] = 27;
```



此外 js  允許任何時候添加屬性，不必對象聲明時就定義屬性。



### 2.3 查詢屬性

`Object.keys` 可以查詢指定對象擁有的屬性。

```js
person = {
    name: 'Ray',
    age: 27,
}

Object.keys(person)
//["name", "age"]
```



### 2.4 刪除屬性：delete

`delete`用於刪除對象的屬性，刪除後並返回`true`。

```js
person = {
    name: 'Ray',
    age: 27,
}
Object.keys(person) // ["name", "age"]

delete person.age // true
person.age //undefined
Object.keys(person) // ["age"]
```



但留意如果刪除一個不存在的屬性，不會報錯，且也會回報`true`。

```js
person = {}
delete person.name // true
```



只有一種情況會回報`false`，就是刪除一個存在的屬性，但該屬性不能刪除。

```js
//p 屬性設定不能刪除
var person = Object.defineProperty({}, 'p', {
  value: 123,
  configurable: false
});

perosn.p // 123
delete person.p // false 
```



另外需要注意的是這指令只可以刪除對象本身的屬性，但無法刪繼承屬性。

```js
var person = {};
delete person.toString // true
person.toString // function toString() { [native code] }
```

由於`.toString`是繼承屬性，需要回報`true`，但該屬性沒有刪除，仍能讀取繼承屬性的值。



### 2.5 屬性是否存在：in

`in` 運算符是檢查該對象的指定屬性（鍵名）是否存在。如果存在便返回`true`，反之`false`



```js
person = {
    name: 'Ray',
    age: 27,
}

'age' in person // true
'gender' in person // false
'toString' in person // true
```

但這指令有一個問題是不能分辨屬性是自身或繼承的。以上面例子，對象 `person`並沒有`toString`，但`in`仍是返回`true`，因為這個是繼承屬性。針對這個問題可以使用`hasOwnProperty`方法去判斷一下，是否是對象本身的屬性。

```js
var person = {};
if ('toString' in person) {
  console.log(person.hasOwnProperty('toString')) 
}
// false
```



###2.6 for...in 循環

`for...in`循環是用來遍歷一個對象的全部屬性。

```
var person = {a: 1, b: 2, c: 3};

for (var i in perosn) {
  console.log('鍵名：', i);
  console.log('鍵值：', obj[i]);
}
// 鍵名： a
// 鍵值： 1
// 鍵名： b
// 鍵值： 2
// 鍵名： c
// 鍵值： 3
```



但這指令有兩點需要注意：

1. 它遍歷的是對象可遍歷的屬性，會跳過不可遍歷的屬性。
2. 它不僅遍歷對象自身的屬性，還遍歷繼承的屬性。



所以如果想遍歷對象自身的屬性可配合`hasOwnProperty`方法，在循環內部判斷一下，某屬性是否自身對象屬性。

```js
var person = { name: 'Ray' };

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```



# 3. with 語句

`with`語句的一個很大的弊病就是綁定對象不明確。所以建議盡量不要使用帶語句。但在某些特殊需求下，還有有用的，可參考：

https://wangdoc.com/javascript/types/object.html#with-语句



