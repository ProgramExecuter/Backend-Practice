const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.js");

const app = express();

//////////////
// Middlewares
app.use(express.json());
dotenv.config({ path: "config/.env" });

//////////////
// DB Connect
mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Passing the request to the route file
app.use("/users", userRoutes);

//////////////
// Environment Setup
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
