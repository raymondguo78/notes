# resume nav optimization

### loading page

HTML

```html
<div id="siteWelcome" class="site-welcome active">
   <div class="loading"></div>
</div>
```

CSS

```CSS
.loading{
  width:200px;
  height:200px;
  position: relative
}

.loading::before,.loading::after {
  content:'';
  position:absolute;
  background: #0b36ff;
  width:10px;
  height:10px;
  border-radius:50%;
  top:0;
  left:0;
  bottom:0;
  right:0;
  margin:auto;
  animation: s 0.5s linear infinite; 
}

.loading:nth:child(2):{
  animation-delay:0.1s;
}

@keyframes s{
    0%{
        width: 0px; height: 0px; opacity: 1;
    }
    100%{
        width: 100px; height: 100px; opacity: 0;
    }
}
```

JavaScript

```js
setTimeout(function () {
            siteWelcome.classList.remove('active')
        }, 1000)
```

Knowledge ：

`setTimeout(code,millisec)` 方法用於在指定的毫秒數後調用函數或計算表達式。

- code 必需加上。要調用的函數後要執行的 JavaScript 代碼串。

- millisec 必需加上。在執行代碼前需等待的毫秒數。

`setTimeout()` 只執行 code 一次。如果要多次調用，請使用 `setInterval()` 或者讓 code 自身再次調用 `setTimeout()`。



### sticky nav bar

HTML

```html
  <div id="topNavBar" class="topNavBar">
</div>
```

CSS

```css
.topNavBar.sticky{
    background: #ffde03;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
}
```

JavaScript

```js
window.onscroll = function (xx) { //當滾動條在滾動時觸發函數
            if (window.scrollY > 0) { //垂直滾動位置大於 0px
                topNavBar.classList.add('sticky') //新增 sticky 
            } else { //是 0px 的話
                topNavBar.classList.remove('sticky') //移除 sticky 
            }
        }
```

Knowledge ：

`onscroll` 在元素滾動條在滾動時觸發事件。

`scrollY` 垂直滾滾位移位置。

`element.classList.add` 在元素中添加 CSS 類。

`element.classList.remove` 在元素中移除 CSS 類。



### sub menu

HTML

```html
<div id="topNavBar" class="topNavBar">
        <div class="topNavBar-inner clearfix">
            <a class="logo" href="#" alt="logo">
                <span class="rs">Curriculum Vitae</span>
            </a>
            <nav class="menu">
                <ul class="clearfix">
                    <li><a href="#siteABOUT">ABOUT</a></li>
                    <li><a href="#siteSKILLS">SKILLS</a></li>
                    <li class='menuTigger'><a href="#sitePORTFOLIO">PORTFOLIO</a>
                        <ul class='submenu'>
                            <li>PORTFOLIO1</li>
                            <li>PORTFOLIO2</li>
                            <li>PORTFOLIO3</li>
                        </ul>
                    </li>
                    <li><a href="#siteEXPERIENCE">EXPERIENCE</a></li>
                    <li class='menuTigger'><a href="#siteBLOG">BLOG</a>
                        <ul class='submenu'>
                        <li>Blog1</li>
                        <li>Blog2</li>
                        <li>Blog3</li>
                        </ul>
                    </li>
                    <li><a href="#siteCONTACT">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    </div>
```

CSS

```css
.topNavBar > .topNavBar-inner > nav > ul > li.active > a::after {
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 3px;
  background: #0b36ff;
  animation: menuSlide 0.3s;
}

@keyframes menuSlide{
    0%{
        width:0;
    }
    100%{
        width: 100%;
    }
}

.topNavBar li.active > .submenu{
  
    display: block;
    animation: submenuSlide 0.3s;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
}

@keyframes submenuSlide{
    0%{
        margin-right:100%;
    }
    100%{
        margin-right:0;
    }
}
```

JavaScript

```js
//第一次想法：
//有bugs：點到次選單會 remove 'active'，導致點不到次選單；這個想法較多知識點。
let aTags = document.getElementsByClassName('menuTigger')
        for(let i=0; i<aTags.length; i++){ // 定義menuTigger範圍，i<iTags就會循環執行
            aTags[i].onmouseenter = function(x){ //鼠標指針移動到menuTigger觸發事件
                let a =x.currentTarget //獲取當前截點
                let brother = a.nextSibling // 找下一個節點
                while (brother.tagName !== 'UL'){ //如果下一個節點不是標籤 ul（必須大楷，原因不明）
                    brother = brother.nextSibling //再找當前的下一個節點
                }
                brother.classList.add('active') // 找到就加 active CSS類
            }
            aTags[i].onmouseleave = function(){ //鼠標指針移開元素後
                brother.classList.remove('active')  // 移除 active CSS類
            }
        }
```

```js
//第二次想法
//簡單無bugs
let liTags = document.querySelectorAll('nav.menu >ul>li')
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function (x) {
                x.currentTarget.classList.add('active')
            }
            liTags[i].onmouseleave = function (x) {
                x.currentTarget.classList.remove('active')
            }
        }
```

Knowledge ：

`document.getElementsByClassName('')` 獲取指定的多個相同的CSS class類。

`onmouseenter ` 在鼠標指針移動到元素上時觸發事件。

`currentTarget` 事件屬性返回其監聽器觸發事件的節點，即當前處理該事件的元素、文檔或窗口。

`nextSibling` 是一個只讀屬性，返回其父節點的 childNodes 列表中緊跟在其後面的節點，如果指定的節點為最後一個節點，則返回 null。

- Gecko內核的瀏覽器會在源代碼中標籤內部有空白符的地方插入一個文本結點到文檔中.因此,使用諸如Node.firstChild 和Node.previousSibling 之類的方法可能會引用到一個空白符文本節點, 而不是使用者所預期得到的節點。

`tagName` 獲得元素的標籤名。

`onmouseleave` 在鼠標指針移開元素後觸發事件。

`document.querySelectorAll` 方法返回文檔中匹配指定 CSS 選擇器的所有元素。



### swip to specific point form nav

HTML

```html
<div id="topNavBar" class="topNavBar">
        <div class="topNavBar-inner clearfix">
            <a class="logo" href="#" alt="logo">
                <span class="rs">Curriculum Vitae</span>
            </a>
            <nav class="menu">
                <ul class="clearfix">
                    <li><a href="#siteABOUT">ABOUT</a></li>
                    <li><a href="#siteSKILLS">SKILLS</a></li>
                    <li class='menuTigger'><a href="#sitePORTFOLIO">PORTFOLIO</a>
                        <ul class='submenu'>
                            <li>PORTFOLIO1</li>
                            <li>PORTFOLIO2</li>
                            <li>PORTFOLIO3</li>
                        </ul>
                    </li>
                    <li><a href="#siteEXPERIENCE">EXPERIENCE</a></li>
                    <li class='menuTigger'><a href="#siteBLOG">BLOG</a>
                        <ul class='submenu'>
                        <li>Blog1</li>
                        <li>Blog2</li>
                        <li>Blog3</li>
                        </ul>
                    </li>
                    <li><a href="#siteCONTACT">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    </div>
    
 <div id="siteABOUT" class="userCard">
 <section id="siteSKILLS" class="skills">
```

JavaScript

```js
let aTags = document.querySelectorAll('nav.menu > ul > li > a') //獲取指定a標籤
        for (let i = 0; i < aTags.length; i++) { //指定a標籤範圍
            aTags[i].onclick = function (x) { //點擊鼠標觸發
                x.preventDefault() //取消事件的默認動作
                let a = x.currentTarget //獲取當前a的節點
                let href = a.getAttribute('href') //獲取當前a節點屬性href的值
                let element = document.querySelector(href) //返回匹配href的值的ID
                let top = element.offsetTop //獲取該ID相對於其offsetParent 元素的頂部的距離
                window.scrollTo(0, top - 120)//移動到該ID相對於其offsetParent 元素的頂部的距離再減y:120px
            }
        }
```

Knowledge ：

`onclick`  點擊鼠標觸發事件。

`preventDefault()`  取消事件的默認動作。

`getAttribute()` 返回指定属性名的属性值。

`.querySelector()`返回匹配指定 CSS 選擇器元素的第一個子元素 。

`.offsetTop` 為只讀屬性，它返回當前元素相對於其offsetParent 元素的頂部的距離。

`scrollTo(x,y)`可把內容滾動到指定的坐標。