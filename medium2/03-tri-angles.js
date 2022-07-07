/*
Problem
------------------------------------------
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

Inputs: 3 integers, the angles (degrees) of a triangle
Outputs: 1 string, the triangle classification (right, acute, obtuse), or
invalid

Rules, Requirements, Definitions
- "Valid triangle" means:
  - Sum of angles is 180 deg
  - All angles > 0

Clarifying Questions
- More or less than 3 arguments passed? No.
- Non-number data type arguments? No.
- Negative numbers? No.

Edge Cases
-


Examples, Test Cases
------------------------------------------
triangle(60, 70, 50);       // "acute" (all < 90)
triangle(30, 90, 60);       // "right" (one is 90)
triangle(120, 50, 10);      // "obtuse" (one is > 90)
triangle(0, 90, 90);        // "invalid" (one is 0)
triangle(50, 50, 50);       // "invalid" (sum is not 180)

Data Structure
------------------------------------------
Store angles in an array. Enables abstractions such as some and reduce.

Algorithm
------------------------------------------
Helper method: isValidTriangle(a, b, c)
- Return true if sum > 180 AND all angles > 0.
- Else return false.

Main algorithm
- Gather three angles in an array.
- Use helper method to check validity. If invalid return 'invalid'.
- If any angle > 90, return 'obtuse'.
- If any angle is 90, return 'right'.
- If all angles < 90, return 'acute'.

*/

'use strict';

function isValidTriangle(...angles) {
  return (
    angles.reduce((sum, angle) => sum + angle) === 180 &&
    angles.every((angle) => angle > 0)
  );
}

// console.log(isNotValidTriangle(60, 60, 60)); // false
// console.log(isNotValidTriangle(30, 90, 60)); // false
// console.log(isNotValidTriangle(150, 15, 15)); // false
// console.log(isNotValidTriangle(150, 0, 15)); // true
// console.log(isNotValidTriangle(10, 0, 15)); // true

function triangle(...angles) {
  const RIGHT_ANGLE = 90;
  if (!isValidTriangle(...angles)) return 'invalid';
  if (angles.some((angle) => angle > RIGHT_ANGLE)) return 'obtuse';
  if (angles.some((angle) => angle === RIGHT_ANGLE)) return 'right';
  if (angles.every((angle) => angle < RIGHT_ANGLE)) return 'acute';
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
