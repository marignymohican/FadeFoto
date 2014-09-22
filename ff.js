$(document).ready(function(){
	// set up the initial fotos
	$('.fadefoto').each(function(foto){
		$(this)
			.append($('<img />').attr('src', $(this).data('foto-under')).addClass('foto-under'))
			.append($('<img />').attr('src', $(this).data('foto-over')).addClass('foto-over'))
	});

	$('.fadefoto').slider({
		slide: fadefoto,
		change: fadefoto
	});

	function fadefoto(){
		opac = $(this).slider('value') / 100;
		$(this).find('.foto-over').css('opacity', opac);
	}
	
	if ( $(window).width() < 700 ){
		$('.fadefoto').wrap('<div class="ffwrapper" />');
	}

});




