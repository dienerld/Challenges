/*
 * Day 4: Class vs. Instance
 */
class Person {
	age: number;

	constructor(initialAge: number) {
		if (initialAge >= 0) this.age = initialAge;
		else {
			this.age = 0;
			console.log('Age is not valid, setting age to 0.');
		}
	}

	yearPasses(): void {
		this.age += 1;
	}

	amIOld() {
		if (this.age < 13) console.log('You are young.');
		else if (this.age >= 13 && this.age < 18) {
			console.log('You are a teenager.');
		} else console.log('You are old.');
	}
}

function main() {
	const T: number = parseInt(readLine(), 10);
	for (let i = 0; i < T; i++) {
		const age: number = parseInt(readLine(), 10);
		const p = new Person(age);
		p.amIOld();

		for (let j = 0; j < 3; j++) {
			p.yearPasses();
		}

		p.amIOld();
		console.log('');
	}
}
