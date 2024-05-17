/**
 * Checks if the given argument is a number.
 *
 * @param val
 * @returns
 */
const isNumber = (val: any) => typeof val === "number" && val === val;

export default isNumber;
