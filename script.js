let operandA = undefined;
let operandB = undefined;
let operator = "";
let displayValue = "";
let justCalculated = false;

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const calculateButton = document.querySelector(".equal-sign");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal-point");

const updateDisplay = () => {
  const display = document.getElementById("display");
  display.textContent = displayValue;
};

const handleDigitClick = (event) => {
  const digit = event.target.textContent;

  if (justCalculated) {
    displayValue = digit;
    justCalculated = false;
  } else {
    displayValue += digit;
  }

  updateDisplay();
};

digitButtons.forEach((button) => {
  button.addEventListener("click", handleDigitClick);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (operandA === undefined && displayValue !== "") {
      operandA = parseFloat(displayValue);
      // console.log(operandA); // for manual testing
      operator = event.target.dataset.operator;
      // console.log(operator); // for manual testing
      displayValue += ` ${event.target.textContent} `;
      justCalculated = false;
      updateDisplay();
    }
  });
});

calculateButton.addEventListener("click", () => {
  const tokens = displayValue.split(" ");
  const currentToken = tokens[tokens.length - 1];

  if (
    operator === currentToken ||
    !currentToken ||
    isNaN(currentToken)
  ) {
    return;
  }

  if (
    operandA !== undefined &&
    operator !== "" &&
    displayValue !== ""
  ) {
    operandB = parseFloat(currentToken);
    // console.log(operandB); // for manual testing
    const calculation = window.operate(operandA, operandB, operator);

    displayValue = (
      Math.round(calculation * 10000) / 10000
    ).toString();
    // console.log(displayValue); // for manual testing
    updateDisplay();

    operandA = undefined;
    operandB = undefined;
    operator = "";
    justCalculated = true;
  }
});

clearButton.addEventListener("click", () => {
  operandA = undefined;
  operandB = undefined;
  operator = "";
  displayValue = "";
  justCalculated = false;
  updateDisplay();
});

decimalButton.addEventListener("click", () => {
  const tokens = displayValue.split(" ");
  const currentToken = tokens[tokens.length - 1];

  if (!currentToken.includes(".")) {
    displayValue += ".";
    updateDisplay();
  }
});
