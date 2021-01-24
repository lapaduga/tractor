$(document).ready(function () {
	const scrollBack = document.querySelector('#scrollback');


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
		if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
			scrollBack.classList.add('visible');
		} else{
			scrollBack.classList.remove('visible');
		}
	}


	// scrollback
	$(scrollBack).click(function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
		return false;
	})

	
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


	// partners tabs
	$('#tab-heading-1').on('click', function () {
		$('#tab-heading-2').removeClass('inactive');
		$('#tab-heading-1').addClass('inactive');
		$('#tab_02').fadeOut(0);
		$('#tab_01').fadeIn(300);
		$('#tab_02').removeClass('absolute');
		$('.partners__slider-1').slick('refresh');
	});
	$('#tab-heading-2').on('click', function () {
		$('#tab-heading-1').removeClass('inactive');
		$('#tab-heading-2').addClass('inactive');
		$('#tab_01').fadeOut(0);
		$('#tab_02').fadeIn(300);
		$('#tab_02').removeClass('absolute');
		$('.partners__slider-2').slick('refresh');
	});

	// partners slider
	$('.partners__slider-1').slick({
		arrows: false,
		slidesToShow: 5,
		autoplay: true,
		responsive:[
			{
				breakpoint: 1500,
				settings:{
					slidesToShow: 4
				}
			},{
				breakpoint: 1500,
				settings:{
					slidesToShow: 3
				}
			},{
				breakpoint: 1201,
				settings:{
					slidesToShow: 2
				}
			},{
				breakpoint: 600,
				settings:{
					slidesToShow: 1
				}
			}
		]
	});
	$('.partners__slider-2').slick({
		arrows: false,
		slidesToShow: 5,
		autoplay: true,
		responsive:[
			{
				breakpoint: 1500,
				settings:{
					slidesToShow: 4
				}
			},{
				breakpoint: 1500,
				settings:{
					slidesToShow: 3
				}
			},{
				breakpoint: 1201,
				settings:{
					slidesToShow: 2
				}
			},{
				breakpoint: 600,
				settings:{
					slidesToShow: 1
				}
			}
		]
	});
});