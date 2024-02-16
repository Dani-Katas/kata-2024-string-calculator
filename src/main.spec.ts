import { describe, it, expect } from "vitest"
import { myFunction } from "./main.js"

class StringCalculator {

  add(numbers: string) {
    return 0
  }
}

describe("StringCalculator", () => {
  it("returns zero with empty string", () => {
    const numbers = "";

    let calculator = new StringCalculator();
    const result = calculator.add(numbers);

    expect(result).toBe(0)
  })
})
