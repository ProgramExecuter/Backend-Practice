const getUsers = (req, res, next) => {
  return res.send("Get all users");
};

const getSingleUser = (req, res) => {
  return res.send(`Get a single user ${req.params.userId}`);
};

const createNewUser = (req, res) => {
  return res.send("New User Route");
};

module.exports = { getUsers, getSingleUser, createNewUser };
