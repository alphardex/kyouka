/**
 * Creates an array of arrays, ungrouping the elements in an array produced by zip.
 * @param arr
 */
const unzip = (arr: any[]) =>
  arr.reduce(
    (acc, val) => (val.forEach((v: any, i: number) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map((x) => x.length)),
    }).map((x) => [])
  );
export default unzip;
