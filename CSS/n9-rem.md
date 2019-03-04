## 單位 em rem

### em

em = 自己元素的`font-size`



### rem

手機專用responsive方案



一般瀏覽器默認字體大小：16px

chrome: 12px



rem是根元素的`font-size` ，

```css
html{
    font-size: 16px;
}

p{
    font-size: 1rem; /*16px*/
}

h1{
    font-size: 2rem; /*32px*/
}
```





#### 動態rem

使用 `rem` 單位在手機佈局的好處是，通過 js 得到不同手機的寬度的根元素，從而利用`rem`百分比對相關元素進行相應縮放。



```js
var pageWidth = window.innerWidth
document.write('<style>html{font-size:'+pageWidth+'px;}</style>')
```





### SASS 可以將px自動變為rem

