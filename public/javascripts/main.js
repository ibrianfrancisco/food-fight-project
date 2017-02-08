var images = ['1-2.jpg', '2-2.jpg', '3-2.jpg', '5-2.jpg', '7-2.jpg', 
	'9-2.jpg', '11-2.jpg', '12-2.jpg', '13-2.jpg'];

$(function() {
	$('#main-wrapper').css({'background-image': 'url(/assets/images/' 
		+ images[Math.floor(Math.random() * images.length)] + ')'});
});