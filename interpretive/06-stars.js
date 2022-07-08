/*
Problem
------------------------------------------
Write a function that displays an 8-pointed star in an nxn grid, where n is an
odd integer that is supplied as an argument to the function. The smallest such
star you need to handle is a 7x7 grid (i.e., when n is 7).

Inputs: 1 odd integer, `n`
- Minimum value is 7
Outputs: Log an 8-pointed star to the console.

Rules, Requirements, Definitions
- "Star" is the character "*"
- The middle row of the star is `n` stars
Other than the middle row, the "star arms" rows are comprised of:
- Outer padding: rowNum number of spaces
- 1 star
- Inner padding: (n - 3) / 2 spaces
- 1 star
- Inner padding: (n - 3) / 2 spaces
- 1 star
- Outer padding: rowNum number of spaces (don't need to print this)


Clarifying Questions
-

Edge Cases
-


Examples, Test Cases
------------------------------------------


Data Structure
------------------------------------------


Algorithm
------------------------------------------
Print the top half, the middle row, the the bottom half.
- Find middle index as Math.floor(n/2)

Top half
- Iterate from 0 to middle index - 1
  - Print row, or build an array of strings
- Add middle row
- Reverse the top half
- Print entire array
*/

'use strict';

const STAR_CHAR = '⭐';
const PAD_CHAR = '⬛';

function rowString(n, rowNum) {
  let outerPadding = PAD_CHAR.repeat(rowNum);
  let innerPadding = PAD_CHAR.repeat((n - 3) / 2 - rowNum);
  return [
    outerPadding,
    STAR_CHAR,
    innerPadding,
    STAR_CHAR,
    innerPadding,
    STAR_CHAR,
    outerPadding,
  ].join('');
}

// console.log(rowString(7, 0));
// console.log(rowString(7, 1));
// console.log(rowString(7, 2));

function star(n) {
  let midIndex = Math.floor(n / 2);

  let topHalf = [];
  for (let rowNum = 0; rowNum < midIndex; rowNum += 1) {
    topHalf.push(rowString(n, rowNum));
  }
  let bottomHalf = topHalf.slice().reverse();
  let middleRow = [STAR_CHAR.repeat(n)];

  let starStrings = [...topHalf, ...middleRow, ...bottomHalf];
  starStrings.forEach((string) => console.log(string));
}

star(7);
