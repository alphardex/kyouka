/**
 * Pads a given number to the specified length.
 * @param n
 * @param l
 * @returns
 */
const padNumber = (n: number, l: number) => `${n}`.padStart(l, "0");

export default padNumber;
