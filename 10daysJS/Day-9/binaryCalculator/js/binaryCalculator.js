const display = document.getElementById('res');
let operand1 = 0,
	operand2 = 0;

const clearDisplay = () => {
	display.innerHTML = '';
};

const addCharDisplay = char => {
	display.innerHTML += char;
};

const Operation = (numbers, typeOperation) => {
	let result;
	switch (typeOperation) {
		case '+':
			result = (parseInt(numbers[0], 2) + parseInt(numbers[1], 2)).toString(2);
			break;
		case '-':
			result = (parseInt(numbers[0], 2) - parseInt(numbers[1], 2)).toString(2);
			break;
		case '*':
			result = (parseInt(numbers[0], 2) * parseInt(numbers[1], 2)).toString(2);
			break;
		case '/':
			result = (parseInt(numbers[0], 2) / parseInt(numbers[1], 2)).toString(2);
			break;
	}
	display.innerText = result;
};

const printResult = () => {
	const text = display.innerText;
	let numbers = ['', ''],
		operation = '';
	let indexNumbers = 0;
	const length = text.length;
	for (let i = 0; i < length; i++) {
		if (text.charAt(i) === '0' || text.charAt(i) === '1') {
			numbers[indexNumbers] += text.charAt(i);
		} else {
			operation = text.charAt(i);
			indexNumbers++;
		}
	}
	Operation(numbers, operation);
};
