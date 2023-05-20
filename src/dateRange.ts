/**
 * Creates a generator, that generates all dates in the given range using the given step.
 * @param start
 * @param end
 * @param step
 */
const dateRange = function* (start: Date, end: Date, step = 1) {
  let d = start;
  while (d < end) {
    yield new Date(d);
    d.setDate(d.getDate() + step);
  }
};

export default dateRange;
