function stringy(length) {
  let one = true;
  let result = "";
  for (let x = 1; x <= length; x += 1) {
    result += one ? 1 : 0;
    one = !one;
  }
  return result;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
