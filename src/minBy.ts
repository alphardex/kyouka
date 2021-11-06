/**
 * Returns the minimum value of an array, after mapping each element to a value using the provided function.
 * @param arr
 * @param fn
 * @returns
 */
const minBy = (arr: any[], fn: Function) => {
  // @ts-ignore
  return Math.min(...arr.map(typeof fn === "function" ? fn : (val) => val[fn]));
};

export default minBy;
