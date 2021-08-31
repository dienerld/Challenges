/*
 * Day 14: Scope
 */
function main() {
	const n = parseInt(readLine());
	const elements = readLine().split(' ');
	let absolute = -100000000;

	for (let index = 0; index < n; index++) {
		for (let index2 = 0; index2 < n; index2++) {
			const tempAbsolute = Math.abs(
				parseInt(elements[index], 10) - parseInt(elements[index2], 10)
			);
			if (absolute < tempAbsolute) {
				absolute = tempAbsolute;
			}
		}
	}
	console.log(absolute);
}
