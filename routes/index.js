var express = require('express');
var router = express.Router();
var yelp = require('../config/yelp');
const rootURL = 'https://api.yelp.com/';


/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index');
});

router.get('/', function(req, res, next) {
  yelp.search({term: 'euro cafe', location: 'Irvine, CA', price: '1,2,3', limit: 1})
  .then(function (data) {
    console.log(data);
    res.json(data);
  })
  .catch(function (err) {
      console.error(err);
  });
});

module.exports = router;
