class Calculator {
	power(n: number, p: number): number {
		try {
			if (n >= 0 && p >= 0) {
				return n ** p;
			}

			throw new Error('n and p should be non-negative');
		} catch (e) {
			return e.message;
		}
	}
}

function main() {
	const myCalculator = new Calculator();
	let T = parseInt(readLine());
	while (T-- > 0) {
		const num = readLine().split(' ');
		try {
			const n = parseInt(num[0]);
			const p = parseInt(num[1]);
			const ans = myCalculator.power(n, p);
			console.log(ans);
		} catch (e) {
			console.log(e);
		}
	}
}

main();
