const express = require("express");
const userRoutes = require("./routes/user.js");

const app = express();

// Middlewares
app.use(express.json());

// Passing the request to the route file
app.use("/users", userRoutes);

//
// Environment Setup
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
