/**
 * Disable touchmove.
 *
 */
const disableTouchMove = () => {
  document.body.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
    },
    { passive: false }
  );
};
export default disableTouchMove;
