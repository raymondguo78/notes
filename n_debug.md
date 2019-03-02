我以這題為例, 說說debug的思路 .. 以後你們遇到bug先按照這個思路自己走一遍

<http://js.jirengu.com/mowipenifa/1/edit?html,js,output>

1. 發現報錯 cannot read property 'classlist' of undefined 
2. 翻譯 無法在undefined上讀取classlist屬性
3. 報錯旁邊有個行號的.去到這個報錯的地方
4. 根據2 就是說 nodes[i] 是undefined
5. 因為是在循環裡 我不確定是哪個 nodes[i] 是undefined . 所以我直接在循環裡,報錯語句的上面 console.log(i, nodes[i])
6. 得到報錯之前輸出了 0, undefined 
7. 發現第一次就報這個錯誤了,也就是說 我的nodes連0都沒有被賦值
8. nodes在哪裡被賦值的, 發現是在上面的if的循環裡
9. 各種log看看進了哪個if語句 是否進入了循環
10. 此題發現根本沒有走循環
11. 思考為什麼不走循環
12. 循環的終止條件,或者初始狀態不對
13. 初始狀態 i = 0 , 那麼終止的條件應該是 當 i > xxxx時 
14. 發現 nodes.length 
15. nodes的length哪來的,看到上面定義的地方 並沒有給 nodes.length 賦值
16. 原來我用錯