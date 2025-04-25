let operandA;
let operandB;
let operator = "";
let displayValue = "";

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

module.exports = {
  calculateAddition,
  calculateSubtraction,
  calculateMultiplication,
  calculateDivision,
  operate
};
