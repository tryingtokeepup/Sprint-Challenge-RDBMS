// set up our dependencies
const express = require("express");

// now, activate said dependencies
const server = express();

// we got our helper functions in db.js -> link them here so we can use those babies!
const db = require("./data/db.js"); // Common JS

server.use(express.json());

// alright, let's see if our friend is alive.
server.get("/", (req, res) => {
  res.send("Okay, server is alive. I'm so ... relieved.");
});

///////// ========= PROJECT ENDPOINTS =========/////////

server.get("/projects", (req, res) => {
  db.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

server.post("/projects", (req, res) => {
  const { name, description, complete } = req.body;

  if (!name || !description) {
    res
      .status(404)
      .json(
        "Oiii now, don't forget your name, description, and the completed tag!"
      );
  }
  {
    db.addProject({ name, description, complete })
      .then(project => {
        res.status(200).send(project);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
});

///////// ========= ACTION ENDPOINTS =========/////////

server.get("/actions", (req, res) => {
  db.getActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

server.post("/actions", (req, res) => {
  const { name, description, notes, project_id, complete } = req.body;

  if (!name || !description || !project_id) {
    res
      .status(404)
      .json(
        "Oiii now, don't forget your name and description, and the project id!"
      );
  }
  {
    db.addAction({ name, description, notes, project_id, complete })
      .then(action => {
        res.status(200).send(action);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
});

///////// ========= PROJECT and ACTION ENDPOINTS =========/////////

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  db.getProject(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => res.status(500).json(err));
});

server.listen(8008, () => console.log("server up on 8008 - I'm home."));
