import debounce from "./debounce";

/**
 * Creates a throttled function that only invokes the provided function at most once per every `wait` milliseconds.
 *
 * @param {Function} fn
 * @param {number} wait
 * @returns
 */
const throttle = (fn: Function, wait: number) => {
  let inThrottle: boolean, lastFn: number, lastTime: number;
  return function () {
    // @ts-ignore
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
export default throttle;
