# 類型轉換





###to string

1 .toString()

2  '' + 任何一類型

```js
'' + 1
// '1' 字符串

1 + '1'
// .toString(1) + '1'
// '11' 字符串
```

3 window.String()



###to boolean

1 boolean()

2 !!



以下情況 boolean = false

```js
number : 0 NaN = false

string : '' = false

null = false

undefined = false

obj : all = true
```





### to number

```js
number('1') === 1

pareseInt('1',10)===1

parseFloat('1.23')===1.23

'1'-0===1

+ '1' //1
```



