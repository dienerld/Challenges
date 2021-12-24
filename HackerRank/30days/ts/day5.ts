/*
 * Day 5: Loops
 */
function multiplyLoop(n: number): void {
	const iterations: number = 10;
	let i: number = 1;
	do {
		console.log(`${n} x ${i} = ${n * i}`);
		i++;
	} while (i <= iterations);
}

multiplyLoop(2);
