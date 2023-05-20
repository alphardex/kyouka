/**
 * Get the location.search obj.
 *
 * @param {string} url
 * @returns {{}}
 */
const getURLParameters = (url: string): {} =>
  // @ts-ignore
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a: any, v: any) => (
      ((a as any)[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

export default getURLParameters;
