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
  // script.js
document.getElementById("generate-btn").addEventListener("click", function () {
    const numbers = generatePowerballNumbers();
    document.getElementById("white-balls").textContent = numbers.whiteBalls.join(", ");
    document.getElementById("powerball").textContent = "Powerball: " + numbers.powerball;
  });
  