/*
Algo
- Return '0' if number is 0
- Initialize empty string to hold result digits.
- Initialize the divisor to 10.
- While loop (number > 0)
  - Find the remainder after dividing the input number by the divisor.
    - Lookup this number's string representation in the DIGITS array, using the remainder as the array index.
    - Add this string to the front of the result string.
  - Find the quotient of dividing the input number by the divisor. Round down to lower integer.
    - Reassign `number` to this value, for use in future iterations.
- Join array elements
*/
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(num) {
  if (num === 0) return "0";
  let result = "";
  let workingNum = num;
  while (workingNum > 0) {
    let remainder = workingNum % 10;
    result = DIGITS[remainder] + result; // Build rightmost-to-leftmost digit
    workingNum = Math.floor(workingNum / 10);
  }
  return result;
}

console.log(integerToString(4321));
console.log(integerToString(1));
console.log(integerToString(0));
console.log(integerToString(5000));
