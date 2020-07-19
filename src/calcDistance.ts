import { Point } from "../types/types";

/**
 * Calculate the distance between 2 points.
 *
 * @param {Point} p1
 * @param {Point} p2
 * @returns {number}
 */
const calcDistance = (p1: Point, p2: Point): number => {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
};
export default calcDistance;
