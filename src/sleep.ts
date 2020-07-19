/**
 * Wait some time before an action.
 *
 * @param {number} time
 */
const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
export default sleep;
