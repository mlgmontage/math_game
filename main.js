function generateNumber() {
  const random = parseInt(Math.random() * 10);
  return random;
}

function assert(output, exceptedOutput) {
  return output === exceptedOutput ? true : false;
}

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
  if (assert(userAnswer, answer)) {
    alert("congrats");
  } else {
    alert(`correct answer is ${answer}`);
  }
  userInput.value = "";
  newGame();
});
