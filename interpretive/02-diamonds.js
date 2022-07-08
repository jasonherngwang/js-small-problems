/*
Problem
------------------------------------------
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Inputs: 1 odd integer, n
Outputs: Logs an nxn diamond

Rules, Requirements, Definitions
- Diamond max height and width are both n


Clarifying Questions
-

Edge Cases
- Zero and negative integers are invalid input


Examples, Test Cases
------------------------------------------
Input: 3
 *
***
 *
First row has 1 star padded with (n - 1) / 2 space on each side.
Next row has (1 + 2) stars padded with (n - 1 - 2) / 2 spaces on each side.


Data Structure
------------------------------------------
Work with numbers only

Algorithm
------------------------------------------
- Iterate from 1 to n, incrementing by 2 each time. Iterator variable `i`.
  - Calculate padding to the left: (n - i) / 2
  - Log padding as spaces, concatenated with `i` stars
- Iterate from (n - 2) down to 1, decrementing by 2 each time
  - Calculate padding to the left: (n - i) / 2
  - Log padding as spaces, concatenated with `i` stars

Hollow diamond
In the printRow helper function
-
*/

function printRow(leftPadding, numStars, hollow) {
  let starString = '*'.repeat(numStars);
  if (numStars > 1 && hollow) {
    starString = '*' + ' '.repeat(numStars - 2) + '*';
  }
  console.log(' '.repeat(leftPadding) + starString);
}

function diamond(n, hollow = false) {
  for (let numStars = 1; numStars <= n; numStars += 2) {
    let leftPadding = (n - numStars) / 2;
    printRow(leftPadding, numStars, hollow);
  }
  for (let numStars = n - 2; numStars >= 1; numStars -= 2) {
    let leftPadding = (n - numStars) / 2;
    printRow(leftPadding, numStars, hollow);
  }
}

diamond(1);
// logs
// *
diamond(1, true);

diamond(3);
// logs
//  *
// ***
//  *
diamond(3, true);

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
diamond(9, true);
