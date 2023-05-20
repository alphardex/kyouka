/**
 * Returns all unique values in an array.
 *
 * @param {any[]} arr
 */
const uniq = (arr: any[]) => [...new Set(arr)];

export default uniq;
