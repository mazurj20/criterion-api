//imports

import express from "express";
import mongoose from "mongoose";
import Movies from "./Movies.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
//db config 05pb4PAlAZokfJvS
const connection_url =
  "mongodb+srv://admin:fV2fqzXFIFr1HfDs@cluster0.or87z.mongodb.net/criterion?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//api route
app.get("/", (req, res) => res.status(200).send("yall hear me?"));
//listener
app.listen(port, () => console.log(`listening on ${port}`));
