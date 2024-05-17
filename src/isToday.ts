/**
 * Checks if the given date is today.
 *
 * @param date
 * @returns
 */
const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
};

export default isToday;
