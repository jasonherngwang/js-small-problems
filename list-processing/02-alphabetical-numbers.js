/*
Problem
------------------------------------------
Write a function that takes an array of integers between 0 and 19 and returns
an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Do not mutate the argument.

Inputs: Array of integers, 0-19
Outputs: Array of the same integers, sorted by English word representation

Rules/Requirements
- Return new array. Do not mutate the input.

Clarifying Questions
-

Examples, Test Cases
------------------------------------------
Input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
Output:  [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Data Structure, Algorithm
------------------------------------------
Algorithm
- Create array of English words
  - Use index as key
- Make shallow copy of the array
- Use a custom sort, where values are compared by English word representation.
- Return sorted copy
*/

'use strict';

const NUMBER_WORDS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

function alphabeticNumberSort(array) {
  let sortedArray = [...array];
  sortedArray.sort((a, b) => {
    if (NUMBER_WORDS[a] > NUMBER_WORDS[b]) {
      return 1;
    } else if (NUMBER_WORDS[a] < NUMBER_WORDS[b]) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortedArray;
}

console.log(
  alphabeticNumberSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
