// operation arithmetic
function getArea(length, width) {
	let area;
	area = length * width;
	return area;
}

function getPerimeter(length, width) {
	let perimeter;
	perimeter = 2 * (length + width);

	return perimeter;
}

const a = getPerimeter(2, 9);
const b = getArea(2, 9);

console.log(a + '     ' + b);
