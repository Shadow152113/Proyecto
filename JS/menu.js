$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('headerfijo');
		} else {
			$('header').removeClass('headerfijo');
		}
	});
 
});

