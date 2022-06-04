// Day 1: Data Types

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	var _ = strconv.Itoa // Ignore this comment. You can still use the package "strconv".

	var i uint64 = 4
	var d float64 = 4.0
	var s string = "HackerRank "

	scanner := bufio.NewScanner(os.Stdin)

	var inputI uint64
	var inputF float64
	fmt.Scanf("%d", &inputI)
	i += inputI

	fmt.Scanf("%f", &inputF)
	d += inputF

	scanner.Scan()
	inputS := scanner.Text()

	s += inputS

	fmt.Println(i)
	fmt.Printf("%.1f\n", d)
	fmt.Println(s)

}
