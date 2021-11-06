/**
 * Repeat an array.
 * @param arr
 * @param n
 * @returns
 */
const repeatArray = (arr: [], n: number) => [].concat(...Array(n).fill(arr));

export default repeatArray;
