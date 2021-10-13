function Rectangle(a, b) {
	this.length = a;
	this.width = b;
	this.perimeter = 2 * (this.width + this.length);
	this.area = this.width * this.length;
}

function main() {
	const a = +readLine();
	const b = +readLine();

	const rec = new Rectangle(a, b);

	console.log(rec.length);
	console.log(rec.width);
	console.log(rec.perimeter);
	console.log(rec.area);
}
