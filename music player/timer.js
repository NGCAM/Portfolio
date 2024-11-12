// ボタンを押したら、タイマーが開始。
// もう一度ボタンを押したら、タイマーが停止

// setIntervalの戻り値を格納する変数
// タイマーが止まっているとNull
let timer = null;
let actionButton = document.getElementById("actionButton");

const m = document.querySelector(".m");
const s = document.querySelector(".s");

let totalSecond = 0;
let startDate = null;
let limit = 100;

function zeroPadding(number) {
    return ("00" + number).slice(-2);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    document.querySelector(".box").style.backgroundColor = "white";
}

actionButton.addEventListener("click", function () {
    if (timer) {
        // 停止
        stopTimer();
    } else {
        // 開始
        startDate = Date.now(); // ミリ秒(1970/1/1)
        timer = setInterval(function () {
            let second = limit - parseInt((Date.now() - startDate) / 1000);

            if (second <= 0) {
                stopTimer();
            } else if (second <= 5) {
                document.querySelector(".box").style.backgroundColor = "";
            }

            m.innerText = zeroPadding(parseInt(second / 60));
            s.innerText = zeroPadding(second % 60);
        }, 100);
    }
});
