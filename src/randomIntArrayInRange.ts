/**
 * Get a random array from a range.
 *
 * @param {number} min
 * @param {number} max
 * @param {number} [n=1]
 * @returns {number[]}
 */
const randomIntArrayInRange = (min: number, max: number, n = 1): number[] =>
    Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
export default randomIntArrayInRange;
