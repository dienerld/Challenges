function rotLeft(arr: number[], rotation: number): number[] {
	let swap: number = 0;
	let j: number = 1;
	rotation = rotation % arr.length;
	console.log(rotation);
	for (let i = 0; i < rotation; i++) {
		swap = arr[0];
		arr.push(swap);
		arr.splice(0, 1);
		console.log(arr);
	}
	return arr;
}

rotLeft([1, 2, 3, 4, 5], 54);
