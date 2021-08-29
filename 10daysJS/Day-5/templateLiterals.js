function sides(literals, ...expressions) {
	const A = expressions[0];
	const P = expressions[1];

	let s1 = (P + Math.sqrt(P ** 2) - 16 * A) / 4;
	let s2 = (P - Math.sqrt(P ** 2) - 16 * A) / 4;
	[s1, s2] = [s1, s2].sort();
	return [s1, s2];
}

let s1 = 10;
let s2 = 14;

[s1, s2] = [s1, s2].sort();

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${
	2 * (s1 + s2)
}.`;

console.log(s1 === x ? s1 : -1);
console.log(s2 === y ? s2 : -1);
