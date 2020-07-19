/**
 * Convert vw to px.
 *
 * @param {number} vw
 * @returns {number}
 */
const vw2px = (vw: number): number => vw * window.innerWidth / 100;
export default vw2px;
