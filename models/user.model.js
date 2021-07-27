const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  surname: {
    type: String,
    required: [true, "Surname is required"],
  },
});

const User = mongoose.model("User", nameSchema);

module.exports = User;
