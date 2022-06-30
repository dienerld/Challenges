/**
 * Day 21: Generics
 */

let inputLines: string[] = [
	'7',
	'8',
	'6',
	'7',
	'5',
	'3',
	'0',
	'9',
	'3',
	"Jenny's",
	'Phone',
	'Number',
];

function printArray(array: any[]) {
	array = array.filter(function (el, i) {
		return array.indexOf(el) === i;
	});
	// array.sort();
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

function main() {
	printArray(inputLines);
}
main();
