const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
	try {
		res.status(200).send({
			title: "Node Express API",
			version: "0.0.1",
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
