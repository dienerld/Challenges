if __name__ == '__main__':
    N = int(input().strip())
    if N % 2 != 0:
        print("Weird")
    elif N >= 2 and N <= 5:
        print("Not Weird")
    elif N <= 20:
        print("Weird")
    else:
        print("Weird")