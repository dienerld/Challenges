function miniMaxSum(arr) {
  const sumMax = arr.reduce((value, acc) => acc += value, 0);
  const minValue = Math.min.apply(Math, arr);
  const maxValue = Math.max.apply(Math, arr);

  console.log(`${sumMax - maxValue} ${sumMax - minValue}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
