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

if (
  typeof module !== "undefined" &&
  typeof module.exports !== "undefined"
) {
  module.exports = {
    calculateAddition,
    calculateSubtraction,
    calculateMultiplication,
    calculateDivision,
    operate,
  };
}

if (typeof window !== "undefined") {
  window.calculateAddition = calculateAddition;
  window.calculateSubtraction = calculateSubtraction;
  window.calculateMultiplication = calculateMultiplication;
  window.calculateDivision = calculateDivision;
  window.operate = operate;
}
