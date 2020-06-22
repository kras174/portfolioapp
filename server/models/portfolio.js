const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: String,
  releaseYear: Date,
  description: String,
  stack: Array,
  image: String,
  preview: Array,
});

module.exports = mongoose.model("Porfolio", portfolioSchema);
