# jQuery 初體驗，動手試試吧



### jQuery 是什麼？

它是一個 javaScript 的函式庫，旨在簡化 javaScript 的操作。

簡單而言：更簡單，更有效率！



### 從原生DOM API 實現“獲取所有元素，並為這些元素加上class”，原生代碼是怎樣實行？

HTML

```html
<body>
  <ul>
    <li>items1</li>
    <li>items2</li>
    <li>items3</li>
  </ul>
</body>
```

1. 獲取所有元素
   `var getItems = document.querySelectorAll('ul>li')`

2. 為獲取的元素加一個class

   ```js
   for(i=0; i<getItems.length; i++){
       getItems[i].classList.add('red')
   }
   ```

3. 最後獲得一個 NodeList 的偽數組

   ```js
   NodeList(3) [li.red, li.red, li.red]
   0: li.red
   1: li.red
   2: li.red
   length: 3
   __proto__: NodeList
   ```

   

以上就是使用原生 js 的 api 達成需求，但為了實現更簡單，更有效率。我們可以嘗試進行一系列改造。



### 如何以更簡短代碼實現以上需求？

#### 1-封裝函數

封裝一個 getNode() 函數

```js
function getNode(selector){
    var node = document.querySelectorAll(selector)
    return node
    ｝

var getItems = getNode('ul>li')
```

封裝一個 addClass() 函數

```js
function addClass(node,className){
    for(i=0; i<node.length; i++){
    node[i].classList.add(className)
    }
}
    
addClass(getItems,'red')
```



#### 2-命名空間-給它們改個名字

命名空間的目的是避免重複與其他係變量全局命名，例如其他人也可能用 `getNode()`，`addClass() `這樣的命名，引致命名相同導致互相覆蓋或錯誤。

```js
window.HELLOKITTY = {}

HELLOKITTY.getNode = function getNode(selector){
    var node = document.querySelectorAll(selector)
    return node
}

HELLOKITTY.addClass = function addClass(node,className){
    for(i=0; i<node.length; i++){
    node[i].classList.add(className)
    }
}

var getItems = HELLOKITTY.getNode('ul>li')
HELLOKITTY.addClass(getItems,'blue')
```



### 3-能不能把node放在前面呢？

上方例子是把node或選擇器放在函數的參數傳入，但可否把node放在前面，從而更方便呢？



##### 方法1：

將它們加入`Node.prototype` 成為公用屬性。但有可能覆蓋原有`Node.prototype`的函數，造成影響。



##### 方法2：

弄一個新的接口 BetterNode，是一種無侵入的方法。

```js
window.HELLOKITTY = function(nodeOrSelector) {
  let node = {}
  if (typeof nodeOrSelector === 'string'){
    node = document.querySelectorAll(nodeOrSelector)
  }else if(nodeOrSelector instanceof Node){
    node = {
      0: nodeOrSelector,
      length: 1
    }
  }
  
  node.addClass = function(className){
    for(let i=0; i<this.length; i++){
      this[i].classList.add(className)
    }
  }
  
  return node
}

var getItems = HELLOKITTY('ul>li')
getItems.addClass('green')
```



### 4-不喜歡HELLOKITTY的命名？改成今日的主題吧：jQuery

改成 jQuery

```js
window.jQuery = function(nodeOrSelector) {
  let node = {}
  ...//看上面吧，不想篇幅太長，省略...
  return node
}

var getItems = jQuery('ul>li')
getItems.addClass('yellow')
```



### 5- 打jQuery 好像不夠方便，再改個簡單的：$

```js
window.$ = function(nodeOrSelector) {
  let node = {}
  ...//看上面吧，不想篇幅太長，省略...
  return node
}

//最後執行代碼會變成怎樣？ 看第6點就知道啦！
```



### 6-  從以下執行代碼，你明白為何是“更簡單，更有效率”吧！

`$('ul>li').addClass('navy')` , 看到這裡其實你就基本了解到 jQuery 是什麼了。



### 總結

jQuery的更簡單，更有效率遠不止如此：

1- jQuery 還有動畫、AJAX 等模塊，不止 DOM 操作
2- jQuery 的功能更豐富
3- jQuery 其實使用了 prototype，但這裡沒有
4- jQuery 在兼容性方面做得很好，1.7 版本兼容到 IE 6 **(2019的今天，微軟也叫你不要再用了，這點可忽略吧！）**

