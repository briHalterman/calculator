// const operate = window.operate;

let operandA = undefined;
let operandB = undefined;
let operator = "";
let displayValue = "";

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const calculateButton = document.querySelector(".equal-sign");

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

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (operandA === undefined && displayValue !== "") {
      operandA = parseFloat(displayValue);
      console.log(operandA); // for manual testing
      operator = event.target.dataset.operator;
      console.log(operator); // for manual testing
      displayValue += ` ${event.target.textContent} `;
      updateDisplay();
    }
  });
});

calculateButton.addEventListener("click", () => {
  if (
    operandA !== undefined &&
    operator !== "" &&
    displayValue !== ""
  ) {
    operandB = parseFloat(displayValue.split(" ").pop());
    console.log(operandB); // for manual testing
    const calculation = window.operate(operandA, operandB, operator);

    displayValue = calculation.toString();
    console.log(displayValue); // for manual testing
    updateDisplay();

    operandA = undefined;
    operandB = undefined;
    operator = "";
  }
});
