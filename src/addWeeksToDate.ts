/**
 * Calculates the date of n weeks from the given date.
 * @param d
 * @param n
 * @returns
 */
const addWeeksToDate = (d: Date, n: number) => {
  d.setTime(d.getTime() + n * 60 * 60 * 1000 * 24 * 7);
  return d;
};

export default addWeeksToDate;
