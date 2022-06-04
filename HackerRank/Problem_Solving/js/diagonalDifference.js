function diagonalDifference(arr) {
    // Write your code here
  const len = arr.length - 1;
  let diagPrincipal = 0;
  let diagSec = 0;
  for(let i=0; i <= len; i++){
    diagPrincipal+= arr[i][i];
  }

  for (let i = len; i >= 0 ; i --) {
    diagSec += arr[len-i][i] ;
  }

  return Math.abs(diagPrincipal - diagSec);
}

const matrix = [
  [1,2,3],
  [4,5,6],
  [0,8,5]];
console.log(diagonalDifference(matrix));
