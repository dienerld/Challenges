function jumpingOnClouds(c) {
	let jumps = 0;
	let sequence = 0;
	c.forEach(element => {
		if (element == 0) {
			sequence++;
		} else if (element == 1) {
			jumps++;
			sequence = 0;
		}
		if (sequence == 2) {
			jumps++;
			sequence = 0;
		}
	});
	return jumps;
}
c = [0, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(c));
