const DIGITS = {
  '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
  '6': 6, '7': 7, '8': 8, '9': 9, '0': 0,
}

const stringToInteger = (str) => {
  let multiplier = 1;
  let integer = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    integer += DIGITS[str[i]] * multiplier;
    multiplier *= 10;
  }
  return integer;
}

const stringToSignedInteger = (str) => {
  switch (str[0]) {
    case '-': return -stringToInteger(str.slice(1));
    case '+': return  stringToInteger(str.slice(1));
    default:  return  stringToInteger(str);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));       // 570
console.log(stringToSignedInteger('+100'));       // 100