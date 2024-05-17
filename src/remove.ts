/**
 * Mutates an array by removing elements for which the given function returns `false`.
 *
 * @param arr
 * @param func
 * @returns
 */
const remove = (arr: any[], func: any) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];

export default remove;
