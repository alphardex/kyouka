/**
 * Chunks an array into smaller arrays of multiple specified sizes.
 * @param arr
 * @param chunkSizes
 * @returns
 */
const chunkMultiSize = (arr: any[], chunkSizes: number[]) => {
  const chunkArray = [];
  let cc = 0,
    i = 0;
  while (i < arr.length) {
    const csize = chunkSizes[cc];
    chunkArray.push(arr.slice(i, i + csize));
    cc = (cc + 1) % chunkSizes.length;
    i += csize;
  }
  return chunkArray;
};

export default chunkMultiSize;
