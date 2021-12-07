/**
 * Counts the occurrences of a value in an array.
 * @param arr
 * @param val
 * @returns
 */
const countOccurrences = (arr: any[], val: any) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
export default countOccurrences;
