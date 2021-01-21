$(document).ready(function () {

	// burger menu

	$('.header__burger').on('click', function () {
		$('.header__burger, .menu-board').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// map

	$('.footer__map-bar').on('click', function (){
		$('.footer__see').fadeOut(300);
	});
});