window.onload = function () {
    let seconds = 0;
    let tens = 0;
    const appendTens = document.getElementById("tens");
    const appendSeconds = document.getElementById("seconds");
    const buttonStart = document.getElementById("button-start");
    const buttonStop = document.getElementById("button-stop");
    const buttonReset = document.getElementById("button-reset");
    let interval;

    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(interval);
    };

    buttonReset.onclick = function () {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        appendTens.textContent = "00";
        appendSeconds.textContent = "00";
    };

    function startTimer() {
        tens++;

        if (tens <= 9) appendTens.textContent = "0" + tens;
        else appendTens.textContent = tens;

        if (tens > 99) {
            seconds++;
            appendSeconds.textContent = seconds <= 9 ? "0" + seconds : seconds;
            tens = 0;
            appendTens.textContent = "00";
        }
    }
};
