/**
 * Convert vh to px.
 *
 * @param {number} vh
 * @returns {number}
 */
const vh2px = (vh: number): number => {
  return (vh * window.innerHeight) / 100;
};
export default vh2px;
