class Polygon {
	constructor(vecLengths) {
		this.vecLengths = vecLengths;
	}

	perimeter() {
		let perimeter = 0;
		this.vecLengths.forEach(element => {
			perimeter += element;
		});
		return perimeter;
	}
}

let triangle = new Polygon([4, 5, 2]);
console.log(triangle.perimeter());
