const regexVar = () => {
	const re = /^([aeiou]).+\1$/;
	return re;
};
function main() {
	const re = regexVar();
	// const s = readLine();

	console.log(re.test('aabbcdhuhuifbdsbjhba'));
}

main();
