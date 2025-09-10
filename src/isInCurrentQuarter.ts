/**
 * Check if a date is in the current quarter.
 * @param date The date to check
 * @returns True if the date is in the current quarter, false otherwise
 */
const isInCurrentQuarter = (date: Date): boolean => {
  const currentDate = new Date();

  // Get the current year and current month
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Get the year and month of the date
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();

  // Calculate the start and end months of the quarter
  const quarterStartMonth = Math.floor(currentMonth / 3) * 3;
  const quarterEndMonth = quarterStartMonth + 2;

  // Check if it's in the current quarter
  return (
    dateYear === currentYear &&
    dateMonth >= quarterStartMonth &&
    dateMonth <= quarterEndMonth
  );
};

export default isInCurrentQuarter;
