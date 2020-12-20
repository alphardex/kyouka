/**
 * Gets the Unix timestamp from a Date object.
 * @param date
 */
const getTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000);
export default getTimestamp;
