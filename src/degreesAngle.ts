import { Point } from "../types/types";
import rad2deg from "./rad2deg";

/**
 * Calculate the angle of a line defined by two points (in degrees).
 * @param p1
 * @param p2
 * @returns
 */
const degreesAngle = (p1: Point, p2: Point): number =>
  rad2deg(Math.atan2(p2.y - p1.y, p2.x - p1.x));

export default degreesAngle;
