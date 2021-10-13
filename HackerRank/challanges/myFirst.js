function simpleArraySum(ar) {
	// Write your code here
	let total = 0;
	ar.forEach((element) => (total += element));
	return total;
}

arr = [1, 2, 3, 4, 5, 6];
console.log(simpleArraySum(arr));
