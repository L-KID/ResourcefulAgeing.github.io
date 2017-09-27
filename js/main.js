function main(){
	var $jumbotron = $('.jumbotron');
	alert('$jumbotron');
	$('.jumbotron').hide();
	$('.jumbotron').fadeIn(1000);

}

$(document).ready(main);