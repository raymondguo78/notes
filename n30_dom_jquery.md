

1－全局變量不能用



2－使用局部變量



3－聲明一個函數，就立即調用函數

````js
function x(){
    var parent = document.querySelector('#self')
    console.log(parent)
}.call() //但會報錯
````



4－如何解決報錯

```js
//加上括號() 包著立即調用函數
(function x(){
    var parent = document.querySelector('#self')
    console.log(parent)
}.call())
```



```js
// 可使用 ! + - ~
-function x(){
    var parent = document.querySelector('#self')
    console.log(parent)
}.call()
```



