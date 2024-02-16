import { describe, expect, it } from "vitest";
import { StringCalculator } from "./StringCalculator.js";

describe("StringCalculator", () => {
  it("returns zero with empty string", () => {
    const numbers = "";

    let calculator = new StringCalculator();
    const result = calculator.add(numbers);

    expect(result).toBe(0)
  })
})
