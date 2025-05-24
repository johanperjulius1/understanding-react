function memoizedSquare(a) {
  let memoizedResults = {};
  return function squareNumber(a) {
    if (a in memoizedResults) {
      return console.log("We already have that square in memory");
    }
    let result = a * a;
    memoizedResults[a] = result;
    return console.log("Calculation complete: ", result);
  };
}

let test = memoizedSquare()
test(5)
