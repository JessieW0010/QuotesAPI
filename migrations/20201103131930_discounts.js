
exports.up = function(knex) {
  return knex.schema.createTable('discounts', function (table) {
    table.increments('id');
    table.enu('type', ["PERCENT_OFF", "PERCENT_BY_VOL", "PERCENT_BY_VAL", "PERCENT_INCREASING"]).notNullable();
    table.jsonb('price_rules').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('discounts');
};
