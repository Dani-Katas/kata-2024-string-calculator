export class StringCalculator {

  add(inputText: string) {
    const numbers = this.parse(inputText);

    return this.sumAll(numbers);
  }

  private parse(inputText: string) {
    return inputText
      .replace("\n", ",")
      .split(",")
      .map((num) => Number(num));
  }

  private sumAll(numbers: number[]) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}
