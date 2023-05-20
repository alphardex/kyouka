/**
 * Convert px to vw.
 *
 * @param {number} px
 * @returns {number}
 */
const px2vw = (px: number): number => (px / window.innerWidth) * 100;

export default px2vw;
