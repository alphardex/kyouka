/**
 * Creates a generator, that generates all values in the given range using the given step.
 * @param start
 * @param end
 * @param step
 */
const range = function* (start: number, end: number, step = 1) {
  let i = start;
  while (i < end) {
    yield i;
    i += step;
  }
};

export default range;
