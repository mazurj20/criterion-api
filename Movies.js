const mongoose = require("./database.js");

const Movies = mongoose.Schema({
  Title: String,
  Description: String,
  Director: String,
  Country: String,
  Year: Number,
  Language: String,
  Image: String,
});

module.exports = mongoose.model("Movies", Movies);
