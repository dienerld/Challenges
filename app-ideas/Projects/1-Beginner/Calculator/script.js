function app() {
	const display = document.querySelector('.display');

	function setDisplay(number) {
		display.innerHTML += number;
	}

	function signalDisplay(signal) {
		if (!display.innerHTML) {
			display.innerHTML = '-';
		} else if (display.innerHTML[0] !== '-') {
			display.innerHTML = signal + display.innerHTML;
		} else if (display.innerHTML[0] === '-') {
			const arr = [...display.innerHTML];
			arr.shift();
			display.innerHTML = arr.join('');
		}
	}

	function rmDisplay(action) {
		if (action === 1) {
			display.innerHTML = display.innerHTML.slice(0, -1);
		} else if (action === 2) {
			display.innerHTML = '';
			VALUE = 0;
		} else {
			display.innerHTML = '';
		}
	}

	function getNumberDisplay() {
		const number = parseFloat(display.innerHTML);
		console.log(number);
		return number;
	}

	return { setDisplay, rmDisplay, getNumberDisplay, signalDisplay };
}

let VALUE = 0;
let SIGNAL = '-';
let OP = -1; //1 - sum / 2- sub / 3- multiply / 4- div / 5- percent

function clearDisplay(action) {
	app().rmDisplay(action);
}

function multiply() {
	OP = 3;
	VALUE === 0
		? (VALUE = app().getNumberDisplay())
		: (VALUE *= app().getNumberDisplay());
	clearDisplay(3);
}

function subt() {
	OP = 2;
	VALUE === 0
		? (VALUE = app().getNumberDisplay())
		: (VALUE -= app().getNumberDisplay());
	clearDisplay(3);
}

function sum() {
	OP = 1;
	VALUE === 0
		? (VALUE = app().getNumberDisplay())
		: (VALUE += app().getNumberDisplay());
	clearDisplay(3);
}

function showDisplay() {
	switch (OP) {
		case 1:
			sum();
			break;
		case 2:
			subt();
			break;
		case 3:
			multiply();
			break;
		case 4:
			div();
			break;
		case 5:
			percent();
			break;
		default:
			return;
	}
	app().setDisplay(VALUE);
}

function insertDisplay(number) {
	app().setDisplay(number);
}

function switchSignal() {
	app().signalDisplay(SIGNAL);
	SIGNAL === '-' ? (SIGNAL = '') : (SIGNAL = '-');
}
function percent() {
	console.log('percent');
}
