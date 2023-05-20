/**
 * Convert vh to px.
 *
 * @param {number} vh
 * @returns {number}
 */
const vh2px = (vh: number): number => {
  const h = Math.min(window.innerHeight, document.documentElement.clientHeight);
  return (vh * h) / 100;
};

export default vh2px;
