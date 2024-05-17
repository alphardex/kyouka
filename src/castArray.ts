/**
 * Casts the provided value as an array if it's not one.
 *
 * @param val
 * @returns
 */
const castArray = (val: any) => (Array.isArray(val) ? val : [val]);

export default castArray;
