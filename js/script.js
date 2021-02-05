import Select from "./select.js"

	// teams tabs
	$('.to-team').on('click', (e) => {
		$('#coaches').fadeOut(0);
		$('#team').fadeIn(300);
	});
	$('.to-coaches').on('click', (e) => {
		$('#team').fadeOut(0);
		$('#coaches').fadeIn(300);
	});

$(document).ready(function () {
	const scrollBack = document.querySelector('#scrollback');
	const form = document.getElementById('contacts__form');
	const alert = document.querySelector('.contacts__alert');

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
				$(".underline").addClass('lift');
				$(".vi-underline").addClass('lift');
			} else {
				document.getElementById("header__body").style.height = "140px";
				document.getElementById("header__logo").classList.remove('shrink');
				$(".underline").removeClass('lift');
				$(".vi-underline").removeClass('lift');
			}
		}
		if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
			scrollBack.classList.add('visible');
		} else {
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
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 1500,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 1201,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.partners__slider-2').slick({
		arrows: false,
		slidesToShow: 5,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 1500,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 1201,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// last-news slider
	$('.last-news__slider').slick({
		slidesToShow: 4,
		initialSlide: 1,
		infinite: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 993,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 501,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// media tabs
	$('#media__videos').fadeOut(0);
	$('#media__tab_1').on('click', function () {
		$('#media__tab_1').addClass('overline');
		$('#media__tab_2').removeClass('overline');
		$('#media__videos').fadeOut(0);
		$('#media__pics').fadeIn(300);
	});
	$('#media__tab_2').on('click', function () {
		$('#media__tab_2').addClass('overline');
		$('#media__tab_1').removeClass('overline');
		$('#media__pics').fadeOut(0);
		$('#media__videos').fadeIn(300);
	});

	// select
	const selectElements = document.querySelectorAll('[data-custom]');
	selectElements.forEach(selectElement => {
		new Select(selectElement);
	});

	// contacts form validation
	form.addEventListener('submit', formSend);
	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			document.querySelector('.popup').classList.add('sent');
			setTimeout (() => {
				$('.popup').removeClass('sent');
			}, 5000);
			alert.classList.remove('active');
			form.reset();
		} else {
			alert.classList.add('active');
		}
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
});