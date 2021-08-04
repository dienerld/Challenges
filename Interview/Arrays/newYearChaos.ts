function minimumBribes(q: number[]): void {
	// Write your code here
	let jump: number = 0;

	let expectedFirst: number = 1;
	let expectedSecond: number = 2;
	let expectedThird: number = 3;

	for (let i = 0; i < q.length; i++) {
		if (q[i] == expectedFirst) {
			expectedFirst = expectedSecond;
			expectedSecond = expectedThird;
			++expectedThird;
		} else if (q[i] == expectedSecond) {
			++jump;
			expectedSecond = expectedThird;
			++expectedThird;
		} else if (q[i] == expectedThird) {
			jump += 2;
			++expectedThird;
		} else {
			console.log('Too chaotic');
			return;
		}
	}

	console.log(jump);
}

const queue: number[] = [1, 2, 5, 3, 7, 8, 6, 4];
minimumBribes(queue);

// 1 2 3 4 5 6 7 8
// 1 2 3 5 4 6 7 8 (1)
// 1 2 5 3 6 7 4 8 (3)
// 1 2 5 3 7 8 6 4 (3)
