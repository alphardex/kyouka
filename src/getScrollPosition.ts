import { Point } from "../types/types";
import px2vw from "./px2vw";

/**
 * Get the scroll position.
 *
 * @param {any}
 * @param {string} [unit='px']
 * @returns {Point}
 */
const getScrollPosition = (el: any = null, unit = "px"): Point => {
  el = el ? el : window;
  const scrollPosition = {
    x:
      el.pageXOffset !== undefined
        ? el.pageXOffset
        : (el as unknown as Element).scrollLeft,
    y:
      el.pageYOffset !== undefined
        ? el.pageYOffset
        : (el as unknown as Element).scrollTop,
  };
  if (unit === "vw") {
    scrollPosition.x = px2vw(scrollPosition.x);
    scrollPosition.y = px2vw(scrollPosition.y);
  }
  return scrollPosition;
};

/**
 * Get the scroll position as vw unit.
 *
 * @param {any}
 * @returns {Point}
 */
const getScrollPositionAsVw = (el: any = null): Point =>
  getScrollPosition(el, "vw");

export { getScrollPosition, getScrollPositionAsVw };
