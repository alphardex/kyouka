import { Point } from "../types/types";

/**
 * Get the position of element's center point.
 *
 * @param {Element} el
 * @returns {Point}
 */
const getCenterPointPos = (el: Element): Point => {
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    return { x, y }
}
export default getCenterPointPos;
