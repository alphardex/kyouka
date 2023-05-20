/**
 * Returns the elements that exist in both arrays, filtering duplicate values.
 * @param a
 * @param b
 */
const intersection = (a: any, b: any) => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};

export default intersection;
