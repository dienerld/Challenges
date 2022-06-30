function repeatedString(s, n) {
	// Write your code here
	const totalString = Math.trunc(n / s.length);
	const remainder = Math.trunc(n % s.length);
	let repeat = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] == 'a') {
			repeat++;
		}
	}
	repeat *= totalString;
	for (let i = 0; i < remainder; i++) {
		if (s[i] == 'a') {
			repeat++;
		}
	}
	return Math.trunc(repeat);
}

s = 'afcfffaged';
console.log(repeatedString(s, 962645758455));
