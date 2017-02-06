var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dontpanic');
mongoose.Promise = Promise;


var db = mongoose.connection;

// CARIE START
// mongoose.connect(process.env.DATABASE_URL);

// database connection event
// db.once('open', function () {
//   console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
// });
// CARIE END

db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
})

db.on('error', function(err) {
  console.error(`Database error:\n${err}`);
})


// Tried getting us all on the same database. Didn't work  - Brian

// var mongoose = require('mongoose');
// mongoose.Promise = Promise;

// mongoose.connect(process.env.DATABASE_URL);

// // database connection event
// mongoose.connection.once('open', function () {
//   console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
// })

// mongoose.connection.on('error', function(err) {
//   console.error(`Database error:\n${err}`);
// })
