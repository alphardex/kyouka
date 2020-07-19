/**
 * Get a random interger from a range.
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const randomIntegerInRange = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
export default randomIntegerInRange;
