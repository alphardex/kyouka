/**
 * Get a random string of a specific length.
 * ref: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param length
 * @returns
 */
const getRandString = (length = 10) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default getRandString;
