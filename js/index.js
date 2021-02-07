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