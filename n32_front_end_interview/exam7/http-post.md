出处同上：
请写出一个 HTTP post 请求的内容，包括四部分。
其中
第四部分的内容是 username=ff&password=123
第二部分必须含有 Content-Type 字段
请求的路径为 /path



```
> POST /path HTTP/1.1
> Host: www.baidu.com
> User-Agent: curl/7.54.0
> Accept: */*
> Content-Length: 24
> Content-Type: application/x-www-form-urlencoded
>
* upload completely sent off: 24 out of 24 bytes
 username=ff&password=123
```

