/**
 * Convert all the values of object to string format.
 * @param obj
 * @returns
 */
const stringifyObject = (obj: Record<string, any>) => {
  Object.keys(obj).forEach((key) => {
    obj[key] = `${obj[key]}`;
  });
  return obj;
};

export default stringifyObject;
