export class StringCalculator {

  add(numbers: string) {
    let nums = numbers.split(",");

    let sum = 0;
    for (const number of nums) {
      sum += Number(number);
    }
    return sum;
  }
}
