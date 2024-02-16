export class StringCalculator {

  add(numbers: string) {
    let nums = numbers.split(",");

    let sum = 0;
    for (const number of nums) {
      sum += Number(number);
    }
    return sum;

    if (nums.length > 1) {
      return Number(nums[0]) + Number(nums[1]);
    }
    return Number(numbers);
  }
}
