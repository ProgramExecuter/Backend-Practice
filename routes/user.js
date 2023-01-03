const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createNewUser,
} = require("../controllers/user");

// Route to get all users
router.get("/", getUsers);

// Get single user detail
router.get("/:userId", getSingleUser);

// Create new user
router.post("/", createNewUser);

module.exports = router;
