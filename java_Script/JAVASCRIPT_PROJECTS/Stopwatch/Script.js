let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", function () {
    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {
        milliseconds++;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        display.innerText =
            (hours < 10 ? "0" + hours : hours) + " : " +
            (minutes < 10 ? "0" + minutes : minutes) + " : " +
            (seconds < 10 ? "0" + seconds : seconds) +" :" +
            (milliseconds < 10 ? "0" + milliseconds : milliseconds);

    }, 10);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerText = "00 : 00 : 00 : 00";
});
