def countingSort(arr):
	res = [0]*100

	for i in range(0, len(arr)):
		temp = arr[i]
		res[temp] += 1
	return res

aa = [63,25,73,1,98,73,56,84,86,57,16,83,8,25,81,56,9,53,98,67,99,12,83,89,80,91,39,86,76,85,74]
print(countingSort(aa))
