// Central export for all utility functions
// BUG: Some imports might fail if modules have issues

const validation = require("./validation");
const formatting = require("./formatting");
const encryption = require("./encryption");
const logger = require("./logger");
const helpers = require("./helpers");

// BUG: Spreading might override functions with same names
module.exports = {
  ...validation,
  ...formatting,
  ...encryption,
  logger, // Logger is already an instance
  ...helpers,
};
