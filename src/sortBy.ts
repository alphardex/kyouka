type Iteratee<T> = ((item: T) => any) | string | number;

/**
 * A comprehensive implementation of lodash's sortBy function
 * Creates a new array of elements sorted in ascending order by the results of running
 * each element through the provided iteratees
 *
 * @param collection - The collection to iterate over
 * @param iteratees - The iteratees to sort by. Can be functions, property paths, or property names
 * @returns Returns the new sorted array
 */
const sortBy = <T>(collection: T[], ...iteratees: Iteratee<T>[]): T[] => {
  // Handle edge cases: null, undefined, or non-array input
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  // Create a copy to avoid mutating the original array
  const result = [...collection];

  // If no iteratees provided, perform default sort
  if (iteratees.length === 0) {
    return result.sort();
  }

  // Convert all iteratees to functions
  const iterateeFunctions = iteratees.map((iteratee) =>
    createSortIteratee(iteratee)
  );

  // Perform multi-criteria sort
  return result.sort((a, b) => {
    // Compare using each iteratee in sequence until a difference is found
    for (const iteratee of iterateeFunctions) {
      const valueA = iteratee(a);
      const valueB = iteratee(b);

      // Handle null and undefined values (treated as larger than any value)
      if (valueA == null && valueB == null) continue;
      if (valueA == null) return 1;
      if (valueB == null) return -1;

      // Compare values based on their type
      const comparisonResult = compareValues(valueA, valueB);
      if (comparisonResult !== 0) return comparisonResult;
    }

    // If all iteratees return equal, maintain original order
    return 0;
  });
};

/**
 * Creates an iteratee function from various input types
 * Supports function iteratees, property names, nested property paths, and array indices
 *
 * @param iteratee - The iteratee specification (function, property path, or array index)
 * @returns A function that extracts the comparison value from an item
 */
const createSortIteratee = <T>(iteratee: Iteratee<T>): ((item: T) => any) => {
  // Function iteratee - use directly
  if (typeof iteratee === "function") {
    return iteratee;
  }

  // Number iteratee - treat as array index
  if (typeof iteratee === "number") {
    return (item: any) => item[iteratee];
  }

  // String iteratee - handle property paths
  return (item: any) => {
    if (item == null) return undefined;

    // Split nested property paths (e.g., 'user.profile.age')
    const path = iteratee.split(".");
    let value = item;

    // Traverse the object path
    for (const key of path) {
      if (value == null) return undefined;
      value = value[key];
    }

    return value;
  };
};

/**
 * Compares two values of potentially different types for sorting
 * Handles type coercion and provides consistent ordering
 *
 * @param a - First value to compare
 * @param b - Second value to compare
 * @returns -1 if a < b, 1 if a > b, 0 if equal
 */
const compareValues = (a: any, b: any): number => {
  // Handle same-type comparisons first for efficiency
  if (typeof a === typeof b) {
    switch (typeof a) {
      case "string":
        // Use locale-aware string comparison
        return a.localeCompare(b);
      case "number":
      case "boolean":
        // Direct comparison for numbers and booleans
        return a < b ? -1 : a > b ? 1 : 0;
      default:
        // For objects, arrays, etc., convert to string for comparison
        return String(a).localeCompare(String(b));
    }
  }

  // Handle mixed types by converting to strings
  // This provides consistent behavior across different types
  return String(a).localeCompare(String(b));
};

export default sortBy;
