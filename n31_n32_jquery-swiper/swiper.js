//n32 - jQuery 無縫 輪播圖優化代碼
//初始狀態
let n = 1
start()

//運行模式
setInterval(() => {
    makeLeave(getImages(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImages(n + 1))
    n += 1
}, 3000)


//函數
function start() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}


function getImages(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}


function makeCurrent($node) {
    $node.removeClass('enter leave').addClass('current')
}

function makeEnter($node) {
    $node.removeClass('leave current').addClass('enter')
}

function makeLeave($node) {
    $node.removeClass('enter current').addClass('leave')
    return $node
}


function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}


//n31 - jQuery 有縫 輪播圖優化代碼
var allButtons = $('#button>span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        console.log('hi')
        var index = $(x.currentTarget).index()
        var p = index * - 300
        $('#images_n31').css({
            transform: 'translate(' + p + 'px)',
        })
        num = index
        activeButton(allButtons.eq(num))
    })
}


var num = 0
var size = allButtons.length
playSlide(num % size)

var timerId = setTimer()

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})

$('.window').on('mouseleave', function () {
    timerId = setInterval(() => {
        num += 1
        playSlide(num % size)
    }, 1000)
})


//函數
function setTimer() {
    return setInterval(() => {
        num += 1
        playSlide(num % size)
    }, 1000)
}

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function activeButton($button) {
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}