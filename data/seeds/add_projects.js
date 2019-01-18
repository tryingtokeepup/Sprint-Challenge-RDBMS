exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "React App w/e Jonathan",
          description:
            "Build a functioning webapp with Jon for his band, practicing what we've done.",
          complete: false
        },
        {
          name: "Deploy on Netlify",
          description:
            "Once web app is built, we need to deploy it on netlify.",
          complete: false
        },
        {
          name: "Deploy backend with Heroku",
          description:
            "Once the front-end is done, let's go and put the backend on Heroku. Optionaly, AWS, Google, or somewhere else",
          complete: false
        }
      ]);
    });
};
