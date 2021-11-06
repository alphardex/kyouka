/**
 * Clamps `num` within the inclusive range specified by the boundary values `lower` and `upper`.
 * @param num
 * @param lower
 * @param upper
 * @returns
 */
const clamp = (num: number, lower: number, upper: number) =>
  Math.max(
    Math.min(Number(num), Math.max(lower, upper)),
    Math.min(lower, upper)
  );

export default clamp;
