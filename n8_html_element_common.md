##HTML 較複雜的標籤探討

setup local server



install http-server

`npm i -g http-server`



run local server

`http-server -c-1`



---



a achor

will send the require of **"GET"** when you load the page



`<a href="" downlaod>` download file when you click

`<a href="google.com"></a>` that's a file name bot the url

`<a href="//google.com"></a>`that's a file path bot the url 相對路徑

`<a href="http://google.com"></a>` that's a url



Anchor point

 `#xxx ` don't send the require to server

`?name=qqq ` will send the require to server

`./xxx.html` move to xxx.html

`<a href=#class/#id"></a>` jump to the specific location in page 

`<a href="#"></a>` jump to the head of the page

`<a href=""></a>` refersh the page



javascript 偽協議

`<a href="javascript: alert(1)"></a>` run JavaScript

`<a href="javascript:;"></a>` do nothing after you click



---



iframe

```html
<iframe name="XXX" src="./index.html" frameborder="0"></iframe>
<a href ="" target="xxx"></a>
```



---



form & input

will send the require of **"POST"** when you load the page in Form in general



```html
<form action="users" method="post"> <!--set method to POST-->
    <input type="text" value="username">
    <input type="password" value="password">
    <input type="submit" value="submit"> <!---form must be added this line to send the content--> 
</form>
```

```html
<form action="users" method="post"> <!--set method to POST-->
<input type="text" value="username">
<input type="password" value="password">
    <button>sumbmit</button> <!---default to submit--> 
</form>
```



!!!!!!`<input type="button" value="submit"> ` don't send any the requrie 



`<input type="checkbox"> & <label>`

check could be muti-chosose

```html
<input type="checkbox" id="xxx"><label for="xxx">標題與checkbox綁在一起</label>

<!--這種法input方法必需加id而label必需加for與id相同-->
```



```html
<label><input type="checkbox" neme="標題與checkbox綁在一起">標題與checkbox綁在一起</label>

<!--這種法input方法必需加 name=""才會把內容一同發出-->
```



`<input type="radio">`

radio only could be one choose

```HTML
<label><input name="areyouhappy" type="radio" value="YES">YES</label>

<label><input name="areyouhappy" type="radio" value="NO">NO</label>
```



`<select> <option>`

drop down muti-options

```html
<select name="group" multiple> <!--multiple 多選設定-->
<option value="">-</option>
<option value="1">group 1</option>
<option value="2">group 2</option>
<option value="3" disabled>group 3</option>
<option value="4" selected>group 4</option>
</select>
```



---



`<textarea>`



---



`<table>`

`<thead>`

`<tbody>`

`<tfoot>`

`<th> ` h for head

`<td>` d for data

＃代碼按這個次序`<tfoot><tbody><thead>`編寫與實際顯示次序無關，不論你如何編寫，瀏覽器只會按元素定義去顯示順序，最後均是以`<thead><tbody><tfoot>`顯示。

＃如沒有加上`<thead><tbody><tfoot>`，瀏覽器竟會按你的代碼內`<tr><th><td>`次序去顯示。

＃table 每個一格都有邊框，會造成雙變框，如要合併成單邊框則要使用CSS:

`table{border-collapse: collapse;}`

```HTML
       <table>
            <thead>
                <tr>
                    <th></th>
                    <th>name</th>
                    <th>gender</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th></th>
                    <td>Dom</td>
                    <td>M</td>
                    <td>16</td>
                </tr>
                <tr>
                    <th></th>
                    <td>Peter</td>
                    <td>M</td>
                    <td>17</td>
                </tr>
                <tr>
                    <th></th>
                    <td>Tom</td>
                    <td>M</td>
                    <td>18</td>
                </tr>
                <tr>
                    <th>Average</th>
                    <td></td>
                    <td></td>
                    <td>17</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                </tr>
            </tfoot>
        </table>
```

        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>name</th>
                    <th>gender</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th></th>
                    <td>Dom</td>
                    <td>M</td>
                    <td>16</td>
                </tr>
                <tr>
                    <th></th>
                    <td>Peter</td>
                    <td>M</td>
                    <td>17</td>
                </tr>
                <tr>
                    <th></th>
                    <td>Tom</td>
                    <td>M</td>
                    <td>18</td>
                </tr>
                <tr>
                    <th>Average</th>
                    <td></td>
                    <td></td>
                    <td>17</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                </tr>
            </tfoot>
        </table>



`<colgroup></colgroup>`

set the width and color to the table column

```html

<colgroup>
 <col width=100>
 <col bgcolor=red width=200>
 <col width="100">
 <col width="70">
</colgroup>
            
```



 <table border="1">
            <colgroup>
                <col width=100>
                <col bgcolor=red width=200>
                <col width="100">
                <col width="70">
            </colgroup>
            <thead>
                <tr>
                    <th></th>
                    <th>name</th>
                    <th>gender</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th></th>
                    <td>Dom</td>
                    <td>M</td>
                    <td>16</td>
                </tr>
                <tr>
                    <th></th>
                    <td>Peter</td>
                    <td>M</td>
                    <td>17</td>
                </tr>
                <tr>
                    <th></th>
                    <td>Tom</td>
                    <td>M</td>
                    <td>18</td>
                </tr>
                <tr>
                    <th>Average</th>
                    <td></td>
                    <td></td>
                    <td>17</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                </tr>
            </tfoot>
        </table>

