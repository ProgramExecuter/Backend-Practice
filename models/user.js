const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username is required"],
    minLength: [3, "The number of characters are less than 3"],
    maxLength: [20, "The number of characters are greater than 20"],
  },
  fullName: {
    type: String,
    required: [true, "full name is required"],
    minLength: [3, "The number of characters are less than 3"],
    maxLength: [20, "The number of characters are greater than 20"],
  },
  about: String,
  profilePic: String,
  dateOfBirth: {
    type: Date,
    required: [true, "Please enter the DOB"],
  },
  countryOfResidence: {
    type: String,
    required: [true, "Please enter the country of residence"],
  },
  height: Number,
  weight: Number,
});

module.exports = mongoose.model("user", userSchema);
