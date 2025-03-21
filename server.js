("use strict");
/*
const express = require("express");
const express = require("require");
// Import required modules
const app = express();
const path = require("path");
const port = 1776;
//serves the front-end content in the public directory
app.use("", express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const PORT = process.env.PORT || 1776;
app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
  console.log(`Press CTRL + C to stop server`);
});
