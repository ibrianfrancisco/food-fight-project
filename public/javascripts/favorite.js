// var Business = require('../../models/business');
// var User = require('../../models/user');
// jQuery
$(document).ready(function(){
  $('#favorite').click(function(e) {
    e.preventDefault();
    console.log($('.city').html())
    console.log($('.name').html())
    // console.log(req.user.id)

    //check to see if business is already in collection or not!

//     var obj = {
//       name: $('.name').html(),
//       city: $('.name').html()
//     }

//     $.ajax({
//       url : "mongodb://carliesachiko:coding247@ds157247.mlab.com:57247/wdi-40",
//       type: "POST", // or GET
//       data: obj,
//       success: function(data, textStatus, jqXHR) {
//         console.log(data);
//         addBiz(data);
//         // addFav(data);
//       },
//       error: function (jqXHR, textStatus, error) {
//         console.log(jqXHR);
//         console.log(textStatus);
//         console.log(error);
//       }
//     });
//   });
})

// function addBiz(biz) {
//   console.log(biz);
//   var newBiz = new Business ({
//     name: biz.name,
//     city: biz.city
//     // url: String,
//     // categories: [],
//     // image_url: String,
//     // location: {
//     //   city: String,
//     //   country: String,
//     //   address1: String,
//     //   state: String,
//     //   zipcode: Number
//     // }
//   });
//   newBiz.save(function(err) {
//     if (err) return cb(err);
//     return cb(null, newBiz);
//   });

  // req.user favorites.push(newBiz._id);
});

