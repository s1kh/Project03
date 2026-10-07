let count = 0;

const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateDisplay() {
    countElement.textContent = count;

    if (count > 0) {
        countElement.style.color = "green";
    } else if (count < 0) {
        countElement.style.color = "red";
    } else {
        countElement.style.color = "black";
    }
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);