import { Point } from "../types/types";

/**
 * Get the position of mouse.
 *
 * @param {any} ev
 * @returns {Point}
 */
const getMousePos = (ev: any): Point => {
  let x = (ev as MouseEvent).clientX;
  let y = (ev as MouseEvent).clientY;
  return { x, y };
};

export default getMousePos;
