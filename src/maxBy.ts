/**
 * Returns the maximum value of an array, after mapping each element to a value using the provided function.
 * @param arr
 * @param fn
 * @returns
 */
const maxBy = (arr: any[], fn: Function) => {
  // @ts-ignore
  return Math.max(...arr.map(typeof fn === "function" ? fn : (val) => val[fn]));
};

export default maxBy;
