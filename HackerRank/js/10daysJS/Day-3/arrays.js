function getSecondLargest(nums) {
	const arr = [...new Set(nums)];
	arr.sort((a, b) => b - a);
	console.log(arr[1]);
}

getSecondLargest([1, 2, 3, 6, 6, 6, 5]);
