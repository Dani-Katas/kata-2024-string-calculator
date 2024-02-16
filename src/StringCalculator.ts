export class StringCalculator {

  add(inputText: string) {
    let nums = inputText
      .split(",")
      .map((num) => Number(num))
      .reduce((acc, curr) => acc + curr, 0);

    return nums;
  }
}
