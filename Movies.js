import mongoose from "mongoose";

const Movies = mongoose.Schema({
  Title: String,
  Description: String,
  Director: String,
  Country: String,
  Year: Number,
  Language: String,
  Image: String,
});

export default mongoose.model("Movies", Movies);
