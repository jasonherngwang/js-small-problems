/*
Problem
------------------------------------------
Write a function that rotates the last n digits of a number.
For the rotation, rotate by one digit to the left, moving the first digit to the end.

Inputs:
- 1 number to be rotated
- 1 number, the number of digits to rotate
Outputs: 
- 1 number, rotated

Requirements (explicit, implicit)
- "Rotate" means: Move the first digit to the end
  - If only 1 digit, the returned number is the same

Clarifying Questions
- Both integers? Yes
- Negative numbers or zero? Non-negative only.
- Missing argument? Possible
- Non-number data type? Possible

Examples, Test Cases
------------------------------------------
Input: 735291, 5
Last 5: 35291
Rotate last 5: 52913
Output: 752913

Data Structure
------------------------------------------
Use array to hold individual digits.
- Useful for slicing methods
- Able to join back together

Algorithm
------------------------------------------
Guard clauses
Return undefined if
- Less than 2 arguments are provided
- Either argument is not a number
- Either argument is NaN
- Either argument is not a non-negative integer

Main Function
- Convert number into string
- Convert string into array of digit strings
- Rotate last `n` elements
  - Determine length of array.
  - Slice first (length - n) element
    - If n > length, slice() will start from index 0
  - Slice last `n` elements
  - Join these two slices
- Join array elements back into a string
- Convert string to number

'12345'.slice(0, -5) returns '1'
Must convert -5 to 0.
*/

function rotateString(str) {
  if (arguments.length === 0 || !(typeof str === 'string')) return undefined;
  return str.slice(1).concat(str.slice(0, 1));
}

function rotateRightmostDigits2(number, n) {
  if (arguments.length < 2) return;
  if (typeof number !== 'number' || typeof n !== 'number') return;
  if (Number.isNaN(number) || Number.isNaN(n)) return;
  if (number < 0 || n < 0) return;
  
  let numStr = String(number);
  let rotationStartIndex = Math.max(0, numStr.length - n);
  let unrotatedComponent = numStr.slice(0, rotationStartIndex);
  let rotatedComponent = rotateString(numStr.slice(rotationStartIndex));
  return Number(unrotatedComponent + rotatedComponent);
}

function rotateRightmostDigits(number, n) {
  if (arguments.length < 2) return;
  if (typeof number !== 'number' || typeof n !== 'number') return;
  if (Number.isNaN(number) || Number.isNaN(n)) return;
  if (number < 0 || n < 0) return;
  if (n === 0) return number;
  
  let digits = [...String(number)];
  digits = digits.concat(digits.splice(-n, 1));
  return Number(digits.join(''));
}

console.log(rotateRightmostDigits(735291, 0));      // 735291 (no rotation)
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(0, 5));           // 0
console.log(rotateRightmostDigits(123, 5));         // 231 (n > number of digits)

console.log(rotateRightmostDigits(735291, -3));      // undefined
console.log(rotateRightmostDigits(-735291, 3));      // undefined

console.log(rotateRightmostDigits(NaN, 6));         // undefined (not a non-negative integer)
console.log(rotateRightmostDigits(undefined, 6));         // undefined (not a non-negative integer)
console.log(rotateRightmostDigits(6));              // undefined (missing argument)


