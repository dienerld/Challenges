const spanInput = document.querySelector('.input');
const spanOutput = document.querySelector('.output');

const addNumber = (number) => {
	spanInput.innerHTML += number;
};

const printOutput = (text) => {
	spanOutput.innerHTML = text;
};

const reset = () => {
	spanInput.innerHTML = '';
	spanOutput.innerHTML = '';
};

const convert = () => {
	const bin = spanInput.innerHTML;
	let decimal = 0;
	for (let i = bin.length - 1; i >= 0; i--) {
		decimal += parseInt(bin[i]) * 2 ** (bin.length - 1 - i);
	}
	printOutput(decimal);
};
