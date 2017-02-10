// jQuery
$(document).ready(function(){
  $('#cards').on('click', 'div.col.s12.m4', function(evt) {
    var bizId = $(this).find('a').attr('biz-id');
    $(this).remove();
    $.ajax({
      url: '/api/businesses/delete/' + bizId,
      type: "DELETE",
      data: bizId,
      success: function(data, textStatus, jqXHR) {
        console.log(textStatus);
      },
      error: function (jqXHR, textStatus, error) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(error);
      }
    });
  });
});


// $("#delete-user").bind("before.jstree", function (e, data) {
//   if(data.func === "remove" && !confirm("Are you sure you want to delete?")) {
//     e.stopImmediatePropagation();
//     return false;
//   }
// })
