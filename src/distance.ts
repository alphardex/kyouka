import { Point } from "../types/types";

/**
 * Calculate the distance between 2 points.
 *
 * @param {Point} p1
 * @param {Point} p2
 * @returns {number}
 */
const distance = (p1: Point, p2: Point): number =>
  Math.hypot(p2.x - p1.x, p2.y - p1.y);
export default distance;
