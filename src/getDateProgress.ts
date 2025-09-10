/**
 * Get the progress of a date between two dates.
 * @param begin The begin date
 * @param end The end date
 * @returns The progress of the date between the two dates
 */
const getDateProgress = (begin: Date, end: Date) => {
  const now = new Date();
  const totalDuration = end.getTime() - begin.getTime();
  const elapsedDuration = now.getTime() - begin.getTime();
  const progress = Math.floor((elapsedDuration / totalDuration) * 100);
  return progress;
};

export default getDateProgress;
