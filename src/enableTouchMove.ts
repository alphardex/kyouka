import preventDefault from "./preventDefault";

/**
 * Enable touchmove event.
 */
const enableTouchMove = () => {
  document.body.removeEventListener("touchmove", preventDefault);
};

export default enableTouchMove;
