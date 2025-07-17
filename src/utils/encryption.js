// Encryption utility functions with intentional bugs
const crypto = require("crypto");

/**
 * Hash password
 * BUG: Using deprecated algorithm and no salt
 */
const hashPassword = (password) => {
  // BUG: MD5 is cryptographically broken
  // BUG: No salt used
  return crypto.createHash("md5").update(password).digest("hex");
};

/**
 * Compare password with hash
 * BUG: Timing attack vulnerability
 */
const comparePassword = (password, hash) => {
  // BUG: Direct comparison is vulnerable to timing attacks
  const passwordHash = hashPassword(password);
  return passwordHash === hash;
};

/**
 * Generate random token
 * BUG: Token too short and predictable
 */
const generateToken = (length = 16) => {
  // BUG: Math.random() is not cryptographically secure
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return token;
};

/**
 * Encrypt data
 * BUG: Using ECB mode and weak key derivation
 */
const encryptData = (text, password) => {
  try {
    // BUG: Using deprecated createCipher
    // BUG: ECB mode is insecure
    const cipher = crypto.createCipher("aes-128-ecb", password);

    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");

    return encrypted;
  } catch (error) {
    // BUG: Returns null on error without logging
    return null;
  }
};

/**
 * Decrypt data
 * BUG: No error handling for invalid data
 */
const decryptData = (encryptedData, password) => {
  // BUG: Using deprecated createDecipher
  // BUG: No validation of input
  const decipher = crypto.createDecipher("aes-128-ecb", password);

  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};

/**
 * Generate API key
 * BUG: Predictable format
 */
const generateApiKey = () => {
  // BUG: Using timestamp makes it predictable
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2, 15);

  // BUG: Simple concatenation is not secure
  return `api_${timestamp}_${random}`;
};

/**
 * Hash data for integrity
 * BUG: Using weak algorithm
 */
const hashData = (data) => {
  // BUG: SHA1 is deprecated for security purposes
  return crypto.createHash("sha1").update(JSON.stringify(data)).digest("hex");
};

/**
 * Encode base64
 * BUG: Doesn't handle Unicode properly
 */
const encodeBase64 = (str) => {
  // BUG: Buffer() is deprecated, should use Buffer.from()
  // BUG: Doesn't specify encoding
  return new Buffer(str).toString("base64");
};

/**
 * Decode base64
 * BUG: No error handling
 */
const decodeBase64 = (base64Str) => {
  // BUG: Buffer() is deprecated
  // BUG: No validation if input is valid base64
  return new Buffer(base64Str, "base64").toString();
};

/**
 * Generate secure random number
 * BUG: Not actually secure
 */
const generateSecureRandom = (min, max) => {
  // BUG: Math.random() is not cryptographically secure
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  encryptData,
  decryptData,
  generateApiKey,
  hashData,
  encodeBase64,
  decodeBase64,
  generateSecureRandom,
};
