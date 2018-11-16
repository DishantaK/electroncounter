const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const inputField = document.getElementById("inputfield");

let count = 0;
let timer;

const counter = function () {
    count++;
    inputField.value = count;
}

const startTimer = function () {
    timer = setInterval(counter, 1000);
}

const stopTimer = function () {
    inputField.value = 0;
    clearInterval(timer);
}

startButton.addEventListener("click", startTimer, false);
stopButton.addEventListener("click", stopTimer, false);