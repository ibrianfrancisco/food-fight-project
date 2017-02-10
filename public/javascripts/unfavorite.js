$(document).ready(function(){
  $('#cards').on('click', 'div.card a', function(evt) {
    var bizId = $(this).attr('biz-id');
    $(this).closest('div.card').remove();
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
