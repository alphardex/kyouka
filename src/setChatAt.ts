/**
 * Replace a specific char at a specific index of a string.
 *
 * @param str
 * @param index
 * @param chr
 * @returns
 */
const setCharAt = (str: string, index: number, chr: string) => {
  if (index > str.length - 1) {
    return str;
  }
  return str.substring(0, index) + chr + str.substring(index + 1);
};

export default setCharAt;
