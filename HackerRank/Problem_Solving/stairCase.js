function staircase(n) {
  // Write your code here
  const populate = (space, hastag) => {
    let string = '';
    for(let i = 0; i < space; i++){
      string += ' ';
    }
    
    for(let i = 0; i < hastag; i++){
      string += '#';
    }

    return string;
  };

  for (let i = 1; i <= n; i++) {
    console.log(populate(n-i, i));
  }
}

staircase(6);

