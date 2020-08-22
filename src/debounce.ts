/**
 * Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds.
 *
 * @param {Function} fn
 * @param {number} [ms=0]
 * @returns
 */
const debounce = (fn: Function, ms = 0) => {
    let timeoutId: number;
    return function (...args: any[]) {
        clearTimeout(timeoutId);
        // @ts-ignore
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};
export default debounce;
