## 算法初級

https://visualgo.net/bn/sorting 視覺化算法演示



偽代碼算法例子：

```
a <- {
    '0': 23
    '1': 43
    '2': 239
    '3': 1321
    '4': 90
    'length': 5
}
min <-  a['0']
index <- 1
while index < a['length']
    if a[index] < min
        min <- a[index]
    end
    index <- index + 1
end
print min
```



冒泡排序(二元對比)

**3 1** 4 5 2 6

1 **3 4** 5 2 6

1 3 **4 2** 5 6

1 3 2 **4 5** 6

1 3 2 4 **5 6**

**1 3** 2 4 5 *6*

1 **3 2** 4 5 *6*

1 2 **3 4** 5 *6*

1 2 3 **4 5** *6*

**1 2** 3 4 *5* *6*

1 **2 3** 4 *5 6*

1 2 **3 4** *5 6*

**1 2** 3 *4 5 6*

1 **2 3** *4 5 6*

**1 2** *3 4 5 6*

1 *2 3 4 5 6*

![bubble-short](/Users/rk/Desktop/xiedaimala/myCourse/Course14_XX/Course14_ Algorithm/bubble-short.png)



```javascript
function bubble_Sort(a)
{
    var swapp; 
    var n = a.length-1; // -1 我意思
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
```

![bubble-short-flow](/Users/rk/Desktop/xiedaimala/myCourse/Course14_XX/Course14_ Algorithm/bubble-short-flow.png)

### 我的理解：

![bubble_myFlow](/Users/rk/Desktop/xiedaimala/myCourse/Course14_XX/Course14_ Algorithm/bubble_myFlow.jpeg)



选择排序

6 3 2 4 5 **1**

1 **3 2 4 5 6**

1 2 **3 4 5 6**

1 2 3 **4 5 6**

1 2 3 4 **5 6**

1 2 3 4 5 **6**



### 我的理解：

![selection_myFlow](/Users/rk/Desktop/xiedaimala/myCourse/Course14_XX/Course14_ Algorithm/selection_myFlow.jpeg)



插入排序

![插入排序](/Users/rk/Desktop/xiedaimala/myCourse/Course14_XX/Course14_ Algorithm/插入排序.png)





基数排序![基數排序](/Users/rk/Desktop/xiedaimala/myCourse/Course14_XX/Course14_ Algorithm/基數排序.png)





快排 

![快排](/Users/rk/Desktop/xiedaimala/myCourse/Course14_XX/Course14_ Algorithm/快排.png)



快排也有機會變得很慢

例如：

6 5 4 3 2 1 *對比5次

5 4 3 2 1 6 

4 3 2 1 5 6 

3 2 1 4 5 6 

2 1 3 4 5 6 

1 2 3 4 5 6



隨機排序可能會較快，不要每次抽第一個作基準。

3 6 2 4 5 1

3 2 



---



javascript算法參考網站：

https://khan4019.github.io/front-end-Interview-Questions/sort.html

https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php

https://blog.techbridge.cc/2017/08/19/sotring-algorithm/