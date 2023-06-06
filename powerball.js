let history = [];
let currentIndex = -1;

// Lists of excluded numbers
let excludedWhiteBallNumbers = [];
let excludedPowerballNumbers = [];

function range(start, end) {
    return Array.from({length: end - start + 1}, (_, i) => start + i);
}

function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}

function generatePowerballNumbers() {
    let allWhiteBallNumbers = difference(range(1, 69), excludedWhiteBallNumbers);
    let allPowerballNumbers = difference(range(1, 26), excludedPowerballNumbers);
  
    let whiteBalls = [];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * allWhiteBallNumbers.length);
        whiteBalls.push(allWhiteBallNumbers[randomIndex]);
        allWhiteBallNumbers.splice(randomIndex, 1);
    }
    let powerball = allPowerballNumbers[Math.floor(Math.random() * allPowerballNumbers.length)];
  
    return {
        whiteBalls: whiteBalls.sort((a, b) => a - b),
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
    const whiteBallsElement = document.getElementById("white-balls");
    whiteBallsElement.textContent = numbers.whiteBalls.join(", ");
    whiteBallsElement.style.border = "3px solid black";

    const powerballElement = document.getElementById("powerball-number");
    powerballElement.textContent = numbers.powerball;
    powerballElement.style.border = "3px solid red";
}

// Event listeners for excluding numbers
document.getElementById('exclude-white-number-btn').addEventListener('click', function() {
    var numberToExclude = Number(document.getElementById('exclude-white-number-input').value);
    excludedWhiteBallNumbers.push(numberToExclude);
    document.getElementById('excluded-white-numbers').textContent = excludedWhiteBallNumbers.join(', ');
});

document.getElementById('exclude-powerball-number-btn').addEventListener('click', function() {
    var numberToExclude = Number(document.getElementById('exclude-powerball-number-input').value);
    excludedPowerballNumbers.push(numberToExclude);
    document.getElementById('excluded-powerball-numbers').textContent = excludedPowerballNumbers.join(', ');
});
