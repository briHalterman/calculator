let operandA;
let operandB;
let operator = "";
let displayValue = "";

const digitButtons = document.querySelectorAll(".digit");

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
