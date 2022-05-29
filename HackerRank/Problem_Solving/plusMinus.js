function plusMinus(arr) {
  // Write your code here
  let lt0 = 0;
  let gt0 = 0;
  let zeros = 0
  const len = arr.length;
  arr.forEach((item) => {
      if(item === 0) zeros++;
      else if (item > 0) gt0++;
      else lt0++; 
  });
  
  console.log(gt0/len);
  console.log(lt0/len);
  console.log(zeros/len);

}

arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
