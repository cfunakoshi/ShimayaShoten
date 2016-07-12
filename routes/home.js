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

var Home = require('../models/home');

router.get('/', function(req, res, next) {
	Home.find()
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

router.post('/', upload.array("uploads[]", 12), function(req, res, next) {
	var pic = new Home({
		url: req.files[0].filename
	});
	pic.save(function(err, result) {
		if(err) {
			return res.status(404).json({
				title: 'An error occurred',
				error: err
			});
		}
		res.status(200).json({
			message: 'Saved picture',
			obj: result
		});
	});
});

router.delete('/:id', function(req, res, next) {
    Home.findById(req.params.id, function(err, doc) {
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