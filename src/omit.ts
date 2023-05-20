/**
 * Omits the key-value pairs corresponding to the given keys from an object.
 *
 * @param {*} obj
 * @param {any[]} arr
 */
const omit = (obj: any, arr: string[]) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc: any, key) => ((acc[key] = obj[key]), acc), {});

export default omit;
