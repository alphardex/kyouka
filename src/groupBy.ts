/**
 * Groups the elements of an array based on the given function.
 * @param arr
 * @param fn
 * @returns
 */
const groupBy = (arr: any[], fn: any) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc: any, val: any, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});

export default groupBy;
