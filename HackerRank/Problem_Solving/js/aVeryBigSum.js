function aVeryBigSum(ar) {
    // Write your code here
    const sum = ar.map((index)=>parseInt(index));
    return sum.reduce((index, acc)=> acc+=index, 0);
}


const arr = [
  '1000000001', '1000000002', 
  '1000000003', '1000000004', 
  '1000000005'
];

aVeryBigSum(arr);
