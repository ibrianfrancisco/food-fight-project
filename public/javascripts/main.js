var images = ['1.jpg', '2.jpg', '3.jpg', '5.jpg', '7.jpg', 
	'9.jpg', '11.jpg', '12.jpg', '13.jpg'];

$(function() {
	$('#main-wrapper').css({'background-image': 'url(/assets/images/' 
		+ images[Math.floor(Math.random() * images.length)] + ')'});
});