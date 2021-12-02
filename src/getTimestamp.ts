/**
 * Gets the Unix timestamp from a Date object.
 * @param date
 */
const getTimestamp = (date = new Date(), floor = false) => {
  const timestamp = date.getTime() / 1000;
  return floor ? Math.floor(timestamp) : timestamp;
};
export default getTimestamp;
