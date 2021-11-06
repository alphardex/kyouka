/**
 * Converts a CSV string to a 2D array of objects, the first row of the string is used as the title row.
 *
 * @param {string} data
 * @param {string} [delimiter=',']
 * @returns
 */
const CSVToJSON = (data: string, delimiter = ",") => {
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      // @ts-ignore
      return titles.reduce(
        (obj, title, index) => (((obj as any)[title] = values[index]), obj),
        {}
      );
    });
};
export default CSVToJSON;
