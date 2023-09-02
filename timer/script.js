let currentTime
let startButton = document.getElementById('timer__start')
let timerInterval
function updateTimer() {
    let minutes = Math.floor(currentTime / 60)
    let seconds = currentTime % 60
    document.getElementById('timer').innerText = `${minutes}:${seconds}`
}

function startTimer() {
    currentTime = 60*10
    startButton.disabled = true
    updateTimer()
    timerInterval = setInterval(function() {
        if (currentTime > 0) {
            currentTime--
            updateTimer()
        } else {
            clearInterval(timerInterval)
            startButton.disabled = false
        }
    }, 1000)
}

startButton.addEventListener('click', startTimer)