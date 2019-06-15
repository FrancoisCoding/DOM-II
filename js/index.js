// Your code goes here
// Sounds
const waves = document.getElementById("waves");
const clickMe = document.getElementById("clickMe");
const boat = document.getElementById("boat");
var soundFlag = true;

// On click
boat.onclick = function () {
    if (soundFlag) {
        waves.pause();
        waves.currentTime = 0;
        waves.play();
    }
}

// Mouse Over
boat.onmouseover = function () {
    if (soundFlag) {
        clickMe.pause();
        clickMe.currentTime = 0;
        clickMe.play();
    }
}
