/**
 * Calculates the date of n seconds from the given date.
 * @param d
 * @param n
 * @returns
 */
const addSecondsToDate = (d: Date, n: number) => {
  d.setTime(d.getTime() + n * 1000);
  return d;
};
export default addSecondsToDate;
