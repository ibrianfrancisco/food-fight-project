var request = require('request');
var yelp = require('../../config/yelp');
const rootURL = 'https://api.yelp.com/';

module.exports = {
  search: search,
  userDetails: userDetails
}

function search(req, res) {
  var term = req.body.term;
  yelp.search({ term: term, location: req.body.location })
  .then(function (data) {
    var jsonBussObj = JSON.parse(data); // Parse JSON string to JSON Object
    console.log(jsonBussObj);
    res.render('show', {jsonBussObj});
  })
  .catch(function (err) {
    console.error('error', err);
  });
}

function userDetails(req, res) {
  res.render('index', {title: 'Express'});
}
