著名面试题：
如何实现数组去重？
假设有数组 array = [1,5,2,3,4,2,3,1,3,4]
你要写一个函数 unique，使得
unique(array) 的值为 [1,5,2,3,4]
也就是把重复的值都去掉，只保留不重复的值。



ES 6

```js
var array = [1,5,2,3,4,2,3,1,3,4]

function unique(){
  const mySet = new Set(array)
  return mySet
}

console.log(unique()) //Set(5) {1, 5, 2, 3, 4}
```

`new Set()`: http://es6.ruanyifeng.com/#docs/set-map



ES 5 

```js
var array = [1,5,2,3,4,2,3,1,3,4]

function unique(a){
  var result = a.filter(function(value, index, array){
    return array.indexOf(value) === index
  })
  return result
}

console.log( unique(array) ) //(5) [1, 5, 2, 3, 4]
```

