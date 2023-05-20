/**
 * Get a random number from a range.
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const randomNumberInRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export default randomNumberInRange;
