# 了解瀏覽器對儲存普通類型和對象的區別 - 棧內存 (Stack) ＆ 堆內存 (Heap)

JavaScript 的數據類型分為7種：string, number, boolean, null, undefined, symbol, object。

其中 string, number, boolean 合稱為原始類型 (primitive type) 的值；null, undefined 一般則稱為特殊值。至於 object 則稱為合成類型（complex type) 的值，object 是複雜的數據類型，又可分為3個子類型：object, array, function。



這篇文章會針對 object 這個類型，帶出瀏覽器如何處理它。



一般來說，要了解這個過程，需先你要了解：內存（Ram）與瀏覽器。當你使用瀏覽器時，會佔用了電腦的內存，瀏覽器會將內存再分配給 HTML & CSS 渲染，HTTP 處理，瀏覽器外殼，JS 引擎等等。而 object 的處理就是在 JS 引擎內發生。



JS 引擎將得到的內存，並分為代碼區及數據區。而普通類型和對象的區別主要體現在數據區。數據區內則分為棧內存 (Stack) 和堆內存  (Heap)。簡單類型的數據會直接存在 Stack 裡。複雜類型的數據是把 Heap 地址存在 Stack 裡。以下是整個瀏覽器處理數據類型的結構：



 ![chart](/Users/rk/Desktop/xiedaimala/notes/note_22_stack_heap/chart.png)



一般來說：

```js
var obj = { content: 1 };
```

上面的代碼將一個對象賦值給`obj`，js引擎先會在`heap`內存生成一個對象`{ content: 1 };`，然後把這個對象內存地址賦值給變量`obj`。也就是變量`obj`是一個地址（reference）。後面如果要讀取`obj.foo`，引擎先從`obj`拿到內存地址，然後再從該地址讀出原始的對象，返回它的`foo`屬性。



以下會通過內存圖概念去解釋數據類型如何存放在 stack 及 heap 之間。 

例題一：

```js
var a = 1
var b = a

b = 2
a //等於什麼？ 
```

當 `var a=1`,`var b=a`,內存可以表示為：

![1a](/Users/rk/Desktop/xiedaimala/notes/note_22_stack_heap/1a.png)

當執行`b=2`直接將`2`的值放在`b`的stack中，如：

![1b](/Users/rk/Desktop/xiedaimala/notes/note_22_stack_heap/1b.png)

所以`b`的改變並沒有影響到`a`, `a=1`

---

例題二：

```js
var a = {name: ‘a’}
var b = a

b.name = ‘null’
a.name //等於什麼？ 
```

當執行`var a = {name: ‘a’}`,`var b = a`時， `a`和`b`指向相同的`ADDR 1`。這個時候執行`b.name = null` (這是一個普通類型，直接將`null`的值在`stack`中給`b`)，導致`b`在`heap`中的指向消失，不會改變`heap`內存中數據。所以`a`還是`{name: 'a'}`。

![2](/Users/rk/Desktop/xiedaimala/notes/note_22_stack_heap/2.png)

---

例題三：

```js
var a = {name: ‘a’}
var b = a

b.name = ‘b’
a.name //等於什麼？ 
```

當執行`var a = {name: ‘a’}`,`var b = a`時， `a`和`b`指向相同的`ADDR 1`。這個時候執行`b.name = 'b'` ，更改在`heap`中地址`ADDR 1`，所以`a.name`是`{name: 'b'}`。

![`3](/Users/rk/Desktop/xiedaimala/notes/note_22_stack_heap/3.png)

---

例題四：

```js
var a = {name: ‘a’}
var b = a

b = {name:’b’}

a.name //等於什麼？ 
```

當執行`var a = {name: ‘a’}`,`var b = a`時， `a`和`b`指向相同的`ADDR 1`。這個時候執行`b = {name:’b’}`（由於這是定義了新的對象），導致`b`在`heap`中原先指向`ADDR 1`消失，在`heap`中新增了`ADDR 2`，把`b`指向了`ADDR 2`，而`a`沒有變化，所以`a.name`是`a`。

![4](/Users/rk/Desktop/xiedaimala/notes/note_22_stack_heap/4.png)



### 深拷貝和淺拷貝

```js
var a = 1
var b = a
b = 2
```

上邊的代碼中當對b改變一個完全不受影響，即為深拷貝。對於簡單類型中，賦值就是深拷貝。對於複雜類型（對象），就有深拷貝和淺拷貝一說。因為複雜類型存在引用關係，所以在更改其中一個對象時，兩者的指向還是相同的，即存在一個發生變化，另個也一起變化。



### GC垃圾回收機制

如果一個對象沒有被引用就是垃圾，將被回收。



例子：

```js
var fn = function(){};
document.body.onclick = fn
fn = null

//fn = function(){}; 會否被回收？
```

答案是不會，雖然這個時候執行`fn = null` (這是一個普通類型，直接將`fn`的值在`stack`中給向`fn`)，`fn`被賦值`null`，`function(){}`的指向消失。但因為`document.body.onclick` 仍引用` function(){}`，所以沒有被回收。

![5](/Users/rk/Desktop/xiedaimala/notes/note_22_stack_heap/5.png)



以上就是有關`stack`,`heap`,深拷貝和淺拷貝,GC垃圾回收機制的內容。