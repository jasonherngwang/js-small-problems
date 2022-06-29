/* 
Algo
- Create a hash where the key is a digit string, and the value is the digit number.
- Initialize a variable to store the number result, to 0.
- Initialize a multiplier to 1
- Iterate over each character, in reverse
  - Use the hash to lookup the digit number
  - Multiply the digit by the multiplier, and add to result
  - Multiply the multiplier by 10

Algo 2
- Initialize the result value to 0
- Convert the string into an array of digit numbers, using the hash
- Iterate over the numbers
  - Multiply the result by 10
  - Add the current number to the result (as the ones value)
*/

const DIGITS = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  0: 0,
};
const stringToInteger = (str) => {
  let multiplier = 1;
  let integer = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    integer += DIGITS[str[i]] * multiplier;
    multiplier *= 10;
  }
  return integer;
};

// console.log(stringToInteger('4321'));      // 4321
// console.log(stringToInteger('570'));       // 570

const NUMBERS = [...Array(10)].map((_, i) => i);

function stringToInteger2(string) {
  let integer = 0;

  for (let char of [...string]) {
    if (/[\d]/.test(char)) {
      integer = integer * 10 + NUMBERS[char];
    } else {
      break;
    }
  }

  return integer;
}

console.log(stringToInteger2("4321")); // 4321
console.log(stringToInteger2("570")); // 570
console.log(stringToInteger2("57.90")); // 570
