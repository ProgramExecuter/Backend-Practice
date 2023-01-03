const express = require("express");
const { nextTick } = require("process");

// Import Routes
const userRoutes = require("./routes/user");

const app = express();

// Midddleware
app.use(express.json());

// Attach Routes
app.use("/user", userRoutes);

// Server Setup
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT on ${PORT}`);
});
