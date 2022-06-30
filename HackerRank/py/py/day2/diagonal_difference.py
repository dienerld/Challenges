def diagonalDifference(arr):
		# Write your code here
		diag1 = 0
		diag2 = 0
		for i in range(len(arr)):
				diag1 += arr[i][i]
				diag2 += arr[i][len(arr) - 1 - i]
		return abs(diag1 - diag2)


matrix = [
  [1,2,3],
  [4,5,6],
  [0,8,5]
]

print(diagonalDifference(matrix))
