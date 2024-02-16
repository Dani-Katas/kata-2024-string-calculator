export class StringCalculator {
  add(inputText: string) {
    const numbers = this.parse(inputText)

    return this.sumAll(numbers)
  }

  private parse(inputText: string, separator = ","): number[] {
    if (inputText.startsWith("//")) {
      let s = inputText.substring(4, inputText.length)

      return this.parse(s, ";")
    }
    const customSeparator = separator
    return inputText
      .replace("\n", customSeparator)
      .split(customSeparator)
      .map((num) => Number(num))
  }

  private sumAll(numbers: number[]) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
  }
}
