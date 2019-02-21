## CSS 学习资源

1. Google: 关键词 MDN
2. [CSS Tricks](https://css-tricks.com/) Snippets 代碼片段
3. [Google: 阮一峰 css](https://www.google.com/search?q=%E9%98%AE%E4%B8%80%E5%B3%B0+css)
4. [张鑫旭的 240 多篇 CSS 博客](http://www.zhangxinxu.com/wordpress/category/css/page/25/)
5. [Codrops 炫酷 CSS 效果](https://tympanus.net/codrops/category/playground/)
6. [CSS揭秘](http://www.ituring.com.cn/book/1695)
7. [CSS 2.1 中文 spec](http://cndevdocs.com/)
8. [Magic of CSS](http://adamschwartz.co/magic-of-css/) 免费在线书



CSS 先做後學

---

引入 CSS 的方式

`<body bgcolor="red">`

`<link rel="stylesheet" href="style.css">`

`@impot url (./styleb.css);`



背熟

子元素加 float:left

父元素加 clearfix

```css
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
```

---



高度與文檔流：

高度是按元素內內容而定

或可以按 line-height設定高度大於文字高度



inline 左至右

高度按字體相關元素而定

或強行加上 `height:`



block 上而下

高度按內部文檔元素流動而定



inline-block

必需加上veritcal-align:top



---



斷行：

`word-break:`

`break all` for chinese words

`break word(for english);` for 

 

---



文字設定 `font-size 100px;`

字體不是實際相等100px; 而是按字體建議行高去設定100px;

一般是按字最高和最低點及字體設定的建議行高去設定。 



---



position:fixed 及 width:100% 及height: 容易造成bug，盡量小用

position:fixed 及 width:100%引起的padding over問題可在一個內在加上一個div.inner 去另設padding



---



position: absolute & position: realtive

子元素 position: absolute 

父元素加上position: realtive



另其子元素脫離文檔流



---



margin 合併問題

inline-block 不會導致上下元素margin合併



---



HTML dl dt dd 標籤 

是網頁內文的一種排版方式技巧，可製作出縮排的效果

```css
.userCard dl dt, 
.userVard dl dd{
float: left;
width: 50%;
}
```



---

svg

width

height

fill:color

---

nth:child(1){

}

:first-child{

}

---



