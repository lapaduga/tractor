if ((window.location.pathname === '/') || (window.location.pathname === 'index.html/')) {
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
})