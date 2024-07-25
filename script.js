// Set the countdown timer
let countdownTime = 3 * 60 * 60; 

function updateTimer() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    document.getElementById("timer").textContent =
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    if (countdownTime > 0) {
        countdownTime--;
    } else {
        countdownTime = 3 * 60 * 60;
    }
}


setInterval(updateTimer, 1000);
