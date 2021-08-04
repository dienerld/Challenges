//working function
function factorial(number) {
	let factorial = 1;
	while (number > 0) {
		factorial *= number;
		number--;
	}
	return factorial;
}

factorial(4);
