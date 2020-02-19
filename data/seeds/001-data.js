exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('cars').insert([
				{ vin: '3243242343243', make: 'rowValue1', model: 'dasd' },
				{ vin: '2313546576576', make: 'rowValue2', model: 'dasd' },
				{ vin: '1307987872382', make: 'rowValue3', model: 'dasd' }
			]);
		});
};
