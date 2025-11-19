interface TreeData {
  id: string;
  subList?: TreeData[];
  children?: TreeData[];
  [key: string]: any;
}

type Predicate<T> = (item: T) => boolean;

/**
 * Finds a single element in a nested data structure based on a target key and an optional condition.
 * @param data
 * @param targetKey
 * @param condition
 * @returns
 */
function findRecursive<T extends TreeData>(
  data: T | T[],
  targetKey: keyof T,
  condition?: Predicate<T>
): T | null {
  if (Array.isArray(data)) {
    for (const item of data) {
      const result = findRecursive(item, targetKey, condition);
      if (result) return result;
    }
    return null;
  }

  if (data && typeof data === "object") {
    // check if the current object meets the condition
    if (!condition || condition(data)) {
      return data;
    }

    // if the current object has the target key, recursively search it
    const targetValue = data[targetKey];
    if (targetValue && Array.isArray(targetValue)) {
      return findRecursive(targetValue, targetKey, condition);
    }

    // traverse other properties (excluding the target key)
    for (const key in data) {
      if (
        key !== targetKey &&
        Object.prototype.hasOwnProperty.call(data, key) &&
        data[key] &&
        typeof data[key] === "object"
      ) {
        const result = findRecursive(data[key] as T, targetKey, condition);
        if (result) return result;
      }
    }
  }

  return null;
}

/**
 * Finds all elements in a nested data structure based on a target key and an optional condition.
 * @param data
 * @param targetKey
 * @param condition
 * @returns
 */
function findAllRecursive<T extends TreeData>(
  data: T | T[],
  targetKey: keyof T,
  condition?: Predicate<T>
): T[] {
  const results: T[] = [];

  function traverse(obj: T | T[]): void {
    if (Array.isArray(obj)) {
      obj.forEach((item) => traverse(item));
    } else if (obj && typeof obj === "object") {
      // check if the current object meets the condition
      if (!condition || condition(obj)) {
        results.push(obj);
      }

      // traverse the array corresponding to the target key
      const targetValue = obj[targetKey];
      if (targetValue && Array.isArray(targetValue)) {
        traverse(targetValue);
      }

      // traverse other properties
      for (const key in obj) {
        if (
          key !== targetKey &&
          Object.prototype.hasOwnProperty.call(obj, key) &&
          obj[key] &&
          typeof obj[key] === "object"
        ) {
          traverse(obj[key] as T);
        }
      }
    }
  }

  traverse(data);
  return results;
}

export { findRecursive, findAllRecursive };
