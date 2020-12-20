/**
 * Returns true if the string is y/yes or false if the string is n/no.
 * @param val
 * @param def
 */
const yesNo = (val: string, def = false) =>
    /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
export default yesNo;
