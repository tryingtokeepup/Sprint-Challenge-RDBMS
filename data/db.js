const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  getProjects,
  addProject,
  getActions,
  addAction,
  getProject
};

function getProjects() {
  return db("projects");
}

function getActions() {
  return db("actions");
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}

function addAction(action) {
  return db("actions")
    .insert(action)
    .then(ids => ({ id: ids[0] }));
}

// SPECIAL - GET PROJECT BY ID

function getProject(id) {
  const project = db("projects").where("id", id);

  const actions = db("actions").where("project_id", id);

  return Promise.all([project, actions]).then(results => {
    // deconstruct so we can mold it into shape
    let [project, actions] = results;
    let result = {
      ...project[0],
      actions
      //   action_name: actions.name,
      //   action_id: actions.id,
      //   action_description: actions.descriptions,
      //   action_completed: actions.complete
    };
    return result;
  });

  // old solution - returns bad, deformed object
  // .select(
  //   "projects.id as projectid",
  //   "projects.name as project",
  //   "projects.description as description",
  // "actions.name as action",
  // "actions.id as actionid",
  // "actions.description as action description",
  // "actions.complete as completed"
  // )

  // .from("projects")

  // .innerJoin("actions", "projects.id", "=", "actions.project_id")
  // .where("projects.id", id);
}
