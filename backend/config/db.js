const mongoose = require("mongoose");

module.exports = {
  connect: (DB_HOST) => {
    mongoose
      .connect(DB_HOST)
      .catch((error) =>
        console(`Could not connect to database, check if database is running`)
      )
      .then((con) => console.log(`MongoDB Database connected on ${DB_HOST}`)),
      mongoose.connection.on("error", (err) => {
        console.log(err);
        process.exit();
      });
  },
  close: () => {
    mongoose.connection.close();
  },
};
