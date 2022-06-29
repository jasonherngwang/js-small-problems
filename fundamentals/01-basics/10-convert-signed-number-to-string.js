const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(num) {
  if (num === 0) return '0';
  let result = '';
  let workingNum = num;
  while (workingNum > 0) {
    let remainder = workingNum % 10;
    result = DIGITS[remainder] + result;
    workingNum = Math.floor(workingNum / 10);
  }
  return result;
}

function signedIntegerToString(num) {
  if (num === 0) return '0';
  if (num < 0) return '-' + integerToString(Math.abs(num));
  return '+' + integerToString(num);
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));