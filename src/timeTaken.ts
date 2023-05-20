/**
 * Measures the time it takes for a function to execute.
 * @param cb
 */
const timeTaken = (cb: Function) => {
  console.time("timeTaken");
  const r = cb();
  console.timeEnd("timeTaken");
  return r;
};

export default timeTaken;
