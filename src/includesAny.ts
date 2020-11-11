/**
 * Checks if at least one element of values is included in arr.
 * @param arr
 * @param values
 */
const includesAny = (arr: any[], values: any[]) => values.some((v) => arr.includes(v));
export default includesAny;
