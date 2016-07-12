var express = require('express');
var router = express.Router();
var fs = require("fs");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    var fileExtension = file.originalname.split(".")[1];
    var filename = Date.now() + "." + fileExtension;
    cb(null, filename );
  }
});

var upload = multer({storage: storage});

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
		category: req.body.category,
		description: req.body.description,
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

router.post('/upload', upload.array("uploads[]", 12), function(req, res, next) {
	res.send(req.files[0]);
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