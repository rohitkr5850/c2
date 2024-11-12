let timerInterval = null;
let elapsedTime = 0;

// Function to format time in MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
}

// Function to update the display
function updateDisplay() {
    document.getElementById('timer-display').textContent = formatTime(elapsedTime);
}

// Start button event listener
document.getElementById('start-button').addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000);
    }
});

// Stop button event listener
document.getElementById('stop-button').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

// Reset button event listener
document.getElementById('reset-button').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();
