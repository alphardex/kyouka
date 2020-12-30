/**
 * Returns the n minimum elements from the provided array.
 * @param arr
 * @param n
 */
const minN = (arr: [], n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
export default minN;
