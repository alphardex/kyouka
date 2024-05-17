/**
 * Checks if the given argument is a numberic value.
 * ref: https://stackoverflow.com/a/175787
 *
 * @param val
 * @returns
 */
const isNumeric = (val: any) => !isNaN(val);

export default isNumeric;
