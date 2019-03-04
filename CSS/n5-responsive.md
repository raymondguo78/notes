```vim
npm i -g http-server

http-server -c-1

//創建本地server
```



### 媒體查詢 @media

@media有四種媒體類型：

all （適用於所有設備）

screen （用於屏幕）

print （用於打印設備）

speech （用於發聲設備）

默認情況下使用 all 類型



```css
/*螢幕在 320px-768px 生效以下的樣式*/

@media (min-width:320px) and (max-width: 768px){
    body{
        background:#f79d8b;
    }
}
```



```HTML
<!--螢幕小於在500px以下,，生效mobile.css-->

<link rel="stylesheet" media="screen and (max-width: 500px)" href="./mobile.css">
```



https://www.w3schools.com/csSref/css3_pr_mediaquery.asp



### viewpoint

```
meta:vp
```

### viewport

使用`<mtea name="viewport">`

標籤包含 `name`、 `content`、 `http-equiv`、 `charset`、 `scheme`五個屬性。

當 `name`的值為 `viewport`時可以使頁面適應移動端設備，常用的`meta viewport`

標籤如下：

 `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">`



其中：
width：控制viewport寬度的大小，可以指定的一個值（或特殊值），如500，或device-width //特殊值
height：控制viewport寬度的大小，同上
initial-scale：控制頁面第一次加載時的縮放比例
maximum-scale：允許用戶縮放的最大比例
minimum-scale：允許用戶縮放的最小比例
user-scalable：用戶是否可以手動縮放



### mobile

mobile 交互方式不同：

1－沒有 hover

2－有touch事件

3－沒有resize

4－沒有滾動條