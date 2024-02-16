import { beforeEach, describe, expect, it } from "vitest"
import { StringCalculator } from "./StringCalculator.js"

describe("StringCalculator", () => {
  let stringCalculator: StringCalculator

  beforeEach(() => {
    stringCalculator = new StringCalculator()
  })

  describe("Iteration 1", () => {
    it("returns zero with empty string", () => {
      const numbers = ""

      const result = stringCalculator.add(numbers)

      expect(result).toBe(0)
    })
    it("returns the number with one number", () => {
      const numbers = "1"

      const result = stringCalculator.add(numbers)

      expect(result).toBe(1)
    })
    it("sums two numbers", () => {
      const numbers = "1,2"

      const result = stringCalculator.add(numbers)

      expect(result).toBe(3)
    })
  })

  describe("Iteration 2", () => {
    it("sums three numbers", () => {
      const numbers = "1,2,3"

      const result = stringCalculator.add(numbers)

      expect(result).toBe(6)
    })
  })

  describe("Iteration 3", () => {
    it("sums numbers with newline as separator", () => {
      const numbers = "1\n2,3"

      const result = stringCalculator.add(numbers)

      expect(result).toBe(6)
    })
  })
  describe("Iteration 4", () => {
    it("sums numbers with custom delimiter", () => {
      const numbers = "//;\n1;2"

      const result = stringCalculator.add(numbers)

      expect(result).toBe(3)
    })
    it("sums numbers with different delimiters", () => {
      const numbers = "//*\n1*2*3"

      const result = stringCalculator.add(numbers)

      expect(result).toBe(6)
    })
    it("sums numbers with delimiter with more than one character", () => {
      const numbers = "//*^\n1*^2*^3"

      const result = stringCalculator.add(numbers)

      expect(result).toBe(6)
    })
  })
})
