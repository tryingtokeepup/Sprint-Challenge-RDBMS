exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    // primary key <- will link this to foreign key in actions
    tbl.increments(); // defaults to a column named id
    // name column - unique and needs to be there!
    tbl
      .string("name", 255)
      .notNullable()
      .unique();
    // description column
    tbl.text("description").notNullable();
    // a flag to tell us whether or not something is complete!
    tbl.text("complete");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
