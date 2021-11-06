/**
 * Checks if all the elements in values are included in arr.
 * @param arr
 * @param values
 */
const includesAll = (arr: any[], values: any[]) =>
  values.every((v) => arr.includes(v));
export default includesAll;
