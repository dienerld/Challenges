package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	var N int
	fmt.Scanf("%d", &N)

	for i := 0; i < N; i++ {
		var stringImpar string
		var stringPar string

		scanner.Scan()
		text := scanner.Text()

		for pos, char := range text {
			if pos%2 == 0 {
				stringPar += string(char)
			} else {
				stringImpar += string(char)
			}
		}

		fmt.Println(stringPar, stringImpar)
	}
}
