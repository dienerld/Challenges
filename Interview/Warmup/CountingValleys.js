function countingValleys(steps, path) {
	let valley = 0;
	let level = 0;
	for (let i = 0; i < steps; i++) {
		if (path[i] == 'U') {
			level += 1;
		} else {
			if (level == 0) {
				valley += 1;
			}
			level -= 1;
		}
	}
	return valley;
}

const path = 'UDDDUDUU';
const steps = 8;

console.log(countingValleys(steps, path));
