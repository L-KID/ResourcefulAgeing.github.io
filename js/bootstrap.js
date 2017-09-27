function main(){
	
	$('.jumbotron').hide();
	$('.jumbotron').fadeIn(1000);
	$('.subAlbums').hide();
	$('.subAlbums').fadeIn(1000);

}

$(document).ready(main);

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

