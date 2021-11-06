/**
 * Generates a query string from the key-value pairs of the given object.
 * @param queryParameters
 * @returns
 */
const objectToQueryString = (queryParameters: Object) => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val]) => {
        const symbol = queryString.length === 0 ? "?" : "&";
        queryString += typeof val === "string" ? `${symbol}${key}=${val}` : "";
        return queryString;
      }, "")
    : "";
};

export default objectToQueryString;
