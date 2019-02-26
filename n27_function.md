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
   ```

3. 具名函数 + var

   ```js
    var f1 
    f1= function f2(x,y){
        return x+y
    }
    console.log(f2) // undefined
   ```

4. window.Function + var

   ```js
    var f
    f = new Function('x','y','return x+y')
   ```

