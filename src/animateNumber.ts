/**
 * Animate a number.
 * @param cb
 * @param from
 * @param to
 * @param duration
 */
const animateNumber = (cb: Function, from: number, to: number, duration: number) => {
  let start: number | null = null;
  let animate = (timestamp: number) => {
    start = start || timestamp;
    let elapsed = timestamp - start;
    let progress = Math.min(elapsed / duration, 1);
    let value = from + progress * (to - from);
    cb(value);
    if (progress < 1) {
      window.requestAnimationFrame(animate);
    }
  };
  window.requestAnimationFrame(animate);
};
export default animateNumber;
