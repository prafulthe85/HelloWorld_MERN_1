const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  Name: {
    type: "String",
    required: true,
    unique: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Taste: {
    type: String,
  },
  Is_drink: {
    type: Boolean,
    default: false, // Default value if not passed by the user
  },
  Ingredients: {
    type: String,
    enum: ["Chicken", "Vegetables", "milk"],
  },
  Sales: {
    type: Number,
  },
});

const Menu = mongoose.model("Menu", MenuSchema);
module.exports = Menu;
