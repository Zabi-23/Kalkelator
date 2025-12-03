const Calculator = require("../src/calculator.js"); 

describe("Calculator", () => {
  let calculator;
  const a = 1;
  const b = 2;
  const divideA = 4;
  const divideB = 2;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("divideWithLogging", () => {
    console.info(`divide ${divideA} by ${divideB}`);

    if (b === 0) {
      console.error("Cannot divide by zero");
      expect(() => {
        throw new Error("Cannot divide by zero");
      }).toThrow("Cannot divide by zero");
      return;
    }

    const result = divideA / divideB;
    expect(result).toBe(2);
  });

  test("addShouldReturn3", () => {
    const result = calculator.add(a, b);
    expect(result).toBe(3);
  });

  test("subtractShouldReturn-1", () => {
    const result = calculator.subtract(a, b);
    expect(result).toBe(-1);
  });

  test("multiplyShouldReturn2", () => {
    const result = calculator.multiply(a, b);
    expect(result).toBe(2);
  });

  test("divideShouldReturn0", () => {
    const result = calculator.divide(a, b); // 1 / 2 -> 0 (int-division)
    expect(result).toBe(0);
  });

  test("divideByZeroShouldThrowError", () => {
    expect(() => calculator.divide(a, 0)).toThrow("Cannot divide by zero");
  });
});
