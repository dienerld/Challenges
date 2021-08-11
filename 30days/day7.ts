function arrInvert(arr: number[]) {
	arr.reverse();
	const strArr = arr.join(' ');
	console.log(strArr);
}

arrInvert([1, 2, 0, 3, 4, 5]);
