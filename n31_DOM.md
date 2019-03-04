## Swiper



如已知圖片闊度，寫上width，防止頁面元素往後退，避免重排現象，節省性能；高度如已知也寫



## DOM2

```js
xxx.addEventListener('click', function(){
    console.log(1)
})

xxx.addEventListener('click', function(){
    console.log(2)
})
```



---



```html
<div id="grand1">
    grand
    <div id="parent1">
        father
        <div id="child1">
            child
             </div>
        </div>
    </div>
```



```js
grand1.addEventListener('click', function fn1(){
    console.log('grand')
})

parent1.addEventListener('click', function fn1(){
    console.log('father')
})

child1.addEventListener('click', function fn1(){
    console.log('child')
})

//1 當我點擊child，是否也點擊了father and grand
//yes

//2 當我點擊child，是否三個函數也調用
//yes

//3 請問fn1 fn2 fn3 的≈
//321 or 123
//W3C都可以

//false:undefined null 0 '' NaN
// 不傳第3個參數／傳false child father grand
// 傳第三個參數為true grand father child
```



```js
child1.addEventListener('click', function fn1(){
    console.log('child')
} true)

child1.addEventListener('click', function fn1(){
    console.log('child')
} false)

//執行次序按行數優先執行
```



