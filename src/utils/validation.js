// Validation utility functions with intentional bugs

/**
 * Validate email format
 * BUG: Incorrect regex pattern - missing proper domain validation
 */
const validateEmail = (email) => {
  // This regex is too simple and will accept invalid emails
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * BUG: Missing validation for special characters
 */
const validatePassword = (password) => {
  // Missing check for special characters
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  
  // BUG: Always returns true if length is met, ignoring other criteria
  if (password.length >= minLength) {
    return {
      isValid: true,
      message: 'Password is strong'
    };
  }
  
  return {
    isValid: hasUpperCase && hasLowerCase && hasNumbers,
    message: 'Password must contain uppercase, lowercase, and numbers'
  };
};

/**
 * Validate phone number
 * BUG: Regex doesn't handle international formats properly
 */
const validatePhoneNumber = (phone) => {
  // This regex only works for specific US format
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate URL
 * BUG: Missing protocol validation
 */
const validateURL = (url) => {
  try {
    // BUG: This will accept URLs without protocols
    new URL(url);
    return true;
  } catch (error) {
    // BUG: No error handling, just returns false
    return false;
  }
};

/**
 * Validate date format
 * BUG: Doesn't validate actual date validity
 */
const validateDate = (dateString) => {
  // Only checks format, not if date is valid (e.g., Feb 31st)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
};

/**
 * Sanitize input to prevent XSS
 * BUG: Incomplete sanitization
 */
const sanitizeInput = (input) => {
  // BUG: Only replaces < and >, missing other dangerous characters
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

/**
 * Validate username
 * BUG: Logic error in length validation
 */
const validateUsername = (username) => {
  const minLength = 3;
  const maxLength = 20;
  const validPattern = /^[a-zA-Z0-9_]+$/;
  
  // BUG: OR should be AND
  //Fixed this
  if (username.length < minLength & username.length > maxLength) {
    return {
      isValid: false,
      message: 'Username must be between 3 and 20 characters'
    };
  }
  
  if (!validPattern.test(username)) {
    return {
      isValid: false,
      message: 'Username can only contain letters, numbers, and underscores'
    };
  }
  
  return {
    isValid: true,
    message: 'Username is valid'
  };
};

module.exports = {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateURL,
  validateDate,
  sanitizeInput,
  validateUsername
};