const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

router.post("/", async (req, res) => {
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

router.get("/", async (req, res) => {
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

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    console.log(workType);
    if (workType == "Chef" || workType == "Waiter" || workType == "Manager") {
      const personData = await Person.find({ work: workType });
      console.log("Data of Person WorkType is fetched from db", personData);
      res.status(200).json(personData);
    } else {
      res.status(404).json({ error: "Invalid Person's work type passed" });
    }
  } catch (error) {
    console.log({ error: "Error while fetching Person's worktype from db" });
    res.status(500).json("error");
  }
});

module.exports = router;
