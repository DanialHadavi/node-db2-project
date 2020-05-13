exports.up = function (knex) {
  return knex.schema.createTable("car-dealer", (tbl) => {
    tbl.increments();
    tbl.string("VIN", 255).notNullable().unique();
    tbl.string("make", 255).notNullable();
    tbl.string("model", 255).notNullable();
    tbl.string("mileage", 255).notNullable();
    tbl.string("transmission", 255);
    tbl.string("title", 255);

    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("car-dealer");
};
