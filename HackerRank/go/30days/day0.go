// Hello world
package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
)

func main() {
	var s string
	scanner := bufio.NewScanner(os.Stdin)
	//Enter your code here. Read input from STDIN. Print output to STDOUT
	fmt.Println("Hello, World.")
	if scanner.Scan() && scanner.Text() != "" {
		s = scanner.Text()
		fmt.Println(s)
	} else {
		log.Fatal("Sem Texto")
	}

}
