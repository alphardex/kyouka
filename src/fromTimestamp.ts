/**
 * Creates a Date object from a Unix timestamp.
 * @param timestamp
 */
const fromTimestamp = (timestamp: number) => new Date(timestamp * 1000);
export default fromTimestamp;
