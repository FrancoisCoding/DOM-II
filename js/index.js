// Your code goes here
// Sounds
const waves = document.getElementById("waves");
const clickMe = document.getElementById("clickMe");
const busSong = document.getElementById("busSong");
const boat = document.getElementById("boat");
const bus = document.getElementById("bus");
var soundFlag = true;

// On click
boat.onclick = function () {
    if (soundFlag) {
        waves.pause();
        waves.currentTime = 0;
        waves.play();
    }
}
bus.onclick = function () {
    if (soundFlag) {
        busSong.pause();
        busSong.currentTime = 0;
        busSong.play();
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

// Key Down
window.onkeydown = function() {
      alert("Don't type here.");
};

// Wheel
window.onmousewheel = function() {
      console.log("Just Keep Scrolling.");
};

// Prevent Page Refresh
const links = document.getElementsByClassName("nav-link")
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
        event.preventDefault()
    });
} 