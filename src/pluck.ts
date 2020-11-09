/**
 * Converts an array of objects into an array of values corresponding to the specified key.
 * @param arr
 * @param key
 */
const pluck = (arr: any[], key: any) => arr.map((i) => i[key]);
export default pluck;
