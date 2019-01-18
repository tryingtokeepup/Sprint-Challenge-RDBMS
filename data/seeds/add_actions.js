exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          name: "create React App",
          description:
            "Use create-react-app to quickly build a boiler plate react-app. Add dependencies and remove clutter.",
          notes:
            "Might want to keep the extra files for testing to learn how to test.",
          project_id: 1,
          complete: "false"
        },
        {
          name: "build out Redux actions and store",
          description:
            "For now, we should keep using redux until it becomes 2nd nature. React Router for routes is also a good idea!",
          notes:
            "We should keep it simple, though. One actions file, one reducer, and don't clutter it with unnecessary conditions. That killed me last time.",
          project_id: 1,
          complete: "false"
        },
        {
          name: "Build out our components hierarchy",
          description:
            "Figure out what is a view componenet vs stateful, and put them in the right directory. This is to keep confusing down on what SHOWS data on screen and what controls WHAT data will be presented. I might be messing up these terms, but for now, it should hold",
          notes:
            "I REALLY need to get better at lifecycle methods. Should test my abilities with a search bar and whatnot.",
          project_id: 1,
          complete: "false"
        }
      ]);
    });
};
