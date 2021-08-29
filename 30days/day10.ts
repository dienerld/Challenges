const convertDecimalToBinary = (number: number) => {
	const binary: string = (number >>> 0).toString(2);
	let count: number = 0;
	let max: number = 0;
	const { length } = binary;
	for (let i = 0; i < length; i++) {
		if (binary[i] === "1") {
			count++;
		} else {
			count = 0;
		}
		max = max > count ? max : count;
	}
	console.log(max);
};

convertDecimalToBinary(125);
