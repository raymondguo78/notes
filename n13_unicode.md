### Course 1-12 Review





# 電腦如何儲數據

0 1 二進制數字

0 - 9 十進制轉二進制

a-z A-Z ASCII 128字母及符號

中文字 GBK 2312

- 後來出了 GB 13080 但沒人用

全球所有符 Unicode

- UTF-8 簡化Unicode編碼，節省儲存空間



任何事情做3次，減低錯誤



---



常用命令事

curl -L https://google.com

curl -s -v -- https://google.com

ping https://google.com



---



##HTTP 請求及回應(需要背起來，包括狀態碼200, 300, 400...)

```
GET 请求 

GET /?w=1 HTTP/1.1
Host: baidu.com
Accept: text/html

响应

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 10000

<!DOCTYPE>
<html>......</html>

POST 请求

POST /login?w=1 HTTP/1.1
Host: baidu.com
Accept: application/ms-word
Content-Type: application/x-www-form-urlencoded
Content-Length: 10

username=fangfang&password=mima

响应

HTTP/1.1 403 Forbidden
Content-Type: application/md-word
Content-Length: 200

word格式
```



比喻版请求与响应

```
工资请求

GET 11月工资 工资协议/1.1
Host: 百度公司
Accept: 现金, 支付宝转账, 银行汇款

工资响应

工资协议/1.1 200 OK
类型: 现金
现金张数: 10

100
```



## HTML

非內容放在 <head>

內容放在 <body>



## CSS

float + clearfix

高度是由什麼決定 文化檔流元素的高度總和

position:absolute + relative