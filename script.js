let operandA;
let operandB;
let operator = "";
let displayValue = "";

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");

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
      operator = event.target.textContent;
      // console.log(operandA); // for manual testing
      displayValue = "";
      updateDisplay();
    }
  });
});
