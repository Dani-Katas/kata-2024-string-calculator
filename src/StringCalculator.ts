export class StringCalculator {
  add(inputText: string) {
    const numbers = this.parse(inputText)

    return this.sumAll(numbers)
  }

  private parse(inputText: string, separator = ","): number[] {
    if (inputText.startsWith("//")) {
      inputText = inputText.substring(4, inputText.length)

      return this.parse(inputText, ";")
    }
    return inputText
      .replace("\n", separator)
      .split(separator)
      .map((num) => Number(num))
  }

  private sumAll(numbers: number[]) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
  }
}
