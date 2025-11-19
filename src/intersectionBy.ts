type Iteratee<T> = ((value: T) => any) | string;

/**
 * By iterating function, returns the intersection of all provided arrays.
 * @param args
 * @returns
 */
const intersectionBy = <T>(...args: any[]): T[] => {
  // Early return for empty arguments
  if (args.length === 0) return [];

  // Initialize default values
  let iteratee: Iteratee<T> = (value: T) => value;
  let arrays: T[][] = [];

  // Find the iteratee parameter by scanning from the end
  // The last function or string argument is treated as the iteratee
  for (let i = args.length - 1; i >= 0; i--) {
    const arg = args[i];

    // If we find a function or string, use it as the iteratee
    // All preceding arguments are treated as arrays
    if (typeof arg === "function" || typeof arg === "string") {
      iteratee = arg;
      arrays = args.slice(0, i) as T[][];
      break;
    }

    // If we reach the beginning without finding an iteratee,
    // all arguments are treated as arrays
    if (i === 0) {
      arrays = args as T[][];
    }
  }

  // Handle edge cases: no arrays provided
  if (arrays.length === 0) return [];

  const [firstArray, ...restArrays] = arrays;

  // Handle edge cases: first array is empty or invalid
  if (!firstArray || firstArray.length === 0) return [];

  // Create the iteratee function from the provided iteratee
  const iterateeFunc = createIteratee(iteratee);

  // Create Sets for efficient lookup in the rest arrays
  // Each Set contains the transformed values from the corresponding array
  const restSets = restArrays.map(
    (arr) => new Set(arr.map((item) => iterateeFunc(item)))
  );

  // Filter the first array to only include elements that exist in all other arrays
  // Existence is determined by comparing the transformed values
  return firstArray.filter((item) => {
    const processedValue = iterateeFunc(item);
    return restSets.every((set) => set.has(processedValue));
  });
};

/**
 * Creates an iteratee function from various input types
 * Supports function iteratees, property names, and nested property paths
 *
 * @param iteratee - The iteratee specification (function, property name, or property path)
 * @returns A function that extracts the value to compare from an object
 */
const createIteratee = <T>(iteratee: Iteratee<T>): ((value: T) => any) => {
  // If iteratee is already a function, return it directly
  if (typeof iteratee === "function") {
    return iteratee;
  }

  // For string iteratees, create a function that traverses property paths
  // Supports nested paths like 'user.profile.id'
  return (item: any) => {
    // Handle null and undefined inputs
    if (item == null) return undefined;

    // Split the path by dots to handle nested properties
    const path = iteratee.split(".");
    let value = item;

    // Traverse the object path
    for (const key of path) {
      // If we encounter null/undefined during traversal, return undefined
      if (value == null) return undefined;
      value = value[key];
    }

    return value;
  };
};

export default intersectionBy;
