// 要素の取得
// getElementById ID要素の取得
// querySelector CSSのときに使う指定で検索して取得する
const image = document.querySelector(".image");
let i = 1;

const pathList = [
    "./image/slide01.jpg",
    "./image/slide02.jpg",
    "./image/slide03.jpg",
    "./image/slide04.jpg",
    "./image/slide05.jpg",
    "./image/slide06.jpg",
    "./image/slide07.jpg",
    "./image/slide08.jpg",
    "./image/slide09.jpg",
    "./image/slide10.jpg",
];

// 一定時間ごとに処理を行う
// setInterval(処理, 処理間隔)
// タイマー処理、イベント処理(クリック)
setInterval(function () {
    // 画像を操作する
    // "", '', `` (${値})

    // 1. 必ずファイル名に数字が入っていないといけない (abc)
    // 2. 欠番があると表示されない
    // 3. 範囲を超えた場合表示されない

    image.style.backgroundImage = `url("${pathList[i]}")`;

    // i++
    // 0, 1, 2, 0, 1, 2, 0, 1, 2
    // pathList
    i = (i + 1) % pathList.length;
}, 8000);
