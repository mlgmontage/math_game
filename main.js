// generators
function generateNumber() {
  // only positive numbers
  const topValue = 10;
  const random = parseInt(Math.random() * topValue + 1);
  return random;
}

// generate operation
function generateOperation() {
  // opearations
  const operations = ["+", "-", "*", "/"];
  const picker = parseInt(Math.random() * operations.length);
  return operations[picker];
}

// board variables
let wins = 0;
let losses = 0;

// game variables
let operandA;
let operandB;
let operation;

// computing answer
function compute(operandA, operation, operandB) {
  if (operation === "+") return operandA + operandB;
  if (operation === "-") return operandA - operandB;
  if (operation === "*") return operandA * operandB;
  if (operation === "/") return (operandA / operandB).toFixed(2);
}

// DOM elements
const a = document.getElementById("a");
const b = document.getElementById("b");
const operationElem = document.getElementById("operation");
const assertButton = document.getElementById("btn");
const userInput = document.getElementById("userInput");
const winsElement = document.getElementById("wins");
const lossesElement = document.getElementById("losses");

function newGame() {
  operandA = generateNumber();
  operandB = generateNumber();
  operation = generateOperation();

  // board
  a.innerText = operandA;
  b.innerText = operandB;
  operationElem.innerText = operation;

  // board
  winsElement.innerText = wins;
  lossesElement.innerText = losses;
}

newGame();

assertButton.addEventListener("click", () => {
  const userAnswer = userInput.value;

  // computing correct answer
  const answer = compute(operandA, operation, operandB);

  // assertion
  if (userAnswer == answer) {
    wins++;
    alert("congrats");
  } else {
    losses++;
    alert(`correct answer is "${answer}", your answer "${userAnswer}"`);
  }

  // reset
  userInput.value = "";
  newGame();
});
