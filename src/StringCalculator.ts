export class StringCalculator {

  add(inputText: string) {
    let nums = inputText.split(",");

    let sum = 0;
    for (const number of nums) {
      sum += Number(number);
    }
    return sum;
  }
}
