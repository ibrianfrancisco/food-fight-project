var Yelp = require('yelp-api-v3');

var yelp = new Yelp({
  app_id: process.env.APP_ID,
  app_secret: process.env.APP_SECRET
});

module.exports = yelp;
