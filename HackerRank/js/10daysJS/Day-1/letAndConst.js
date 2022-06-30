// Let and Const
function calculateArea(number) {
	const pi = Math.PI;

	const area = Math.pow(number, 2) * pi;
	const perimeter = 2 * pi * number;

	console.log(area);
	console.log(perimeter);
}
calculateArea(2.6);
