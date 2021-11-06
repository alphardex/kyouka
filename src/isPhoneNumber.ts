/**
 * Check whether a string is a valid phone number.
 *
 * @param {string} str
 * @returns {boolean}
 */
const isPhoneNumber = (str: string): boolean =>
  /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(str);

export default isPhoneNumber;
