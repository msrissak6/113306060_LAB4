// 1. 建立按鍵對應音效的映射表
const soundMap = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3"
};

// 2. 為所有鼓按鈕添加點擊事件監聽器
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        const key = this.classList[0]; // 取得按鈕的 class 名 (w, a, s, d, j, k, l)
        playSound(key);
        animateButton(key);
    });
});

// 3. 添加鍵盤按下事件監聽器
document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase(); // 確保按鍵為小寫
    if (soundMap[key]) { // 確認按下的鍵有對應音效
        playSound(key);
        animateButton(key);
    }
});

// 4. 播放對應的音效
function playSound(key) {
    const audio = new Audio(soundMap[key]);
    audio.play();
}

// 5. 為按下的按鈕增加動畫效果
function animateButton(key) {
    const button = document.querySelector(`.${key}`);
    if (button) {
        button.classList.add("pressed");
        setTimeout(() => button.classList.remove("pressed"), 100); // 100ms 後移除動畫效果
    }
}
