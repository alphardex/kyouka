/**
 * Return the average of the number array.
 *
 * @param {...number[]} nums
 * @returns {number}
 */
const average = (...nums: number[]): number =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

export default average;
