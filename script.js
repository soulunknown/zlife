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
  const whiteBallsElement = document.getElementById("white-balls");
  whiteBallsElement.textContent = numbers.whiteBalls.join(", ");
  whiteBallsElement.style.border = "3px solid black";

  const powerballElement = document.getElementById("powerball");
  powerballElement.textContent = numbers.powerball;
  powerballElement.style.border = "3px solid red";
}
