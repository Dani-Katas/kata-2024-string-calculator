export class StringCalculator {

  add(numbers: string) {
    let nums = numbers.split(",");
    if (nums.length > 1) {
      return Number(nums[0]) + Number(nums[1]);
    }
    return Number(numbers);
  }
}
