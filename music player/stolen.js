document.querySelector( "#retrobg-sun" ).onclick = () => {
    document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );
  };

  let timer = null;
const button = document.getElementById("actionButton");
const m = document.querySelector(".m");
const s = document.querySelector(".s");
const player = new Audio("./sound/nightcall.mp3");

let totalSecond = 0;
let startDate;
const limit = 3 * 60;

// 必ず2桁にする(1桁の場合は先頭に0をつける)
function zeroPadding(number) {
    return ("00" + number).slice(-2);
}

function startTimer() {
player.play();
player.loop = true;
}

function stopTimer() {
    document.exitFullscreen();
    clearInterval(timer);
    timer = null;
    totalSecond += parseInt((Date.now() - startDate) / 1000);
    document.querySelector(".box").style.backgroundColor = "white";
    button
        .querySelector("path")
        .setAttribute(
            "d",
            "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
        );
    player.pause();
    // player.currentTime = 0;
    document.querySelector(".building").style.animationPlayState = "paused";
}

function reset() {}

button.addEventListener("click", function () {
    if (timer) {
        // 停止
        stopTimer();
    } else {
        // 開始
        // 1000 + 処理時間
        startDate = Date.now();
        // ミリ秒 (1970/1/1から何ミリ秒経っているのか？)
        timer = setInterval(function () {
            let second = parseInt((Date.now() - startDate) / 1000) + totalSecond;
            m.innerText = zeroPadding(parseInt(second / 60));
            s.innerText = zeroPadding(second % 60);
        }, 100);

        startTimer();
    }
});

for (var i = 0; i < 50; i++) {
    //get random dimensions
    var x = Math.random() * 100;
    var y = Math.random() * 55;
    var d = Math.random() * 4;
    var sc = Math.random() * 2 + 1.5;
    //create new element and add to html
    var star = document.createElement("div");
    star.classList.add("star");
    var sky = document.querySelector(".box");
    sky.appendChild(star);
    star.style.width = d + "px";
    star.style.height = d + "px";
    star.style.top = y + "%";
    star.style.left = x + "%";
    star.style.animationDuration = sc + "s";
}


