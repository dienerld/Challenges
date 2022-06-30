import array


def lonely_integer(a: list[int]):
    # Write your code here
	result = 0
	for elem in a:
		result ^= elem
	return result


print(lonely_integer([1, 1, 2, 2, 3, 3, 4, 5, 5]))
