document.addEventListener('DOMContentLoaded', () => {
	altButton();
});
let count = 0;

const altButton = () => {
	const button = document.getElementById('btn');

	button.addEventListener('click', e => {
		count++;
		e.currentTarget.innerHTML = count;
	});
};
