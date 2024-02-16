import { beforeEach, describe, expect, it } from "vitest";
import { StringCalculator } from "./StringCalculator.js";

describe("StringCalculator", () => {

  let stringCalculator: StringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  describe("Iteration 1", () => {
    it("returns zero with empty string", () => {
      const numbers = "";

      const result = stringCalculator.add(numbers);

      expect(result).toBe(0);
    });
    it("returns the number with one number", () => {
      const numbers = "1";

      const result = stringCalculator.add(numbers);

      expect(result).toBe(1);
    });
    it("sums two numbers", () => {
      const numbers = "1,2";

      const result = stringCalculator.add(numbers);

      expect(result).toBe(3);
    });
  });

  describe("Iteration 2", () => {
    it("sums three numbers", () => {
      const numbers = "1,2,3";

      const result = stringCalculator.add(numbers);

      expect(result).toBe(6);
    });
  });
});
