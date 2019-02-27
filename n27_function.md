### function

```js
//普通 function 用法：
var f = function(a,b){
    return a+b
}

//new Function 用法：
var f = new Function('a', 'b', 'return a+b')
//參數命名必須合法命名的，加''引號
```



### 函數聲明方法總結

1. 具名函数

   ```js
    function f(x,y){
        return x + y
    }
   ```

2. 匿名函数 + var

   ```js
    var f
    f = function(x,y){ return x+y }
   //匿名函数 + var
   
   
   function b(x,y){ return x+y }
   console.log(b)
   //可訪問到b 
   
   var a
   a = function b(x,y){ return x+y }
   console.log(b)
   //報錯
   //原因js的不一致性
   ```

3. 具名函数 + var

   ```js
    var f1 
    f1= function f2(x,y){
        return x+y
    }
    console.log(f2) // undefined
   ```

4. `window.Function + var`

   ```js
    var f
    f = new Function('x','y','return x+y')
   ```

5. `f = (x,y) => x+y` 箭頭函數

   ```js
   sum = (x,y) => {return x+y}
   //可簡化(如只有一句）
   sum = (x,y) => x+y
   
   //可簡化（參數只有一個）
   n2 = n => n*n
   ```



##### JS的坑

```js
function f(){}
f.name
//'f'

var f2 = function(){}
f2.name
//'f2'

var f3 = function f4(){}
f3.name
//'f4'

f5 = new Function('x','y', 'return x+y')
f5.name
//'anonymous' (使用new Function就沒有名字)
```



#### 函數是什麼

可以執行代碼的對象就是函數，一段可以反復調用的代碼塊。



####this and agruments

```js
f.call(asThis, input1,input2)
其中 asThis 会被当做 this，[input1,input2] 会被当做 arguments
禁止使用 f(input1, input2)，因为学会 .call 才能理解 this
```



`eval()`：當代碼執行



`f()`：當初設計這個為了讓人感覺容易使用。



`f.call(undefined, x, y)`：執行函數體，才是`function()`真正調用方法。

`undefined`: 就是`this` ; call第一個參數可以用this 得到

`x, y`: arguments



function ==> function.prototype ==> Object.prototype



```js
function f(){
    'use strict'
    console.log(this)
    console.log(arguments)
    return undefined
}
f.call(1,2,3) // this 为 1，arguments 为 [2,3]
```






#### call stack

與內存stack 無關。只是一個數據結構，先入後出。函數運作模式。

![图片](https:////video.jirengu.com/FmKGtpf4fvqhvjs0T_of6NCZ8hyO)

- [普通调用](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYSgpewogICAgY29uc29sZS5sb2coJ2EnKQogIHJldHVybiAnYScgIAp9CgpmdW5jdGlvbiBiKCl7CiAgICBjb25zb2xlLmxvZygnYicpCiAgICByZXR1cm4gJ2InCn0KCmZ1bmN0aW9uIGMoKXsKICAgIGNvbnNvbGUubG9nKCdjJykKICAgIHJldHVybiAnYycKfQoKYS5jYWxsKCkKYi5jYWxsKCkKYy5jYWxsKCk%3D!!!)
- [嵌套调用](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYSgpewogICAgY29uc29sZS5sb2coJ2ExJykKICAgIGIuY2FsbCgpCiAgICBjb25zb2xlLmxvZygnYTInKQogIHJldHVybiAnYScgIAp9CmZ1bmN0aW9uIGIoKXsKICAgIGNvbnNvbGUubG9nKCdiMScpCiAgICBjLmNhbGwoKQogICAgY29uc29sZS5sb2coJ2IyJykKICAgIHJldHVybiAnYicKfQpmdW5jdGlvbiBjKCl7CiAgICBjb25zb2xlLmxvZygnYycpCiAgICByZXR1cm4gJ2MnCn0KYS5jYWxsKCkKY29uc29sZS5sb2coJ2VuZCcp!!!)
- [递归调用](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gc3VtKG4pewogICAgaWYobj09MSl7CiAgICAgICAgcmV0dXJuIDEKICAgIH1lbHNlewogICAgICAgIHJldHVybiBuICsgc3VtLmNhbGwodW5kZWZpbmVkLCBuLTEpCiAgICB9Cn0KCnN1bS5jYWxsKHVuZGVmaW5lZCw1KQ%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)



call stack 長度是9641，超出9641就是stack overflow



#### 作用域 scope

```js
var a = 1 

function f1(){
    var a = 2
    f2.call()
    console.log(a) //a=2
    
    function f2(){
        var a =3 
        console.log(a) //a=3
    }
}

f1.call()
console.log(a) //a=1
```

```js
var a = 1 

function f1(){
    a=3
    f2.call()
    console.log(a)//a=3
    
    function f2(){
        var a =3 
        console.log(a)//a=3
    }
}

f1.call()
console.log(a) //a=3
```

```js
var a = 1 

function f1(){
    f2.call()
    console.log(a)//undefined
    var a =2
    
    function f2(){
        var a =3 
        console.log(a)//a=3
    }
}

f1.call()
console.log(a) //a=1
```



```js
var a = 1 

function f1(){
    console.log(a) //undefined
    var a =2
    f4.call() //不同作用域
}    

function f4(){ //不同作用域
    console.log(a) //a=1
}

f1.call()
console.log(a) //a=1
```



```js
var a = 1 

function f4(){
    console.log(a) //a=2
}

a=2
console.log(a) //a=2
```



#### 這就是閉包

```js
var a = 1 

function f4(){
    console.log(a) //a=1
} 
//如果一個函數，使用了它範圍外的變量，那麼（這個函數加這個變量）就是閉包
```

