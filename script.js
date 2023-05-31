let history = [];
let currentIndex = -1;

function generatePowerballNumbers() {
    let whiteBalls = new Set();
    while (whiteBalls.size < 5) {
        whiteBalls.add(Math.floor(Math.random() * 69) + 1);
    }
    let powerball = Math.floor(Math.random() * 26) + 1;
    return {
        whiteBalls: [...whiteBalls].sort((a, b) => a - b),
        powerball: powerball,
    };
}

document.getElementById("generate-btn").addEventListener("click", function () {
    const numbers = generatePowerballNumbers();
    history.push(numbers);
    currentIndex++;
    displayNumbers(numbers);
});

document.getElementById("prev-btn").addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        const numbers = history[currentIndex];
        displayNumbers(numbers);
    }
});

function displayNumbers(numbers) {
    document.getElementById("white-balls").textContent = numbers.whiteBalls.join(", ");
    document.getElementById("powerball-number").textContent = numbers.powerball;
}
