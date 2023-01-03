const express = require("express");

const app = express();

// Server Setup
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT on  ${PORT}`);
});
