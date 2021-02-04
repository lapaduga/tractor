if (window.location.pathname === 'https://lapaduga.github.io/tractor/index.html') {
	if (localStorage.getItem('checked') === 'false') {
		window.location.href = 'https://lapaduga.github.io/tractor/splash.html';
	}
}
document.querySelector('.splash-main__label').onclick = () => {
	if (document.querySelector('.splash-main__checkbox').checked === true) {
		localStorage.setItem('checked', 'true');
	}
	if (document.querySelector('.splash-main__checkbox').checked === false) {
		localStorage.setItem('checked', 'false');
	}
}