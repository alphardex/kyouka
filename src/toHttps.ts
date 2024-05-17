/**
 * Convert url to https.
 *
 * @param url
 * @returns
 */
const toHttps = (url: string) => url.replace(/^http:/, "https:");

export default toHttps;
