/**
 * Convert vw to px.
 *
 * @param {number} vw
 * @returns {number}
 */
const vw2px = (vw: number, innerWidth: number | null = null): number => {
  innerWidth = innerWidth ? innerWidth : window.innerWidth;
  return (vw * window.innerWidth) / 100;
};
export default vw2px;
