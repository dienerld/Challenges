/*
 *Day 16: Exceptions - String to Integer
 */
function main() {
	// const S: string = readLine();
	const S = '5';

	try {
		var int = parseInt(S, 10) || error;
		console.log(int);
	} catch (error) {
		console.log('Bad String');
	}
}
main();
