/**
 * Converts a CSV string to a 2D array.
 *
 * @param {string} data
 * @param {string} [delimiter=',']
 * @param {boolean} [omitFirstRow=false]
 */
const CSVToArray = (data: string, delimiter = ',', omitFirstRow = false) =>
    data
        .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(v => v.split(delimiter));
export default CSVToArray;
