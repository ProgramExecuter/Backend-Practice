const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  addUser,
  getUser,
  deleteUser,
  editUser,
} = require("../controllers/user");

// Get all the users in DB
router.get("/", getAllUsers);

// Create new user and save in DB
router.post("/", addUser);

// Get a particular user
router.get("/:userId", getUser);

// Delete a particular user
router.delete("/:userId", deleteUser);

// Edit a particular user
router.patch("/:userId", editUser);

module.exports = router;
