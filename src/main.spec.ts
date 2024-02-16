import { describe, it, expect } from "vitest"
import { myFunction } from "./main.js"

describe("StringCalculator", () => {
  it("returns zero with empty string", () => {
    const numbers = "";

    const result = calculator.add(numbers);

    expect(result).toBe(0)
  })
})
