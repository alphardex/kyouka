/**
 * Calculates the date of n minutes from the given date.
 * @param d
 * @param n
 * @returns
 */
const addMinutesToDate = (d: Date, n: number) => {
  d.setTime(d.getTime() + n * 60 * 1000);
  return d;
};

export default addMinutesToDate;
