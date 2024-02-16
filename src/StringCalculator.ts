export class StringCalculator {

  add(inputText: string) {
    return inputText
      .split(",")
      .map((num) => Number(num))
      .reduce((acc, curr) => acc + curr, 0);
  }
}
