/**
 * Check whether the user has reached the bottom of the page.
 *
 * @returns {boolean}
 */
const isBottomVisible = (): boolean => (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
export default isBottomVisible;
