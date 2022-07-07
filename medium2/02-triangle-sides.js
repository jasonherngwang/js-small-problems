/*
Problem
------------------------------------------
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

Inputs: 3 integers, the side lengths
Outputs: 1 string, the triangle type, or invalid

Rules, Requirements, Definitions
- "Valid triangle" means:
  - The sum of the lengths of the two shortest sides must
    be greater than the length of the longest side.
  - All side lengths > 0

Clarifying Questions
-


Examples, Test Cases, Edge Cases
------------------------------------------
3, 3, 1.5
Two sides are equal (3); one is different => isosceles

3, 4, 5
All sides different => scalene

3, 1, 1
Two shortest sides (1, 1) sum to 2, which is shorter than longest side (3)
  => invalid

Data Structure
------------------------------------------


Algorithm
------------------------------------------
- Gather all three sides into an array

Guard clauses
- Check if any side is less than or equal to 0. If so, return 'invalid'
- Sort by length ascending
  - Check if sum of first 2 is < last. If so, return 'invalid'
Main algorithm
- Reduce the array down to unique elements
- If length is 3, scalene
- If length is 2, isosceles
- If length is 1, equilateral

*/

'use strict';

function triangle(a, b, c) {
  let sides = [a, b, c].sort((a, b) => a - b);
  if (sides[0] <= 0) return 'invalid';
  if (sides[0] + sides[1] < sides[2]) return 'invalid';

  let uniqueSides = sides.reduce((array, side) => {
    if (array[array.length - 1] === side) return array;
    return array.concat(side);
  }, []);

  switch (uniqueSides.length) {
    case 1:
      return 'equilateral';
    case 2:
      return 'isosceles';
    default:
      return 'scalene';
  }
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 1.5, 1.5)); // "isosceles"
console.log(triangle(2, 2, 3)); // "isosceles"
console.log(triangle(2, 3, 2)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
