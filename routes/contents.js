var express = require('express');
var router = express.Router();

var Content = require('../models/content');

router.get('/', function(req, res, next) {
	Content.find()
		.exec(function(err, docs) {
			if (err) {
				return res.status(404).json({
					title: 'An error occured',
					error: err
				});
			}
			res.status(200).json({
				message: 'Success',
				obj: docs
			});
		});
});

router.post('/', function(req, res, next) {
	var content = new Content({
		item: req.body.item,
		price: req.body.price,
		url: req.body.url
	});
	content.save(function(err, result) {
		if(err) {
			return res.status(404).json({
				title: 'An error occurred',
				error: err
			});
		}
		res.status(201).json({
			message: 'Saved content',
			obj: result
		});
	});
});

router.delete('/:id', function(req, res, next) {
    Content.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No product found',
                error: {message: 'Product could not be found'}
            });
        }
        doc.remove(function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
    });
});

module.exports = router;