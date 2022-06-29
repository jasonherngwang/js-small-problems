function oddNumbers() {
  for (let num = 1; num <= 99; num += 2) {
    console.log(num);
  }
}

oddNumbers();

function oddNumbersRange(start, stop) {
  const startNum = start % 2 === 1 ? start : start + 1;
  for (let num = startNum; num <= stop; num += 2) {
    console.log(num);
  }
}

oddNumbersRange(5, 24);
oddNumbersRange(6, 32);
