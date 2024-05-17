/**
 * Make date string compatible with ios.
 *
 * @param date
 * @returns
 */
const compatibleDate = (date: string) => date.replace(/\.|\-/g, "/");

export default compatibleDate;
