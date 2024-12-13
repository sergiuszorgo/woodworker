const btns = document.querySelectorAll('.build-btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const telo = document.getElementById('body');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
			telo.classList.add('no-scroll');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		telo.classList.remove('no-scroll');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});