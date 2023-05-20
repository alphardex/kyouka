/**
 * Calculates the factorial of a number.
 * @param n
 */
const factorial = (n: number): any => {
  return n < 0
    ? (() => {
        throw new TypeError("Negative numbers are not allowed!");
      })()
    : n <= 1
    ? 1
    : n * factorial(n - 1);
};

export default factorial;
