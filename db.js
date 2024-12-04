//  Responsible for establishing connection between Node.js and Mongodb
const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// predefined even listeners in mongoose
db.on("connected", () => {
  console.log("Connected to Mongodb Server");
});

db.on("error", (err) => {
  console.log("Mongodb Conenction Error ", err);
});

db.on("disconnected", () => {
  console.log("Mongodb Disconnected");
});

module.exports = db;
