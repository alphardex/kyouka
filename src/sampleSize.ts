/**
 * Gets n random elements at unique keys from an array up to the size of the array.
 * @param arr
 * @param n
 */
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

export default sampleSize;
