/**
 * Remove all the blank attributes from an Object.
 *
 * @param obj
 * @returns
 */
const cleanObject = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      delete obj[key];
    }
  });
  return obj;
};

export default cleanObject;
