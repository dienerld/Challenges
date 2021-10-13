const regexVar = () => {
	const re = new RegExp('\\d+', 'g');
	return re;
};
function main() {
	const re = regexVar();
	// const s = readLine();

	const r = '102, 1948948 and 1.3 and 4.5'.match(re);

	for (const e of r) {
		console.log(e);
	}
}

main();
