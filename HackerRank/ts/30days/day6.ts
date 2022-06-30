/*
 * Day 6: Let's Review
 */
function main() {
	const T: number = parseInt(readLine());
	for (let t = 0; t < T; t++) {
		let stringPar: string = '';
		let stringImpar: string = '';
		const string: string = readLine();
		const lengthString = string.length;
		for (let i = 0; i < lengthString; i++) {
			if (i % 2) stringImpar += string[i];
			else stringPar  += string[i];
		}
		console.log(`${stringImpar} ${stringPar}`);
	}
}
