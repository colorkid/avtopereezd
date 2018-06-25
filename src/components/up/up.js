$('.up-arrow').fadeOut(0);

$(function() {
 
	$(window).scroll(function() {
	 
	if($(this).scrollTop() > 750) {
		$('.up-arrow').fadeIn();
		} else {
		$('.up-arrow').fadeOut();
		}
	});
	 
	$('.up-arrow').click(function() {
		$('body,html').animate({scrollTop:0},500);
	});
 
});