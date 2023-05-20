/**
 * Calculates the sum of the powers of all the numbers from start to end (both inclusive).
 * @param end
 * @param power
 * @param start
 */
const sumPower = (end: number, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);

export default sumPower;
