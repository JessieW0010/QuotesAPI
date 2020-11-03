
exports.up = function(knex) {
  return knex.schema.createTable('customer_discounts', function (table) {
    table.integer('customer_id');
    table.foreign('customer_id').references('customers.id');
    table.integer('discount_id');
    table.foreign('discount_id').references('discounts.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('customer_discounts');
};