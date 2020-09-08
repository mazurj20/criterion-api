//imports
const express = require("express");
const Movies = require("./Movies.js");

// app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
//db config 05pb4PAlAZokfJvS

//api route
app.get("/", (req, res) => res.status(200).send(Movies));

app.get("/:Title", ({ params }, res) => {
  Movies.findOne({ Title: params.Title }).then((movie) => res.json(movie));
});
//listener
app.listen(port, () => console.log(`listening on ${port}`));
