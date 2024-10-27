var timer;
var seconds = 0;

function formatTime(sec) {
    var hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    var mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    var secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function start() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById("display").innerText = formatTime(seconds);
        }, 1000);
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    seconds = 0;
    document.getElementById("display").innerText = "00:00:00";
}