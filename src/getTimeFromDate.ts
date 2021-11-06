/**
 * Get the time string of a Date object.
 *
 * @param {Date} date
 * @returns {string}
 */
const getTimeFromDate = (date: Date): string =>
  date.toTimeString().slice(0, 8).split(":").join("");
export default getTimeFromDate;
