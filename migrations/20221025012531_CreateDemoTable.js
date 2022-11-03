exports.up = function (knex, Promise) {
    return knex.schema.createTable("demoTable", (table) => {
        table.increments("id").primary();
        table.string("exampleColumn").notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("demoTable");
};
