window.onload = () => {
	// first visit (local storage)
	if(document.querySelector('.splash-main__checkbox').checked == true){
		localStorage.setItem('checked', '1');
	} 
	if(document.querySelector('.splash-main__checkbox').checked == false){
		localStorage.setItem('checked', '0');
	}
	document.querySelector('.splash-main__label').onclick = () => {
		if(document.querySelector('.splash-main__checkbox').checked == true){
			localStorage.setItem('checked', '1');
		} 
		if(document.querySelector('.splash-main__checkbox').checked == false){
			localStorage.setItem('checked', '0');
		}
	}
}