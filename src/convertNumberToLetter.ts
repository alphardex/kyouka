/**
 * Convert a number to its corresponding letter (such as 0->A).
 *
 * @param number
 * @returns
 */
const convertNumberToLetter = (number: number) => {
  const asciiA = "A".charCodeAt(0);
  const asciiCode = number + asciiA;
  const letter = String.fromCharCode(asciiCode);
  return letter;
};

export default convertNumberToLetter;
