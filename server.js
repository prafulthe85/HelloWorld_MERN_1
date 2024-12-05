const express = require("express");
const db = require("./db");
const bodyParser = require("body-parser");
// bodyparser automatically parses the Json data from the request body and converts into Js object which is then stored in req.body
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the hotel");
});

// Import the routers
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

// use the routes for respective endpoints
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
