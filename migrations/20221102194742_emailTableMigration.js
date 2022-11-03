exports.up = function (knex, Promise) {
    return knex.schema.createTable("emailTable", (table) => {
        table.increments("id").primary();
        table.string("userEmail").notNullable();
        table.string("crushEmail").notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("emailTable");
};
