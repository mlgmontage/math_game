// generators
function generateNumber() {
  const topValue = 10;
  const random = parseInt(Math.random() * topValue);
  return random;
}

// board variables
let wins = 0;
let losses = 0;

// DOM elements
const a = document.getElementById("a");
const b = document.getElementById("b");
const assertButton = document.getElementById("btn");
const userInput = document.getElementById("userInput");
const winsElement = document.getElementById("wins");
const lossesElement = document.getElementById("losses");

function newGame() {
  const operandA = generateNumber();
  const operandB = generateNumber();

  a.innerText = operandA;
  b.innerText = operandB;
  winsElement.innerText = wins;
  lossesElement.innerText = losses;
}

newGame();

assertButton.addEventListener("click", () => {
  const operandA = parseInt(a.innerText);
  const operandB = parseInt(b.innerText);
  const userAnswer = parseInt(userInput.value);
  const answer = operandA + operandB;
  if (userAnswer === answer) {
    wins++;
    alert("congrats");
  } else {
    losses++;
    alert(`correct answer is ${answer}`);
  }
  userInput.value = "";
  newGame();
});
