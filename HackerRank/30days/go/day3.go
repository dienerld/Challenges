package main

import "fmt"

func main() {
	number := 10
	if number%2 != 0 {
		fmt.Println("Weird")
	} else if number >= 2 && number <= 5 {
		fmt.Println("Not Weird")
	} else if number >= 6 && number <= 20 {
		fmt.Println("Weird")
	} else if number > 20 {
		fmt.Println("Not Weird")
	}
}
