var request = require('request');
var yelp = require('../../config/yelp');

module.exports = {
  search: search
}

function search(req, res) {
  var term = req.body.term;
  var location = req.body.location;
  var radius = req.body.radius;
  var price = req.body.price;
  yelp.search({ term: term, location: location, radius: radius, price: price, categories: 'food,bars,restaurants', limit: 50 })
  .then(function (data) {
    var jsonBussObj = JSON.parse(data); // Parse JSON string to JSON Object
    res.render('show', {jsonBussObj, user: req.user, term, location });
  })
  .catch(function (err) {
    console.error('error', err);
  });
}
