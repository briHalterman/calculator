const {
  calculateAddition,
  calculateSubtraction,
  calculateMultiplication,
  calculateDivision,
  operate,
} = require("./script");

describe("calculateAddition", () => {
  test("adds 0 and 0", () => {
    expect(calculateAddition(0, 0)).toBe(0);
  });

  test("adds two positive numbers", () => {
    expect(calculateAddition(2, 2)).toBe(4);
  });

  test("adds a positive and negative number", () => {
    expect(calculateAddition(4, -1)).toBe(3);
  });

  test("adds two negative numbers", () => {
    expect(calculateAddition(-5, -9)).toBe(-14);
  });

  test("adds a number and zero", () => {
    expect(calculateAddition(12, 0)).toBe(12);
  });
});

describe("calculateSubtraction", () => {
  test("subtracts 0 from 0", () => {
    expect(calculateSubtraction(0, 0)).toBe(0);
  });

  test("subtracts a smaller positive number from a larger positive number", () => {
    expect(calculateSubtraction(5, 3)).toBe(2);
  });

  test("subtracts a larger positive number from a smaller positive number", () => {
    expect(calculateSubtraction(3, 5)).toBe(-2);
  });

  test("subtracts two negative numbers", () => {
    expect(calculateSubtraction(-5, -9)).toBe(4);
  });

  test("subtracts zero", () => {
    expect(calculateSubtraction(12, 0)).toBe(12);
  });

  test("subtracts from zero", () => {
    expect(calculateSubtraction(0, 12)).toBe(-12);
  });
});

describe("calculateMultiplication", () => {
  test("multiplies by zero", () => {
    expect(calculateMultiplication(10, 0)).toBe(0);
  });

  test("multiplies two positive numbers", () => {
    expect(calculateMultiplication(4, 3)).toBe(12);
  });

  test("multiplies a positive and negative number", () => {
    expect(calculateMultiplication(4, -1)).toBe(-4);
  });

  test("multiplies two negative numbers", () => {
    expect(calculateMultiplication(-5, -9)).toBe(45);
  });
});

describe("calculateDivision", () => {
  test("does not divide by zero", () => {
    expect(calculateDivision(10, 0)).toBe("ERROR");
  });

  test("performs basic division", () => {
    expect(calculateDivision(6, 3)).toBe(2);
  });

  test("performs division with a decimal result", () => {
    expect(calculateDivision(5, 2)).toBe(2.5);
  });

  test("performs division with a negative divisor", () => {
    expect(calculateDivision(45, -9)).toBe(-5);
  });

  test("performs division with a negative dividend", () => {
    expect(calculateDivision(-45, 9)).toBe(-5);
  });

  test("performs division with negative dividend and negative divisor", () => {
    expect(calculateDivision(-4, -2)).toBe(2);
  });

  test("performs division with zero dividend", () => {
    expect(calculateDivision(0, 12)).toBe(0);
  });
});

describe("operate", () => {
  test("performs addition", () => {
    expect(operate(4, 2, "+")).toBe(6);
  });

  test("performs subtraction", () => {
    expect(operate(4, 2, "-")).toBe(2);
  });

  test("performs addition", () => {
    expect(operate(4, 2, "*")).toBe(8);
  });

  test("performs addition", () => {
    expect(operate(4, 2, "/")).toBe(2);
  });

  test("handles division by zero", () => {
    expect(operate(4, 0, "/")).toBe("ERROR");
  });
});
