// data Types
function main() {
	var i = 4;
	var d = 4.0;
	var s = 'HackerRank ';
	const int = Number(readLine()) || 10;
	const double = Number(readLine()) || 10.5;
	const str = readLine() || 'Hello';

	const sumFl = d + double;
	console.log(i + int);
	console.log(sumFl.toFixed(1));
	console.log(s + str);
}

main();
