

###scroll effect

JavaScript

```js
function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                x.preventDefault()
                let a = x.currentTarget
                let href = a.getAttribute('href')
                let element = document.querySelector(href)
                let top = element.offsetTop

                let currentTop = window.scrollY //
                let targetTop = top - 120 //
                let s = targetTop - currentTop //
                var coords = { y: currentTop }; //
                var t = Math.abs((s / 100) * 300) //
                if (t > 500) { t = 500 } //
                var tween = new TWEEN.Tween(coords) //
                    .to({ y: targetTop }, t) //
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .onUpdate(function () {
                       window.scrollTo(0, coords.y) //
                    })
                    .start(); //
            }
        }
```





### 高亮元素

JavaScript

```JS
window.onscroll = function (xx) {
            if (window.scrollY > 0) {
                topNavBar.classList.add('sticky')
            } else {
                topNavBar.classList.remove('sticky')
            }

            let specialTags = document.querySelectorAll('[data-x]')
            let minIndex = 0
            for (let i = 0; i < specialTags.length; i++) {
                if (Math.abs(specialTags[i].offsetTop - window.scrollY) < (Math.abs(specialTags[minIndex].offsetTop - window.scrollY)))
                    minIndex = i
                console.log(minIndex)
            }
            for (let i = 0; i < specialTags.length; i++) {
                specialTags[i].classList.remove('active')
            }
            specialTags[minIndex].classList.add('active')
            let id = specialTags[minIndex].id
            let a = document.querySelector('a[href="#' + id + '"]')
            let li = a.parentNode
            let brothersAndMe = li.parentNode.children
            for (let i = 0; i < brothersAndMe.length; i++) {
                brothersAndMe[i].classList.remove('highlight')
            }
            li.classList.add('highlight')
        }
```

