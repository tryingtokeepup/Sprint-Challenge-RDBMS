exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    // need a primary key, as always
    // many to one relationship, so I WILL need a foreign key
    tbl.increments();
    // need a name column, unique
    tbl
      .string("name", 255)
      .notNullable()
      .unique();
    // generic discription column, telling us what must be done
    tbl.text("description").notNullable();
    // a foreign key that links to the projects table, linking to the primary key, the id column
    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects");
    // a flag to tell us whether or not something is complete!

    tbl.boolean("complete").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
