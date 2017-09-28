function main(){
	
	$('.jumbotron').hide();
	$('.jumbotron').fadeIn(1000);
	$('.subAlbums').hide();
	$('.subAlbums').fadeIn(1000);
	$('#button').on('click',function(){
		
		$('html, body').animate({
			scrollTop: $('.subAlbums').offset().top}, 800, 'linear');	
	});

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

}

$(document).ready(main);


