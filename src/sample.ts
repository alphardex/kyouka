/**
 * Get a random element from an array.
 *
 * @param {any[]} arr
 */
const sample = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export default sample;
