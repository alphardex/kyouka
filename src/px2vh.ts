/**
 * Convert px to vh.
 *
 * @param {number} px
 * @returns {number}
 */
const px2vh = (px: number): number => (px / window.innerHeight) * 100;
export default px2vh;
