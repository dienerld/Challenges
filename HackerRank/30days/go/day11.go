/*
 * Day 11: 2D Arrays
 */

package main

import (
	"fmt"
)

func hour_glass_sum(matrix [6][6]int32) {
	MAX := 6
	var sum int32 = 0
	var sum_final int32 = 0

	for line := 1; line < MAX; line++ {
		for column := 1; column < MAX; column++ {
			sum += matrix[line][column]
			for i := -1; i < 2; i++ {
				sum += matrix[line-1][column-i]
			}
			for i := -1; i < 2; i++ {
				sum += matrix[line+1][column-i]
			}
			if sum_final < sum {
				sum_final = sum
			}
			sum = 0
		}
	}
	fmt.Println(sum_final)
}

func main() {
	matrix := [6][6]int32{
		{1, 1, 1, 0, 0, 0},
		{0, 1, 0, 0, 0, 0},
		{1, 1, 1, 0, 0, 0},
		{0, 0, 2, 4, 4, 0},
		{0, 0, 0, 2, 0, 0},
		{0, 0, 1, 2, 4, 0},
	}
	hour_glass_sum(matrix)
}
