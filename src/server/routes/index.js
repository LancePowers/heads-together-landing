var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/send-mail', function (req, res, next) {

	var sendgrid = require('sendgrid')('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');

	sendgrid.send({
		to: 'lance@orderlyhealth.com',
		from: req.body.email,
		subject: 'New message from ' + req.body.name,
		text: req.body.description
	}, function (err, json) {
		if (err) {
			res.send(err);
		}
		res.send(json);
		console.log(req.body, json);
	});
});
module.exports = router;
