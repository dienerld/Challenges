const getMaxLessThanK = (n, k) => {
	let max = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = i + 1; j <= n; j++) {
			const x = i & j;
			if ((x > max) & (x < k)) {
				max = x;
			}
		}
	}
	return max;
};

console.log(getMaxLessThanK(9, 2));
console.log(getMaxLessThanK(8, 3));
