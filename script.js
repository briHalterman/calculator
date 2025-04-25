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

module.exports = {
  calculateAddition,
  calculateSubtraction,
  calculateMultiplication,
  calculateDivision,
};
