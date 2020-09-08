//imports

import express from "express";
import mongoose from "mongoose";
import Movies from "./Movies.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

//middleware

//db config

//api route

//listener
app.listen(port, () => console.log(`listening on ${port}`));
