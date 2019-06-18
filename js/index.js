// Your code goes here

// Variables
const links = document.getElementsByClassName("nav-link");
const waves = document.getElementById("waves");
const clickMe = document.getElementById("clickMe");
const busSong = document.getElementById("busSong");
const incorrect = document.getElementById("incorrect");
const boat = document.getElementById("boat");
const bus = document.getElementById("bus");
var textInput = document.getElementsByClassName("textInput");
var html = document.getElementsByTagName("html");
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
window.onkeydown = function () {
    alert("Don't type here.");
};

// Wheel
window.onmousewheel = function () {
    console.log("Just Keep Scrolling.");
};

// Drag/Drop
window.ondrag = function () {
    if (soundFlag) {
        incorrect.pause();
        incorrect.currentTime = 0;
        incorrect.play();
    }
};

// Load
window.onload = function () {
    alert("Welcome!! Please do not type, drag, click links, resize, doubleclick, or  ");
};

// Focus
for (var i = 0; i < textInput.length; i++) {
    textInput[i].addEventListener("focus", function () {
        console.log("No Typing!!")
    });
}

// Resize
window.onresize = function () {
    alert("Please Change Me Back");
};

// Double Click
window.ondblclick = function () {
    html[0].style.background = "red"
};

// On Mouse Out
bus.onmouseout = function () {
    alert("Please CLICK on the bus image");
};

// Prevent Page Refresh
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
        event.preventDefault()
    });
}
