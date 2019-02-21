# 字符串 string



將單或多個字符放在單或雙引號內視為字符串 string

```js
'hello world'
"hello world"
'hello "world"' //單引號內部可字符可使用雙引號
"hello 'world'" //雙引號內部可字符可使用單引號
```



如果在單引號內部要使用單引號必須加上反斜線 blackslash `\` ; 雙引號亦同樣

```js
'hello \'world\''
"hello \"world\""
```



在 js 中字符串如果分成多行會報錯，

```js
'a
b
c'
//報錯
```



以下方法可以做分成多行顯示：

```js
'a\
b\
c'
//'abc' 
//但 \ 之後必須換行，不能有空隔或其他字符，否則會報錯
```

```js
'a'
+ 'b'
+ 'c';
//'abc'
```



此外 `\` 在特定字符串內有特定含義及功能，稱為轉義符。可參考：

https://wangdoc.com/javascript/types/string.html#转义



```js
\0 ：null（\u0000）
\b ：后退键（\u0008）
\f ：换页符（\u000C）
\n ：换行符（\u000A）
\r ：回车键（\u000D）
\t ：制表符（\u0009）
\v ：垂直制表符（\u000B）
\' ：单引号（\u0027）
\" ：双引号（\u0022）
\\ ：反斜杠（\u005C）
```





### .length 

`length` 是返回字符串的長度，但留意有些字符串，如單符號：'𝌆' 返回是2

```js
'𝌆'.length // 2
```

這個情況牽涉 js 不支援4字節的字符，只支援2字節的字符，如'𝌆' 實際是4字節，所以返回的長度是2。對於這個情況解析可參考：

https://wangdoc.com/javascript/types/string.html#字符集



### 字符集

JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。詳細可參考上述網址。



### Base 64 轉碼

有時候文本可能會遇到不可列印的符號，便可透過 base 64 轉碼，把它們轉成可打印的符號。詳細做法可參考：

https://wangdoc.com/javascript/types/string.html#base64-转码



以下函數能將字符串轉為Base 64編碼

```js
btoa('abc@gmail.com')
"YWJjQGdtYWlsLmNvbQ=="

atob("YWJjQGdtYWlsLmNvbQ==")
"abc@gmail.com"
```



















