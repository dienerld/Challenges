function minimumSwaps(arr: number[]): number {
	let swaps: number = 0;
	let n = arr.length;
	for (let i = 0; i < n; i++) {
		while (arr[i] !== i + 1) {
			const tmp = arr[i];
			arr[i] = arr[tmp - 1];
			arr[tmp - 1] = tmp;
			swaps++;
		}
	}

	return swaps;
}

console.log(minimumSwaps([1, 2, 3, 5, 4, 6, 7]));
