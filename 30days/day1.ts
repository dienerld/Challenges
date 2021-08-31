/*
 * Day 1: Data Types
 */
function main() {
	const i = 4;
	const d = 4.0;
	const s = 'HackerRank ';
	const int = Number(readLine()) || 10;
	const double = Number(readLine()) || 10.5;
	const str = readLine() || 'Hello';

	const sumFl = d + double;
	console.log(i + int);
	console.log(sumFl.toFixed(1));
	console.log(s + str);
}

main();
