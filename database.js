const mongoose = require("mongoose");

const connection_url =
  "mongodb+srv://admin:fV2fqzXFIFr1HfDs@cluster0.or87z.mongodb.net/criterion?retryWrites=true&w=majority";
mongoose.connect(/*"mongodb://localhost/movies"*/ connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
