// conditional Statements
const weirdOrNot = (number: number) => {
	if (number % 2 != 0) console.log('Weird');
	else if (number >= 2 && number <= 5) console.log('Not Weird');
	else if (number >= 6 && number <= 20) console.log('Weird');
	else if (number > 20) console.log('Not Weird');
};
