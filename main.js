function generateNumber() {
  const random = parseInt(Math.random() * 100);
  return random;
}

const a = document.getElementById("a");
const b = document.getElementById("b");

const result = document.getElementById("userInput");

function setup() {
  a.innerText = generateNumber();
  b.innerText = generateNumber();
}

setup();
