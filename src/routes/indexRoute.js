const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
	try {
		res.status(200).send({
			title: "GAP API",
			version: "1.0",
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
