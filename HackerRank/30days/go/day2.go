package main

import (
	"fmt"
	"math"
)

func solve(meal_cost float64, tip_percent int32, tax_percent int32) {
	// Write your code here

	var valueTip float64 = float64(tip_percent) * meal_cost / 100
	var valueTax float64 = float64(tax_percent) * meal_cost / 100
	valueTotal := valueTip + valueTax + meal_cost

	fmt.Println(math.Round(valueTotal))
}
func main() {
	solve(12.0, 20, 8)
}
