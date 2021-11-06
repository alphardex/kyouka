import { Point } from "../types/types";

/**
 * Calculate the angle of a line defined by two points (in radians).
 * @param p1
 * @param p2
 * @returns
 */
const radiansAngle = (p1: Point, p2: Point): number =>
  Math.atan2(p2.y - p1.y, p2.x - p1.x);

export default radiansAngle;
