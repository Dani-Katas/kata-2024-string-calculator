export class StringCalculator {

  add(inputText: string) {
    return this.parse(inputText)
      .reduce((acc, curr) => acc + curr, 0);
  }

  private parse(inputText: string) {
    return inputText
      .split(",")
      .map((num) => Number(num));
  }
}
