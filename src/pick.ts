/**
 * Picks the key-value pairs corresponding to the given keys from an object.
 *
 * @param {*} obj
 * @param {string[]} arr
 */
const pick = (obj: any, arr: string[]) =>
  arr.reduce(
    (acc: any, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
    {}
  );

export default pick;
