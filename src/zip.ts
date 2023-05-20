/**
 * Creates an array of elements, grouped based on their position in the original arrays.
 * @param arrays
 */
const zip = (...arrays: any[]) => {
  const maxLength = Math.max(...arrays.map((x) => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};

export default zip;
