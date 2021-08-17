class Person {
	firstName: string;
	lastName: string;
	idNumber: number;
	constructor(firstName: string, lastName: string, idNumber: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.idNumber = idNumber;
	}

	printPerson() {
		console.log(
			`Name: ${this.lastName}, ${this.firstName}\nID: ${this.idNumber}`
		);
	}
}

class Student extends Person {
	arrScores: number[] = [];
	constructor(
		firstName: string,
		lastName: string,
		idNumber: number,
		arrScores: number[]
	) {
		super(firstName, lastName, idNumber);
		this.arrScores = arrScores;
	}
	calculate() {
		let avg: number =
			this.arrScores.reduce((acc, score) => {
				console.log(acc);
				acc += score;
				return acc;
			}) / this.arrScores.length;

		if (avg >= 90) {
			return 'O';
		} else if (avg >= 80) {
			return 'E';
		} else if (avg >= 70) {
			return 'A';
		} else if (avg >= 55) {
			return 'P';
		} else if (avg >= 40) {
			return 'D';
		} else {
			return 'T';
		}
	}
}

let s = new Student(
	'Diener',
	'Dornelas',
	13467236,
	[41, 42, 43, 44, 45, 46, 48]
);
s.printPerson();
s.calculate();
console.log('Grade: ' + s.calculate());
