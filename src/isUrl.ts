/**
 * Decide whether a string is a URL.
 * @param url
 * @returns
 */
const isUrl = (url: string) => /^http(s)?/.test(url);

export default isUrl;
