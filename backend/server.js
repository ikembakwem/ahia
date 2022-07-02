const app = require("./app");
require("dotenv").config(); // Set up enviroment variables
const db = require("./config/db");

const port = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST;

db.connect(DB_HOST);

app.listen(port, () => {
  console.log(
    `Server started on PORT: ${port} in ${process.env.NODE_ENV} mode`
  );
});
