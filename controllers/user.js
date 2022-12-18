const User = require("../models/user");

// Returns the list of all users from DB
const getAllUsers = (req, res) => {
  res.send("Hello All Users");
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
