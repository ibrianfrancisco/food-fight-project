var request = require('request');
var yelp = require('../../config/yelp');
module.exports = {
  search: search
}
function search(req, res) {
  var term = req.body.term;
  yelp.search({ term: term, location: req.body.location, limit: 50 })
  .then(function (data) {
    var jsonBussObj = JSON.parse(data); // Parse JSON string to JSON Object
    console.log(jsonBussObj);
    res.render('show', {jsonBussObj, user: req.user});
  })
  .catch(function (err) {
    console.error('error', err);
  });
}

