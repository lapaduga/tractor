$(document).ready(function () {
	// burger menu
	$('.header__burger').on('click', function () {
		$('.header__burger, .menu-board').toggleClass('active');
		$('body').toggleClass('lock');
	});


	//header height on scroll behaviour
	window.onscroll = function () { scrollFunction() };
	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			document.getElementById("header__body").style.background = "#070707";
		} else {
			document.getElementById("header__body").style.background = "transparent";
		}
		if (document.documentElement.clientWidth > 992) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("header__body").style.height = "80px";
				document.getElementById("header__logo").classList.add('shrink');
			} else {
				document.getElementById("header__body").style.height = "140px";
				document.getElementById("header__logo").classList.remove('shrink');
			}
		}
	}


	// map
	$('.footer__map-bar').on('click', function () {
		$('.footer__see').fadeOut(300);
	});


	// smooth scroll
	$("body").on('click', '[href*="#"]', function (e) {
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});
});