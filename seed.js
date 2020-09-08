const Movies = require("./Movies.js");
const data = require("./data.json");

Movies.deleteMany({}).then(() => {
  Movies.create(data).then((movies) => {
    console.log(movies);
    process.exit();
  });
});
