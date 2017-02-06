var express = require('express');
var router = express.Router();
var yelpCtrl = require('../controllers/yelp');


/* GET home page. */
router.get('/', yelpCtrl.userDetails);
router.get('/search', yelpCtrl.search);


module.exports = router;
