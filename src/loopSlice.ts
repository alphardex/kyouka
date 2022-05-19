/**
 * Loop slice an array.
 * @param arr
 * @param start
 * @param end
 */
const loopSlice = (arr: any, start: number, end: number) => {
  const [a, b] = [start, end];
  if (b >= a) {
    return arr.slice(a, b);
  } else {
    return [...arr.slice(a, arr.length), ...arr.slice(0, b)];
  }
};
export default loopSlice;
