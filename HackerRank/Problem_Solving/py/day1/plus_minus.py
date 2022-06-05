def plusMinus(arr):
    lt0 = 0
    gt0 = 0
    zeros = 0
    length = len(arr)

    for i in arr:
        if i == 0: zeros += 1
        elif i > 0: gt0 += 1
        else: lt0 += 1

    print(gt0/length)
    print(lt0/length)
    print(zeros/length)

plusMinus([-4, 3, -9, 0, 4, 1])
