/**
 * Check whether a number is a positive integer.
 *
 * @param num
 * @returns
 */
const isPositiveInteger = (num: any) => {
  return /^[1-9]\d*$/.test(num);
};

export default isPositiveInteger;
