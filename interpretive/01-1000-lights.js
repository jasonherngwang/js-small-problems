/*
Problem
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

Input: 1 number representing:
- the number of passes we make through the bank of switches
- the number of switches in the bank

Output: 1 array of numbers, denoting the lights that are on after we make all n passes

Rules and Definitions
- Switch numbering starts at 1.
- On the nth pass, we toggle switches every nth switch.
  - On pass 2, we toggle switches, 2, 4, 6, etc.
- The return value is an array of only switches that are ON. Do not include switches that are OFF.
  - Length of return array is <= n.

Edge Cases
- n <= 0 (empty bank)? No. Minimum value of n is 1.
- Missing argument? No.
- Non-number data type argument? No.
- Special values: NaN, undefined, null? No.

Examples, Test Cases
X: off
O: on

Input: 5
Switch bank starting value:
X X X X X
After pass 1:
O O O O O
After pass 2:
O X O X O
After pass 3:
O X X X O
After pass 4:
O X X O O
After pass 5:
O X X O X
Output: [1, 4]

Data Structure
Arrays: Can use various abstractions
Booleans to keep track of light on/off state

Algorithm
- Initialize the switch bank array with `n` elements set to boolean false.
- Iterate from 1 to `n`, as the pass number.
  - Initialize a variable called switchNum, to the value of pass.
  - While switchNum <= `n`:
    - Toggle the boolean at index: switchNum - 1.
    - Increment switchNum by pass.
- Transform the array:
  - If the value is true, transform to (index + 1).
  - If the value is false, leave as false.
- Filter the array to values that are not the boolean false.
- Return this filtered array.
*/

'use strict';

function lightsOn(switches) {
  let switchBank = Array(switches).fill(false);

  for (let pass = 1; pass <= switches; pass += 1) {
    let switchNum = pass;
    while (switchNum <= switches) {
      switchBank[switchNum - 1] = !switchBank[switchNum - 1];
      switchNum += pass;
    }
  }
  switchBank = switchBank.map((val, idx) => (val ? idx + 1 : val));
  return switchBank.filter(Boolean);
}

console.log(lightsOn(0)); // []
console.log(lightsOn(1)); // [1]
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1,  4,  9, 16,  25, 36, 49, 64, 81, 100]
console.log(lightsOn(100000)); // [1,  4,  9, 16,  25, 36, 49, 64, 81, 100]
