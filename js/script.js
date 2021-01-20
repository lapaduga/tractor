$(document).ready(function () {
	$('.header__burger').on('click', function () {
		$('.header__burger, .menu-board').toggleClass('active');
		$('body').toggleClass('lock');
	});
});