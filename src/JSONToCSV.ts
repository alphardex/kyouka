/**
 * Converts an array of objects to a CSV string that contains only the `columns` specified.
 *
 * @param {any[]} arr
 * @param {string[]} columns
 * @param {string} [delimiter=',']
 */
const JSONtoCSV = (arr: any[], columns: string[], delimiter = ',') =>
    [
        columns.join(delimiter),
        ...arr.map(obj =>
            columns.reduce(
                (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
                ''
            )
        )
    ].join('\n');
export default JSONtoCSV;
