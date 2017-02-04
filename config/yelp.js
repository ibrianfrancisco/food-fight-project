var Yelp = require('yelp-api-v3');

var yelp = new Yelp({
  app_id: process.env.APP_ID,
  app_secret: process.env.APP_SECRET
});

//------------- How to use Yelp's documentation -------------//

// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md
// yelp.search({term: 'food', location: '90210', price: '1,2,3', limit: 10})
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (err) {
//     console.error(err);
// });

// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search-phone.md
// yelp.phoneSearch({phone: '+14159083801'})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/transactions-search.md
// yelp.transactionSearch('delivery', {location: 'Boston'})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id.md
// yelp.business('yuko-kitchen-los-angeles')
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id-reviews.md
// yelp.reviews('yuko-kitchen-los-angeles')
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/autocomplete.md
// yelp.autocomplete({text: 'Pizz', latitude: 40.71,longitude: 74.00}, callback)
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // callbacks
// yelp.search({term: 'food', location: '90210', limit: 10}, function(err, data) {
//     if (err) {
//         return console.log(error);
//     }
//     console.log(data);
// });

module.exports = yelp;
