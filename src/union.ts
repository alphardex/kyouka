/**
 * Returns every element that exists in any of the two arrays at least once.
 * @param a
 * @param b
 */
const union = (a: any, b: any) => Array.from(new Set([...a, ...b]));

export default union;
