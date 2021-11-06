/**
 * Check whether a string is a valid idcard number.
 *
 * @param {string} str
 * @returns {boolean}
 */
const isIdcard = (str: string) =>
  /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(
    str
  );

export default isIdcard;
