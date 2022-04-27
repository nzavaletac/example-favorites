const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/dbfavorite");

  mongoose.connection.once("open", () => {
    console.log("Database successfully connected.");
  });
  mongoose.connection.on("erro", () => {
    console.log("Something went wrong.");
  });
}

module.exports = { connect };
