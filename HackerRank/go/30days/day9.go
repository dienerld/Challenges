/*
 * Day 9: Recursion 3
 */

package main

import "fmt"

func factorial(n int32) int32 {
	if n == 0 {
		return 1
	}
	return n * factorial(n-1)
}

func main() {
	fmt.Println(factorial(4))

}
