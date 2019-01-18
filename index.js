// set up our dependencies
const express = require("express");

// now, activate said dependencies
const server = express();

// we got our helper functions in db.js -> link them here so we can use those babies!
const db = require("./data/db.js"); // Common JS

server.use(express.json());

// alright, let's see if our friend is alive.
server.get("/", (req, res) => {
  res.send("Okay, server is alive.");
});

server.listen(8008, () => console.log("server up on 8008 - I'm home."));
