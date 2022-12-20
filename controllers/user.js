const User = require("../models/user");

// Returns the list of all users from DB
const getAllUsers = async (req, res) => {
  try {
    // Fetch the list of users from DB
    const listOfUsers = await User.find();

    // Return the data
    return res
      .status(200)
      .json({ ok: true, count: listOfUsers.length, data: listOfUsers });
  } catch (err) {
    // Return the error
    return res.status(500).json({ ok: false, error: err });
  }
};

// Adds a new user to DB
const addUser = async (req, res) => {
  try {
    // Create the new user using the User model
    const newUser = new User(req.body);

    // Save the new User in DB
    await newUser.save();

    // Return the result
    return res.status(201).json({ ok: true, createdUser: newUser });
  } catch (err) {
    // Return the error encountered
    return res.status(500).json({ ok: false, error: err });
  }
};

// Get a single user using their 'username'
const getUser = async (req, res) => {
  try {
    const username = req.params.username;

    // Find the user with 'username'
    const foundUser = await User.find({ username });

    // User not found
    if (foundUser.length === 0)
      return res
        .status(404)
        .json({ ok: false, error: { message: "User not found" } });

    // Return the result(data)
    return res.status(200).json({ ok: true, user: foundUser[0] });
  } catch (err) {
    // Return the error encountered
    return res.status(500).json({ ok: false, error: err });
  }
};

// Delete a single user using their  userId
const deleteUser = async (req, res) => {
  const username = req.params.username;

  // Find the user by 'username' and delete from DB
  const deletedUser = await User.findOneAndDelete({ username });

  // User not found
  if (!deletedUser)
    return res
      .status(404)
      .json({ ok: false, error: { message: "User not found" } });

  // Return the response after deleting
  return res.status(200).json({ ok: true, deletedUser });
};

// Edit a user using their  userId
const editUser = (req, res) => {
  res.status(200).send(`Edit the user ${req.params.userId}`);
};

module.exports = { getAllUsers, addUser, getUser, deleteUser, editUser };
