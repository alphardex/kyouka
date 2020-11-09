/**
 * Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
 * @param fn
 * @param args
 */
const attempt = (fn: Function, ...args: any[]) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
export default attempt;
