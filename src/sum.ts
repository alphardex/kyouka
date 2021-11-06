/**
 * Return the sum of numbers.
 *
 * @param {...number[]} arr
 */
const sum = (...arr: number[]): number =>
  [...arr].reduce((acc, val) => acc + val, 0);
export default sum;
