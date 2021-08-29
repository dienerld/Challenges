function hourglassSum(arr: number[][]): number {
	const maxArray = 6;
	const arrayResult: number[] = [];
	let sum: number = 0;

	for (let line = 1; line < maxArray - 1; line++) {
		for (let column = 1; column < maxArray - 1; column++) {
			sum += arr[line][column];
			for (let i = -1; i < 2; i++) {
				sum += arr[line - 1][column - i];
			}
			for (let i = -1; i < 2; i++) {
				sum += arr[line + 1][column - i];
			}
			arrayResult.push(sum);
			sum = 0;
		}
	}
	let sumMax: number = arrayResult[0];
	arrayResult.forEach((index) => (index > sumMax ? (sumMax = index) : index));
	return sumMax;
}

function initMatriz(): number[][] {
	const matriz: number[][] = [[], []];
	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 6; j++) {
			if (!matriz[i]) {
				matriz[i] = [];
			}
			matriz[i][j] = Math.trunc(Math.random() * 5);
			// console.log(matriz[i][j]);
		}
	}
	return matriz;
}

// const matriz: number[][] = initMatriz();
const matriz: number[][] = [
	[-1, -1, 0, -9, -2, -2],
	[-2, -1, -6, -8, -2, -5],
	[-1, -1, -1, -2, -3, -4],
	[-1, -9, -2, -4, -4, -5],
	[-7, -3, -3, -2, -9, -9],
	[-1, -3, -1, -2, -4, -5],
];
console.log(hourglassSum(matriz));
