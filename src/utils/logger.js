// Logger utility with intentional bugs
const fs = require("fs");
const path = require("path");

class Logger {
  constructor(logFile = "app.log") {
    // BUG: Hardcoded path, should be configurable
    this.logPath = path.join(__dirname, "../../logs", logFile);

    // BUG: No check if directory exists
    // fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
  }

  /**
   * Format log message
   * BUG: Timezone issues
   */
  formatMessage(level, message, metadata) {
    // BUG: Using local time without timezone info
    const timestamp = new Date().toISOString();

    // BUG: Doesn't handle circular references in metadata
    const metaString = metadata ? JSON.stringify(metadata) : "";

    return `[${timestamp}] [${level}] ${message} ${metaString}\n`;
  }

  /**
   * Write to log file
   * BUG: Synchronous write blocks event loop
   */
  writeLog(level, message, metadata) {
    const formattedMessage = this.formatMessage(level, message, metadata);

    // BUG: Using synchronous write
    // BUG: No error handling
    fs.appendFileSync(this.logPath, formattedMessage);
  }

  /**
   * Log info message
   * BUG: No validation of inputs
   */
  info(message, metadata) {
    // BUG: Doesn't check if message is string
    this.writeLog("INFO", message, metadata);

    // BUG: Always logs to console in production
    console.log(message);
  }

  /**
   * Log error message
   * BUG: Doesn't capture stack trace
   */
  error(message, error, metadata) {
    // BUG: Doesn't include error stack trace
    const errorMeta = {
      ...metadata,
      error: error.message, // BUG: Only captures message, not stack
    };

    this.writeLog("ERROR", message, errorMeta);
  }

  /**
   * Log warning message
   * BUG: No rate limiting
   */
  warn(message, metadata) {
    // BUG: Could flood logs without rate limiting
    this.writeLog("WARN", message, metadata);
  }

  /**
   * Log debug message
   * BUG: Always logs regardless of environment
   */
  debug(message, metadata) {
    // BUG: Should check if in development mode
    this.writeLog("DEBUG", message, metadata);
    console.log("DEBUG:", message, metadata);
  }

  /**
   * Rotate logs
   * BUG: Doesn't preserve old logs
   */
  rotateLogs() {
    try {
      // BUG: Just deletes the file instead of rotating
      fs.unlinkSync(this.logPath);

      // BUG: Doesn't create new file
    } catch (error) {
      // BUG: Swallows error
    }
  }

  /**
   * Get logs
   * BUG: Loads entire file into memory
   */
  getLogs(lines = 100) {
    try {
      // BUG: Reads entire file even if only need last few lines
      const content = fs.readFileSync(this.logPath, "utf8");
      const allLines = content.split("\n");

      // BUG: Returns empty lines
      return allLines.slice(-lines);
    } catch (error) {
      // BUG: Returns undefined instead of empty array
      return undefined;
    }
  }

  /**
   * Clear logs
   * BUG: No backup before clearing
   */
  clearLogs() {
    // BUG: No confirmation or backup
    fs.writeFileSync(this.logPath, "");
  }

  /**
   * Log performance
   * BUG: Inaccurate timing
   */
  logPerformance(operation, startTime) {
    // BUG: Should use process.hrtime() for accuracy
    const duration = Date.now() - startTime;

    // BUG: Doesn't log in consistent format
    this.info(`Performance: ${operation} took ${duration}ms`);
  }
}

// BUG: Singleton pattern implemented incorrectly
let logger = new Logger();

// BUG: Doesn't handle process termination
process.on("uncaughtException", (error) => {
  // BUG: Doesn't flush logs before exit
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

module.exports = logger;
