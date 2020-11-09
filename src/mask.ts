/**
 * Replaces all but the last num of characters with the specified mask character.
 * @param cc
 * @param num
 * @param mask
 */
const mask = (cc: string | number, num = 4, mask = "*") => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
export default mask;
