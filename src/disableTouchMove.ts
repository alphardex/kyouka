import preventDefault from "./preventDefault";

/**
 * Disable touchmove event.
 */
const disableTouchMove = () => {
  document.body.addEventListener("touchmove", preventDefault, {
    passive: false,
  });
};

export default disableTouchMove;
