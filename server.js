const express = require("express");
const dotenv = require("dotenv");
const loginRoutes = require("./routes/login");

const app = express();

// Middleware
app.use(express.json());
dotenv.config({ path: "./config/.env" });

// Add the routes
app.use("/", loginRoutes);

/////////
// Server Setup
/////////
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
