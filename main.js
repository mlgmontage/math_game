// State
// board variables
let wins = 0;
let losses = 0;

// game variables
let operandA;
let operandB;
let operation;

// DOM elements
const a = document.getElementById("a");
const b = document.getElementById("b");
const form = document.getElementById("form");
const operationElem = document.getElementById("operation");
const assertButton = document.getElementById("btn");
const userInput = document.getElementById("userInput");
const winsElement = document.getElementById("wins");
const lossesElement = document.getElementById("losses");
const historyElement = document.getElementById("history");

// functions

// computing answer
function compute(operandA, operation, operandB) {
  if (operation === "+") return operandA + operandB;
  if (operation === "-") return operandA - operandB;
  if (operation === "*") return operandA * operandB;
  if (operation === "/") return (operandA / operandB).toFixed(1);
}

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

function submit(e) {
  e.preventDefault();
  const userAnswer = userInput.value;

  // computing correct answer
  const answer = compute(operandA, operation, operandB);

  // push to history element
  const gameState = document.createElement("div");

  // result state
  const success = `<span class="badge success">Success</span> ${operandA} ${operation} ${operandB} = ${userAnswer}`;
  const failure = `<span class="badge failure">Failure</span> ${operandA} ${operation} ${operandB} = ${userAnswer}, correct answer is ${answer}`;

  // assertion
  if (userAnswer == answer) {
    wins++;
    gameState.innerHTML = success;
  } else {
    losses++;
    gameState.innerHTML = failure;
  }

  historyElement.prepend(gameState);

  // reset
  userInput.value = "";
  newGame();
}

assertButton.addEventListener("click", submit);
form.addEventListener("submit", submit);
