var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
// Create application/x-www-form-urlencoded parser
router.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

router.use(express.json());
router.use(
	express.urlencoded({
		extended: true,
	})
);

/* get method for fetch all contestcategory. */
router.get('/', function (req, res, next) {
	var sql = 'SELECT * FROM contest';
	db.query(sql, function (err, rows, fields) {
		if (err) {
			res.status(500).send({error: err});
			console.log(err);
		}
		res.json(rows);
	});
});

/* get method for fetch all active contest. */
router.get('/active', function (req, res, next) {
	var sql = "SELECT * FROM contest WHERE status='1'";
	db.query(sql, function (err, rows, fields) {
		if (err) {
			res.status(500).send({error: err});
			console.log(err);
		}
		res.json(rows);
	});
});

/* get method for fetch all active contest. */
router.get('/byId', function (req, res, next) {
	var sql = `SELECT * FROM contest WHERE id=${req.query.id}`;
	db.query(sql, function (err, rows, fields) {
		if (err) {
			res.status(500).send({error: err});
			console.log(err);
		}
		res.json(rows);
	});
});

/* get method for fetch all active contest. */
/* http://localhost:3000/contest/limit?limit=10&start=10 */
router.get('/limit', function (req, res, next) {
	var sql = `SELECT * FROM contest WHERE status='1' LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
	db.query(sql, function (err, rows, fields) {
		if (err) {
			res.status(500).send({error: err});
			console.log(err);
		}
		res.json(rows);
	});
});

/* get method for fetch all free and active contest. */
/* http://localhost:3000/contest/contestfree?limit=10&start=10 */
router.get('/contestfree', function (req, res, next) {
	var sql = `SELECT * FROM contest WHERE type='Free Photo Contests' AND status='1' LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
	db.query(sql, function (err, rows, fields) {
		// console.log(sql);
		if (err) {
			res.status(500).send({error: err});
			console.log(err);
		}
		res.json(rows);
	});
});

/* get method for fetch all free and active contest. */
/* http://localhost:3000/contest/primium?limit=10&start=10 */
router.get('/premium', function (req, res, next) {
	var sql = `SELECT * FROM contest WHERE type='Premium Contests' AND status='1' LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
	db.query(sql, function (err, rows, fields) {
		// console.log(sql);
		if (err) {
			res.status(500).send({error: err});
			console.log(err);
		}
		res.json(rows);
	});
});

/* get method for fetch all free and active contest. */
/* http://localhost:3000/contest/sponsored?limit=10&start=10 */
router.get('/sponsored', function (req, res, next) {
	var sql = `SELECT * FROM contest WHERE type='Sponsored' AND status='1' LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
	db.query(sql, function (err, rows, fields) {
		// console.log(sql);
		if (err) {
			res.status(500).send({error: err});
			console.log(err);
		}
		res.json(rows);
	});
});

module.exports = router;