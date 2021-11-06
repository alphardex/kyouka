/**
 * Returns the last element in an array.
 * @param arr
 * @returns
 */
const last = (arr: any[]) =>
  arr && arr.length ? arr[arr.length - 1] : undefined;

export default last;
