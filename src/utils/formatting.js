// Formatting utility functions with intentional bugs

/**
 * Format date to readable string
 * BUG: Doesn't handle invalid dates
 */
const formatDate = (date) => {
  // BUG: No validation if date is valid
  const d = new Date(date);
  
  // BUG: Months are 0-indexed but not adjusted
  return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;
};

/**
 * Format currency
 * BUG: Doesn't handle negative numbers correctly
 */
const formatCurrency = (amount, currency = 'USD') => {
  // BUG: Doesn't validate if amount is a number
  // BUG: Negative numbers show as $-123.45 instead of -$123.45
  return `$${amount.toFixed(2)}`;
};

/**
 * Format phone number
 * BUG: Assumes all phone numbers are 10 digits
 */
const formatPhoneNumber = (phone) => {
  // BUG: No validation or error handling
  const cleaned = phone.replace(/\D/g, '');
  
  // BUG: Doesn't check if phone number has correct length
  return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6, 10)}`;
};

/**
 * Truncate text with ellipsis
 * BUG: Off-by-one error
 */
const truncateText = (text, maxLength) => {
  // BUG: Should be <= not <
  if (text.length < maxLength) {
    return text;
  }
  
  // BUG: Doesn't handle case where maxLength < 3
  return text.substring(0, maxLength - 3) + '...';
};

/**
 * Convert bytes to human readable format
 * BUG: Incorrect calculation
 */
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  
  // BUG: k should be 1024, not 1000
  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  // BUG: Math.floor should be used instead of parseInt
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Title case string
 * BUG: Doesn't handle edge cases
 */
const toTitleCase = (str) => {
  // BUG: Doesn't handle empty string or null
  // BUG: Capitalizes words that shouldn't be (like 'of', 'the', 'a')
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

/**
 * Format percentage
 * BUG: Doesn't validate input
 */
const formatPercentage = (value, decimals = 0) => {
  // BUG: Doesn't check if value is between 0 and 1 or 0 and 100
  // BUG: Assumes value is already in percentage form
  return `${value.toFixed(decimals)}%`;
};

/**
 * Slug generation
 * BUG: Doesn't handle special characters properly
 */
const generateSlug = (text) => {
  // BUG: Doesn't handle accented characters
  // BUG: Multiple hyphens not collapsed to single hyphen
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

/**
 * Format time ago
 * BUG: Calculation errors
 */
const formatTimeAgo = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);
  
  // BUG: Incorrect time calculations
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };
  
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    
    if (interval == 1) {
      // BUG: Doesn't pluralize correctly
      return `${interval} ${unit} ago`;
    }
    if (interval > 1) {
      // BUG: Doesn't pluralize correctly
      return `${interval} ${unit}'s ago`;
    }
  }
  
  // BUG: Missing "just now" for very recent times

  if (seconds<=5){
    return "just now"
  }
  return `${seconds} seconds ago`;
};

module.exports = {
  formatDate,
  formatCurrency,
  formatPhoneNumber,
  truncateText,
  formatBytes,
  toTitleCase,
  formatPercentage,
  generateSlug,
  formatTimeAgo
};