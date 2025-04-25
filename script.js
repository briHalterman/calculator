let operandA;
let operandB;
let operator = "";
let displayValue = "";
const digitButtons = document.querySelectorAll(".digit");

const calculateAddition = (addendA, addendB) => addendA + addendB;
const calculateSubtraction = (minuend, subtrahend) =>
  minuend - subtrahend;
const calculateMultiplication = (factorA, factorB) =>
  factorA * factorB;
const calculateDivision = (dividend, divisor) =>
  divisor === 0 ? "ERROR" : dividend / divisor;

const operate = (operandA, operandB, operator) => {
  switch (operator) {
    case "+":
      return calculateAddition(operandA, operandB);
    case "-":
      return calculateSubtraction(operandA, operandB);
    case "*":
      return calculateMultiplication(operandA, operandB);
    case "/":
      return calculateDivision(operandA, operandB);
    default:
      return null;
  }
};

const updateDisplay = () => {
  const display = document.getElementById("display");
  display.textContent = displayValue;
};

const handleDigitClick = (event) => {
  const digit = event.target.textContent;
  displayValue += digit;
  updateDisplay();
};

digitButtons.forEach((button) => {
  button.addEventListener("click", handleDigitClick);
});

module.exports = {
  calculateAddition,
  calculateSubtraction,
  calculateMultiplication,
  calculateDivision,
  operate,
};
