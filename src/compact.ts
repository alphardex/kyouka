/**
 * Removes falsy values from an array.
 * @param arr
 */
const compact = (arr: any[]) => arr.filter(Boolean);
export default compact;
