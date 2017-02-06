var request = require('request');
var yelp = require('../config/yelp');
const rootURL = 'https://api.yelp.com/';

module.exports = {
  search: search,
  userDetails: userDetails
}

function search(req, res) {
  var term = req.body.term;
  var location = req.body.location;
  yelp.search({ term: 'food', location: 'Irvine, Ca', limit: 1 })
  .then(function (data) {
    var jsonString = JSON.stringify(data); // convert data to JSON string
    var jsonBussObj = JSON.parse(jsonString); // Parse JSON string to JSON Object
    res.render('search-results', {jsonBussObj});
  })
  .catch(function (err) {
    console.error(err);
  });
}

function userDetails(req, res) {
  res.render('index', {title: 'Express'});
}
