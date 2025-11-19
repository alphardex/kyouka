/**
 * Creates a function that invokes `fn` with `partials` appended to the arguments it receives.
 * @param fn
 * @param partials
 */
const partialRight =
  (fn: Function, ...partials: any[]) =>
  (...args: any[]) =>
    fn(...args, ...partials);

export default partialRight;
