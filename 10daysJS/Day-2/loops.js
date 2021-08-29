// Loops
const abc = function (s) {
	const vowels = ["a", "e", "i", "o", "u"];
	for (const v of s) {
		if (vowels.includes(v)) {
			console.log(v);
		}
	}
	for (const v of s) {
		if (!vowels.includes(v)) {
			console.log(v);
		}
	}
};
abc("jaavascriptloops");
