### 圓角 radius

`border-radius`

接受px、em、rem等等單位的值



`border-radius`

接受1-4個值：
1個值：四個角都為同一個值
2個值：左上角和右下角使用第一個值，右上角和左下角使用第二個值
3個值：左上角使用第一個值，右上、左下使用第二個值，右下角使用第三個值
4個值：從左上起順時針使用1-4個值
`border-top-left-radius`、 `border-top-right-radius`、 `border-bottom-right-radius`、 `border-bottom-left-radius`分別表示四個角，可以單獨設置樣式。



### 陰影 box-shadow

5個值

 `inset`


陰影默認在邊框之外，使用inset則在邊框內

 

`<offset-x>` `<offset-y>`


設置陰影偏移量，x表示水平偏移，y表示垂直偏移，可以有負值

 

`<blur-radius>`


此值越大，模糊面積越大，陰影越淡

 

`<spread-radius>`


默認為0，正值時，陰影擴大；負值時，陰影縮小

 


 ` <color>`


設置陰影顏色