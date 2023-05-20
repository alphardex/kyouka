/**
 * Get the location.search obj.
 *
 * @param {string} url
 * @returns {{}}
 */
const getURLParameters = (url: string): {} =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      ((a as any)[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

export default getURLParameters;
