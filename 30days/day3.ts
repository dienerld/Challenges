// operators

function solve(
	meal_cost: number,
	tip_percent: number,
	tax_percent: number
): void {
	const valueTip: number = (tip_percent * meal_cost) / 100;
	const valueTax: number = (tax_percent * meal_cost) / 100;
	const valueTotal: number = Math.round(valueTip + valueTax + meal_cost);
	console.log(valueTotal);
}

solve(12.0, 20, 8);
