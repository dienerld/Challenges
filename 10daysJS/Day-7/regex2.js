const regexVar = () => {
	const re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$');
	return re;
};
function main() {
	const re = regexVar();
	// const s = readLine();

	console.log(re.test('Mr.rs'));
}

main();
