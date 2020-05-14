// generators
function generateNumber() {
  const topValue = 10;
  const random = parseInt(Math.random() * topValue);
  return random;
}

// DOM elements
const a = document.getElementById("a");
const b = document.getElementById("b");
const assertButton = document.getElementById("btn");
const userInput = document.getElementById("userInput");

function newGame() {
  const operandA = generateNumber();
  const operandB = generateNumber();

  a.innerText = operandA;
  b.innerText = operandB;
}

newGame();

assertButton.addEventListener("click", () => {
  const operandA = parseInt(a.innerText);
  const operandB = parseInt(b.innerText);
  const userAnswer = parseInt(userInput.value);
  const answer = operandA + operandB;
  if (userAnswer === answer) {
    alert("congrats");
  } else {
    alert(`correct answer is ${answer}`);
  }
  userInput.value = "";
  newGame();
});
