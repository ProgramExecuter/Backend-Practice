const jwt = require("jsonwebtoken");

///////
// User Login + Return JWT
///////
const login = (req, res) => {
  // Sign the token, and make it expire in 1 hour
  const token = jwt.sign(
    { username: req.body.username, password: req.body.password },
    process.env.SECRET,
    { expiresIn: "1h" }
  );

  // Return the token
  return res.status(200).json({ token });
};

///////
// Check the logged-in user's info
///////
const loginInfo = (req, res) => {
  let data = {};
  let status = 200;

  // Get the token
  const header = req.headers["authorization"];

  // Token not found
  if (!header) {
    status = 404;
    data = { error: "No JWT found" };
  }
  // Found the token
  else {
    const token = header.split(" ")[1];
    status = 200;

    try {
      const userInfo = jwt.verify(token, process.env.SECRET);

      // Valid Token
      data = { userLoggedIn: userInfo };
    } catch (e) {
      // Invalid Token
      data = { error: "Not a valid JWT" };
    }
  }

  // Return the user's info
  return res.status(status).json(data);
};

module.exports = { login, loginInfo };
