/**
 * Formats a number into a more readable string with suffixes for thousands (K), millions (M), and billions (B).
 * @param num 
 * @returns 
 */
const formatNumber = (num: number): string => {
  const isNegative = num < 0;
  const absNum = Math.abs(num);

  const billion = 1_000_000_000;
  const million = 1_000_000;
  const thousand = 1_000;

  if (absNum >= billion) {
    return `${isNegative ? "-" : ""}${(absNum / billion).toFixed(1)}B`;
  } else if (absNum >= million) {
    return `${isNegative ? "-" : ""}${(absNum / million).toFixed(1)}M`;
  } else if (absNum >= thousand) {
    return `${isNegative ? "-" : ""}${(absNum / thousand).toFixed(1)}K`;
  }

  return `${isNegative ? "-" : ""}${absNum}`;
};

export default formatNumber;
