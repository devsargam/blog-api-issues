// General helper functions with intentional bugs

/**
 * Deep clone an object
 * BUG: Doesn't handle all types correctly
 */
const deepClone = (obj) => {
  // BUG: Doesn't handle dates, regex, functions, undefined, etc.
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Debounce function
 * BUG: Context and arguments not preserved correctly
 */
const debounce = (func, delay) => {
  let timeoutId;

  return function () {
    // BUG: Loses 'this' context
    // BUG: Doesn't pass arguments correctly
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};

/**
 * Throttle function
 * BUG: Doesn't execute last call
 */
const throttle = (func, limit) => {
  let inThrottle;

  return function () {
    if (!inThrottle) {
      // BUG: Doesn't preserve context or arguments
      func();
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
        // BUG: Doesn't execute pending calls
      }, limit);
    }
  };
};

/**
 * Retry function
 * BUG: No exponential backoff
 */
const retry = async (fn, retries = 3) => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }

    // BUG: No delay between retries
    // BUG: Doesn't log which attempt failed
    return retry(fn, retries - 1);
  }
};

/**
 * Sleep/delay function
 * BUG: Can't be cancelled
 */
const sleep = (ms) => {
  // BUG: No way to cancel the sleep
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Parse query string
 * BUG: Doesn't handle arrays or nested objects
 */
const parseQueryString = (queryString) => {
  // BUG: Doesn't handle URL encoding properly
  const params = {};

  // BUG: Doesn't remove leading '?'
  const pairs = queryString.split("&");

  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    // BUG: Doesn't decode URI components
    params[key] = value;
  });

  return params;
};

/**
 * Flatten array
 * BUG: Only flattens one level
 */
const flattenArray = (arr) => {
  // BUG: Only flattens one level deep
  return arr.reduce((flat, item) => {
    return flat.concat(item);
  }, []);
};

/**
 * Group array by key
 * BUG: Doesn't handle missing keys
 */
const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    // BUG: Doesn't check if key exists in item
    const group = item[key];

    // BUG: Doesn't initialize array
    result[group].push(item);

    return result;
  }, {});
};

/**
 * Unique array values
 * BUG: Doesn't work with objects
 */
const uniqueArray = (arr) => {
  // BUG: Doesn't work with objects or complex types
  return [...new Set(arr)];
};

/**
 * Memoize function
 * BUG: Memory leak - no cache limit
 */
const memoize = (fn) => {
  const cache = {};

  return function (...args) {
    // BUG: Uses JSON.stringify which doesn't work for all types
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    // BUG: Doesn't handle async functions
    const result = fn.apply(this, args);

    // BUG: No cache size limit - memory leak
    cache[key] = result;

    return result;
  };
};

/**
 * Pick properties from object
 * BUG: Mutates original object
 */
const pick = (obj, keys) => {
  const result = {};

  keys.forEach((key) => {
    // BUG: Doesn't check if key exists
    // BUG: Doesn't handle nested keys
    result[key] = obj[key];
  });

  return result;
};

/**
 * Check if empty
 * BUG: Incorrect implementation
 */
const isEmpty = (value) => {
  // BUG: Doesn't handle all cases correctly
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "object") {
    // BUG: Object.keys doesn't work for all types
    return Object.keys(value).length === 0;
  }

  // BUG: Doesn't handle strings, numbers, etc.
  return false;
};

/**
 * Capitalize first letter
 * BUG: Doesn't handle empty strings
 */
const capitalize = (str) => {
  // BUG: No null/undefined check
  // BUG: Doesn't handle empty string
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * Random element from array
 * BUG: Doesn't handle empty arrays
 */
const randomElement = (arr) => {
  // BUG: Returns undefined for empty arrays
  // BUG: Math.random() could theoretically return 1
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Shuffle array
 * BUG: Mutates original array
 */
const shuffleArray = (arr) => {
  // BUG: Mutates the original array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // BUG: No validation
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

module.exports = {
  deepClone,
  debounce,
  throttle,
  retry,
  sleep,
  parseQueryString,
  flattenArray,
  groupBy,
  uniqueArray,
  memoize,
  pick,
  isEmpty,
  capitalize,
  randomElement,
  shuffleArray,
};
