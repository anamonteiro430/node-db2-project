exports.up = function(knex) {
	return knex.schema.createTable('cars', tbl => {
		tbl.increments(); //primary key

		tbl
			.string('vin', 150)
			.notNullable()
			.index();

		tbl.string('make', 256).notNullable();

		tbl.string('model', 256).notNullable();

		tbl.string('mileage', 256);

		tbl.string('transmissionType', 150);

		tbl.string('transmissionStatus', 150);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('cars');
};
