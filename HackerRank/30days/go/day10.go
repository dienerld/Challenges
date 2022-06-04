package main

import (
	"fmt"
	"strconv"
	"strings"
)

func convert_dec_to_bin(n int32) {
	count, max := 0, 0

	binary := strconv.FormatInt(int64(n), 2)
	arr_bin := strings.Split(binary, "")
	for _, v := range arr_bin {
		if strings.Compare(v, "1") == 0 {
			count++
		} else {
			count = 0
		}

		if max < count {
			max = count
		}
	}
	fmt.Println(max)
}
func main() {
	convert_dec_to_bin(125)
}
