const User = require("../models/user");

// Returns the list of all users from DB
const getAllUsers = async (req, res) => {
  try {
    // Fetch the list of users from DB
    const listOfUsers = await User.find();

    // Return the data
    res
      .status(200)
      .json({ ok: true, count: listOfUsers.length, data: listOfUsers });
  } catch (err) {
    // Return the error
    res.status(500).json({ ok: false, error: err });
  }
};

// Adds a new user to DB
const addUser = (req, res) => {
  res.status(200).json(req.body);
};

// Get a single user using their  userId
const getUser = (req, res) => {
  res.status(200).send(`User with ${req.params.userId}`);
};

// Delete a single user using their  userId
const deleteUser = (req, res) => {
  res.status(200).send(`Delete the user ${req.params.userId}`);
};

// Edit a user using their  userId
const editUser = (req, res) => {
  res.status(200).send(`Edit the user ${req.params.userId}`);
};

module.exports = { getAllUsers, addUser, getUser, deleteUser, editUser };
