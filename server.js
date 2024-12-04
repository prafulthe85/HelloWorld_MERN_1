const express = require("express");
const db = require("./db");
const Person = require("./models/person");
const Menu = require("./models/menu");
const bodyParser = require("body-parser");
// bodyparser automatically parses the Json data from the request body and converts into Js object which is then stored in req.body
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the hotel");
});

app.post("/person", async (req, res) => {
  try {
    const PersonData = req.body; // Assume that the body contains the person data

    const newPerson = new Person(PersonData); // create a new person

    const response = await newPerson.save();
    console.log("Data Saved in Db");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while saving data ", error);
    res.status(500).json({ error: "Server error while saving data of person" });
  }
});

app.get("/person", async (req, res) => {
  try {
    const PersonData = await Person.find();
    console.log("Data fetched from db");
    res.status(200).json(PersonData);
  } catch (error) {
    console.log("Error while fetching data from db ", error);
    res
      .status(500)
      .json({ error: "Server error while fetching data of person" });
  }
});

app.post("/menu", async (req, res) => {
  try {
    const MenuData = req.body;
    const NewMenu = new Menu(MenuData);
    const response = await NewMenu.save();
    console.log("Data Stored in Menu Db");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while string Menu Data", error);
    res.send(500).json("Error while saving Menu");
  }
});

app.get("/menu", async (req, res) => {
  try {
    const MenuData = await Menu.find();
    console.log("Data Fetched from Menu Db");
    res.status(200).json(MenuData);
  } catch (error) {
    console.log("Error while fetching Menu from db");
    res.send(500).json("error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
