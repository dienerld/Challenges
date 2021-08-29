function modifyArray(nums) {
	nums = nums.map(element => {
		if (element % 2 == 0) return element * 2;
		return element * 3;
	});
	return nums;
}

nums = [1, 2, 3, 4, 5, 5];
console.log(modifyArray(nums));
