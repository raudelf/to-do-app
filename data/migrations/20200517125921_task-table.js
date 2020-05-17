
exports.up = function(knex) {
    return (
        knex.schema.createTable('todos', tbl => {
            tbl.increments('id');
            tbl.string('task', 255)
                .notNullable();
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false);
        })
    )
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todos');
};
