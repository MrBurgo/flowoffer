
exports.up = function(knex, Promise) {
  return knex.schema.createTable('offers', (table) => {
    table.increments()
    table.varchar('name', 255)
    table.varchar('password', 255)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('offers  ')
};
