/**
 * Lerp, or Linear Interpolation, is a mathematical function that returns a value between two others at a point on a linear scale.
 * @param p1
 * @param p2
 * @param t
 * @returns
 */
const lerp = (p1: number, p2: number, t: number) => {
  return p1 + (p2 - p1) * t;
};

export default lerp;
