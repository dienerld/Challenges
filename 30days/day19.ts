/**
 * Day 19: Interfaces
 */

abstract class AdvancedArithmetic {
	abstract divisorSum(n: number): number;
}

class Calculator implements AdvancedArithmetic {
	divisorSum(n: number): number {
		let i: number = 1;
		let arrDivs: number[] = [];

		while (i <= n) {
			if (n % i === 0) {
				arrDivs.push(i);
			}
			i++;
		}
		let sum = 0;
		arrDivs.forEach((item) => (sum += item));
		return sum;
	}
}

function main() {
	// Enter your code here

	const p = new Calculator();
	console.log('I implemented: AdvancedArithmetic');
	console.log(p.divisorSum(parseInt(readLine())));
}
