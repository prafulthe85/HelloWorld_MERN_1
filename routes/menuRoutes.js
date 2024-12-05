const express = require("express");
const Menu = require("./../models/menu");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const MenuData = req.body;
    const NewMenu = new Menu(MenuData);
    const response = await NewMenu.save();
    console.log("Data Stored in Menu Db");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while string Menu Data", error);
    res.status(500).json({ error: "Error while saving Menu" });
  }
});

router.get("/", async (req, res) => {
  try {
    const MenuData = await Menu.find();
    console.log("Data Fetched from Menu Db");
    res.status(200).json(MenuData);
  } catch (error) {
    console.log("Error while fetching Menu from db");

    res.status(500).json({ error: "error" });
  }
});

module.exports = router;
