/**
 * Calculate the difference in days between two dates.
 * @param {string | Date} startDate - The start date
 * @param {string | Date | 'now'} endDate - The end date, can be current date ('now') or a specified target date
 * @returns {number} - The date difference (in days)
 */
const calculateDateDifference = (
  startDate: string | Date,
  endDate: string | Date | "now" = "now"
): number => {
  // If the end date is 'now', use the current date
  const currentDate = endDate === "now" ? new Date() : new Date(endDate);

  // Convert the start date to a Date object
  const start = new Date(startDate);

  // Ensure the dates are valid
  if (isNaN(start.getTime()) || isNaN(currentDate.getTime())) {
    throw new Error("Invalid date");
  }

  // Calculate the date difference (in milliseconds)
  const timeDifference = currentDate.getTime() - start.getTime();

  // Convert to days
  return timeDifference / (1000 * 60 * 60 * 24);
};

export default calculateDateDifference;
