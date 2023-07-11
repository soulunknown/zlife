window.onload = function () {
  let numberCounts = new Array(70).fill(0);
  let sixthNumbersCounts = {};

  function processList(numberList) {
    for (let i = 0; i < 5; i++) {
      // Only first 5 numbers
      let number = numberList[i];
      numberCounts[number]++;
    }

    // Check for the sixth number in the sequence
    let sixthNumber = numberList[5]; // index 5 is the sixth number
    sixthNumbersCounts[sixthNumber] =
      (sixthNumbersCounts[sixthNumber] || 0) + 1;
  }

  processList([11, 19, 21, 29, 52, 17]);
  processList([16, 30, 31, 54, 68, 1]);
  processList([3, 5, 9, 42, 52, 11]);
  processList([11, 22, 24, 51, 60, 18]);
  processList([9, 10, 36, 46, 52, 14]);
  processList([9, 36, 41, 44, 59, 4]);
  processList([1, 33, 34, 56, 59, 18]);
  processList([23, 25, 35, 63, 64, 25]);
  processList([4, 11, 21, 38, 64, 11]);
  processList([17, 36, 47, 63, 68, 25]);
  processList([19, 21, 55, 66, 68, 3]);
  processList([16, 53, 54, 57, 65, 8]);
  processList([3, 38, 55, 61, 66, 1]);
  processList([21, 26, 30, 45, 47, 23]);
  processList([31, 39, 47, 51, 53, 6]);
  processList([15, 20, 33, 36, 43, 12]);
  processList([3, 15, 20, 23, 46, 11]);
  processList([1, 26, 28, 55, 58, 25]);
  processList([18, 34, 37, 45, 51, 14]);
  processList([17, 23, 32, 38, 63, 23]);
  processList([9, 38, 48, 52, 68, 25]);
  processList([12, 21, 44, 50, 58, 26]);
  processList([24, 38, 39, 48, 56, 4]);
  processList([21, 33, 35, 62, 64, 24]);
  processList([2, 4, 54, 61, 62, 14]);
  processList([15, 45, 64, 67, 68, 18]);
  processList([2, 31, 45, 46, 49, 20]);
  processList([16, 21, 29, 53, 66, 2]);
  processList([21, 32, 42, 46, 50, 4]);
  processList([2, 3, 16, 23, 68, 7]);
  processList([3, 20, 36, 42, 64, 4]);
  processList([2, 12, 45, 61, 64, 26]);
  processList([36, 39, 52, 57, 69, 1]);
  processList([5, 11, 33, 35, 63, 14]);
  processList([2, 38, 44, 50, 62, 19]);
  processList([6, 28, 39, 43, 54, 12]);
  processList([19, 25, 34, 57, 68, 4]);
  processList([4, 17, 35, 49, 61, 8]);
  processList([15, 26, 31, 38, 61, 3]);
  processList([17, 24, 48, 62, 68, 23]);
  processList([7, 23, 24, 32, 43, 18]);
  processList([2, 24, 34, 53, 58, 13]);


  // (As in the code you provided above)

  // Output the results
  let outputDiv = document.getElementById("output");

  // Create frequency buckets for first five numbers
  let frequencyBuckets = {};
  for (let number = 1; number <= 69; number++) {
    const frequency = numberCounts[number];
    if (!frequencyBuckets[frequency]) {
      frequencyBuckets[frequency] = [];
    }
    frequencyBuckets[frequency].push(number);
  }

  // Create frequency buckets for the sixth number
  let sixthNumberFrequencyBuckets = {};
  for (let number in sixthNumbersCounts) {
    const frequency = sixthNumbersCounts[number];
    if (!sixthNumberFrequencyBuckets[frequency]) {
      sixthNumberFrequencyBuckets[frequency] = [];
    }
    sixthNumberFrequencyBuckets[frequency].push(number);
  }

  // Output numbers grouped by frequency
  let frequencyOutputDiv = document.getElementById("frequencyOutput");
  frequencyOutputDiv.innerHTML = "<h3>Numbers Grouped by Frequency</h3>";
  for (let frequency in frequencyBuckets) {
    frequencyOutputDiv.innerHTML += `<p>Numbers that appeared ${frequency} times: ${frequencyBuckets[
      frequency
    ].join(", ")}</p>`;
  }

  // Output sixth numbers grouped by frequency
  let sixthNumberFrequencyOutputDiv = document.getElementById(
    "sixthNumberFrequencyOutput"
  );
  sixthNumberFrequencyOutputDiv.innerHTML =
    "<h3>Sixth Numbers Grouped by Frequency</h3>";
  for (let frequency in sixthNumberFrequencyBuckets) {
    sixthNumberFrequencyOutputDiv.innerHTML += `<p>Sixth numbers that appeared ${frequency} times: ${sixthNumberFrequencyBuckets[
      frequency
    ].join(", ")}</p>`;
  }

  // Output individual counts
  outputDiv.innerHTML = "<h3>Whiteballs 1-69</h3><ul>";
  for (let number = 1; number <= 69; number++) {
    outputDiv.innerHTML += `<li>Number ${number} appeared ${numberCounts[number]} times</li>`;
  }
  outputDiv.innerHTML += "</ul>";
  let sixthNumbersDiv = document.getElementById("frequentSixthNumbers");
  sixthNumbersDiv.innerHTML = "<h3>Sixth Numbers 1-26</h3><ul>";
  for (let number = 1; number <= 26; number++) {
    let count = sixthNumbersCounts[number] || 0;
    sixthNumbersDiv.innerHTML += `<li>Number ${number} appeared ${count} times</li>`;
  }
  sixthNumbersDiv.innerHTML += "</ul>";
};
function performAddition() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;

  // Convert input values to numbers and perform addition
  let sum = parseFloat(number1) + parseFloat(number2);

  // Display the result
  document.getElementById("calculationResult").innerHTML = `Sum: ${sum}`;
}
function readTextArea() {
  let textAreaContent = document.getElementById("myTextArea").value;

  // Display the contents of the text area
  document.getElementById(
    "textAreaContents"
  ).innerHTML = `Contents of text area: <br><pre>${textAreaContent}</pre>`;
}
