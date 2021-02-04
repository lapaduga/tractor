/* if ((window.location.pathname === '/') || (window.location.pathname === 'index.html/')) {
	if (localStorage.getItem('checked') === 'false') {
		window.location.href = window.location.hostname + '/splash.html';
	}
}
document.addEventListener("DOMContentLoaded", function (event) {
	if (localStorage.getItem('checked') === 'true') {
		document.getElementById('noshow').checked = true;
	} else {
		document.getElementById('noshow').checked = false;
	}
}) */

if (localStorage.getItem('checked') === 'true') {
	document.querySelector('.splash-main__checkbox').checked = true;
	window.location.href = 'https://lapaduga.github.io/tractor/home.html';
}
if (localStorage.getItem('checked') === 'false') {
	document.querySelector('.splash-main__checkbox').checked = false;
}
document.querySelector('.splash-main__label').onclick = () => {
	if (document.querySelector('.splash-main__checkbox').checked === true) {
		localStorage.setItem('checked', 'true');
	}
	if (document.querySelector('.splash-main__checkbox').checked === false) {
		localStorage.setItem('checked', 'false');
	}
}