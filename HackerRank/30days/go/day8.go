/*
* Day 8: Dictionaries and Maps
 */
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()

	n, _ := strconv.Atoi(scanner.Text())
	data := make(map[string]string)

	for i := 0; i < n; i++ {
		scanner.Scan()
		arr_temp := strings.Split(scanner.Text(), " ")
		data[arr_temp[0]] = arr_temp[1]
	}

	for scanner.Scan() {
		if data[scanner.Text()] == "" {
			fmt.Println("Not found")
		} else {
			fmt.Printf("%s=%s", scanner.Text(), data[scanner.Text()])
		}
	}
}
