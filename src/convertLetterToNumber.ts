/**
 * Convert a letter to its corresponding number (such as A->0).
 *
 * @param number
 * @returns
 */
const convertLetterToNumber = (letter: string) => {
  letter = letter.toUpperCase();
  const asciiA = "A".charCodeAt(0);
  const asciiLetter = letter.charCodeAt(0);
  const number = asciiLetter - asciiA;
  return number;
};

export default convertLetterToNumber;
