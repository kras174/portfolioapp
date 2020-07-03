const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: String,
  releaseYear: Number,
  description: String,
  stack: Array,
  image: String,
  preview: Array,
  demoLink: String,
});

module.exports = mongoose.model("Porfolio", portfolioSchema);
