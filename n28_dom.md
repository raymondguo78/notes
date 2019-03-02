## DOM Document Object Model



####進階：DOM API

優秀筆記展示：https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/B8-DOM.md



####提問：DOM API 要學習到什麼程度，需要會背嗎？

不需要會背，只需要用到的時候查 MDN 即可，前端面試也不會問你細節的。
大概知道如何對 div 進行增刪改查即可。
DOM 是一棵樹（tree）



####樹上有 Node

Node是構造函數 分為 Document（html）、Element（元素）和 Text（文本），以及其他不重要的。



#### Node 的接口

- 屬性

`childNodes`
`firstChild`
`innerText`

```JS
//沒有 innerText 之前
var text = ''
for(let i=0; i < div.childNodes.length; i++){
    if(div.childNodes[i].nodeType ===3){
        text += div.childNodes[i].nodeValue
    }
}
text
```

`lastChild`
`nextSibling`
`nodeName`
`nodeType`
`nodeValue`
`outerText`
`ownerDocument`
`parentElement`
`parentNode`
`previousSibling`
`textContent`



`innerText` vs `textContent`

- `textContent` 會套取所有元素內容，包括`<script>`和`<style>`元素，然而`innerText`不會。

- `innerText`意識到樣式，不會返回隱藏元素的文本，而`textContent`會。
- 由於`innerText`受css樣式影響（較慢），觸發重排(reflow)，而`textContent`不會（較快）。




如果記不住就背下以下單詞：

child / children / parent
node
first / last
next / previous
sibling / siblings
type
value / text / content
inner / outer
element
然後互相組合



- 方法（如果一個屬性是函數，那麼這個屬性就也叫做方法；換言之，方法是函數屬性）

`appendChild()`
`cloneNode()` 

```
var dupNode = node.cloneNode(deep);
```

*node*

The node to be cloned.

*dupNode*

The new node that will be a clone of `node`

*deep (選擇性)*

`true` if the children of the node should also be cloned, or `false` to clone only the specified node.



`contains()`
`hasChildNodes()`
`insertBefore()`
`isEqualNode()`
`isSameNode()`

The `**Node.isSameNode()**` method tests whether two nodes are the same, that is if they reference the same object.



`removeChild()` // 移除後，但會儲於內存
`replaceChild()`
`normalize()` // 常規化

搞清楚英文單詞的意思就知道用法
如果發現知道英文後依然不明白用法，看 MDN 的例子即可，如 normalize
DOM APi 無外乎「增刪改查」



####Document 接口

- 屬性
  `body`
  `characterSet` //UTF-8
  `childElementCount`
  `children`
  `doctype`
  `documentElement`
  `domain`
  `head`
  `hidden`
  `images`
  `links`
  `location`
  `onxxxxxxxxx`
  `origin`
  `plugins`
  `referrer` //important! about ddos attack
  `scripts`
  `scrollingElement`
  `styleSheets`
  `title`
  `visibilityState`



- 方法：

`close()`
`createDocumentFragment()`
`createElement()`
`createTextNode()`
`execCommand()`
`exitFullscreen()`
`getElementById()`
`getElementsByClassName()`
`getElementsByName()`
`getElementsByTagName()`
`getSelection()
hasFocus()`
`open()`
`querySelector()`
`querySelectorAll()`
`registerElement()`
`write()`
`writeln()`



盡量不要用` innerHTML`



####Element 的接口

DOM API 反人類

獲取元素
以前之後 document.getElementById, document.getElementsByTagName, document.getElementsByClassName
太反人類，於是有了 jQuery
後來 DOM API 終於抄襲 jQuery 提供了 document.querySelector 和 document.querySelectorAll
但是依然沒有 jQuery 好用，因為「不一致」

獲取下一個元素

獲取兄弟們DOM API



---

頁中節點是透過構造函數 `element`, `text`, `document`, `coment` 



