/**
 * Calculates the date of n hours from the given date.
 * @param d
 * @param n
 * @returns
 */
const addHoursToDate = (d: Date, n: number) => {
  d.setTime(d.getTime() + n * 60 * 60 * 1000);
  return d;
};
export default addHoursToDate;
