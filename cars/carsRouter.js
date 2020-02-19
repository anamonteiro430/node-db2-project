const express = require('express');

const router = express.Router();

//database access using knex
const db = require('../data/dbConfig.js');

router.get('/', (req, res) => {
	db.select('*')
		//db('cars)
		.from('cars')
		.then(cars => {
			res.status(200).json(cars);
		})
		.catch(err => {
			console.log(err);
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	console.log(id);
	db('cars')
		.where({ id })
		.first()
		.then(cars => {
			res.status(200).json(cars);
		})
		.catch(err => {
			console.log(err);
		});
});

router.post('/', (req, res) => {
	const body = req.body;
	console.log('body', body);

	db('cars')
		.insert(req.body, 'id')
		.then(ids => {
			return getById(ids[0]).then(inserted => {
				res.status(201).json(inserted);
			});
		})
		.catch(error => {
			console.log(error);

			res.status(500).json({ error: 'failed to add the account' });
		});
});

module.exports = router;
