const express = require('express');
const fs = require("fs");

const router = express.Router();

const FILE_NAME = "files/waste.txt";

/* GET home page. */
router.get('/', function(req, res, next) {
	try {
		fs.readFile(FILE_NAME, (e, data) => {
			if (e) throw e;

			res.render('index', { data });
		});
	} catch(e) {
		console.error(`Error occured while readig file: ${FILE_NAME}`, e);
		res.render('index', { error: 'Unable to read file' });
	}
});

router.post("/", (req, res) => {
	const { data } = req.body;
	console.log(data);
	try {
		if (!data) throw new Error("No data found.");

		fs.writeFile(FILE_NAME, data, (e) => {
			if (e) throw e;

			// res.render("index", { data, isSaved: true });
			res.json({ saved: true });
		});

	} catch(e) {
		console.error(`Error occured while writing file: ${FILE_NAME}`, e);
		res.render('index', { error: 'Unable to write file' });
	}
});

module.exports = router;
