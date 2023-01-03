const router = require("express").Router();
const { login, loginInfo } = require("../controllers/login.js");

router.post("/login", login);
router.get("/loginInfo", loginInfo);

module.exports = router;
