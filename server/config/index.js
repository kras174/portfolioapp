if (process.env.NODE_ENV.trim() === "production") {
  module.exports = require("./prod.js");
} else {
  module.exports = require("./dev.js");
}
