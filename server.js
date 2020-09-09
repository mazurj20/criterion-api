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

app.get("/Title/:Title", ({ params }, res) => {
  Movies.findOne({ Title: params.Title }).then((movie) => res.json(movie));
});

app.get("/Country/:Country", ({ params }, res) => {
  Movies.find({ Country: params.Country }).then((movie) => res.json(movie));
});

app.post("/Add", ({ body }, res) => {
  Movies.create(body).then((movies) => res.json(movies));
});

app.put("/Update/:Title", (req, res) => {
  Movies.findOneAndUpdate(
    { Title: req.params.Title },
    { $set: req.body },
    { new: true }
  ).then((movie) => res.json(movie));
});

app.delete("/Delete/:Title", ({ params }, res) => {
  Movies.findOneAndDelete({ Title: params.Title }).then((movie) =>
    res.json(movie)
  );
});
//listener
app.listen(port, () => console.log(`listening on ${port}`));
