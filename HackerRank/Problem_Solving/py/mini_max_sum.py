def miniMaxSum(arr):
    # Write your code here
    total = sum(arr)
    minValue = min(arr)
    maxValue = max(arr)

    print(f"{total - maxValue} {total - minValue}")

miniMaxSum([1, 2, 3, 4, 5])
