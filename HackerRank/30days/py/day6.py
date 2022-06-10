def split_string(string):
    lenght = len(string)
    odd_string = ''
    even_string = ''

    for i in range(0, lenght, 2):
        odd_string += string[i]
    for i in range(1, lenght, 2):
        even_string += string[i]
    return ' '.join([ odd_string, even_string])

if __name__ == '__main__':
    n = int(input())
    for i in range(0, n):
        string = input()
        print(split_string(string))
