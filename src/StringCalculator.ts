export class StringCalculator {

  add(inputText: string) {
    let nums = inputText
      .split(",")
      .reduce((acc, curr) => acc + Number(curr), 0);

    return nums;
  }
}
