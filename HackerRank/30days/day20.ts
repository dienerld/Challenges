class Sort {
	private swap(vector: number[], j: number): number[] {
		const aux = vector[j];
		vector[j] = vector[j + 1];
		vector[j + 1] = aux;
		return vector;
	}

	bubbleSort(total: number, vector: number[]) {
		let numberOfSwaps = 0;
		for (let i = 0; i < total; i++) {
			for (let j = 0; j < total - 1; j++) {
				if (vector[j] > vector[j + 1]) {
					vector = this.swap(vector, j);
					numberOfSwaps++;
				}
			}
		}

		console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
		console.log(`First Element: ${vector.shift()}`);
		console.log(`Last Element: ${vector.pop()}`);
	}
}

const sort = new Sort();
sort.bubbleSort(3, [3, 2, 1]);
sort.bubbleSort(3, [1, 2, 3]);
sort.bubbleSort(4, [4, 3, 1, 2]);
