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
		const avg: number =
			this.arrScores.reduce((acc, score) => {
				console.log(acc);
				acc += score;
				return acc;
			}) / this.arrScores.length;

		if (avg >= 90) {
			return "O";
		}
		if (avg >= 80) {
			return "E";
		}
		if (avg >= 70) {
			return "A";
		}
		if (avg >= 55) {
			return "P";
		}
		if (avg >= 40) {
			return "D";
		}
		return "T";
	}
}

const s = new Student(
	"Diener",
	"Dornelas",
	13467236,
	[41, 42, 43, 44, 45, 46, 48]
);
s.printPerson();
s.calculate();
console.log(`Grade: ${s.calculate()}`);
