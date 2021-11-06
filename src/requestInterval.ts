/**
 * A setInterval which focuses on performance.
 *
 * @param {Function} fn
 * @param {number} delay
 * @returns
 */
const requestInterval = (fn: Function, delay: number) => {
  let start = new Date().getTime();
  let handle = { value: 0 };
  let loop = () => {
    handle.value = requestAnimationFrame(loop);
    let current = new Date().getTime();
    let delta = current - start;
    if (delta >= delay) {
      fn();
      start = new Date().getTime();
    }
  };
  handle.value = requestAnimationFrame(loop);
  return handle;
};
export default requestInterval;
