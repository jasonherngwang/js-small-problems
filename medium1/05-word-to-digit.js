/*
Problem
------------------------------------------
Write a function that takes a sentence string as an argument and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
digit character.

Inputs: 1 string with number words
Outputs: The input string with number words converted to digits

Rules, Requirements, Definitions
- There are 10 number words from one to nine.
- Punctuation must be preserved.


Clarifying Questions
-


Examples, Test Cases, Edge Cases
------------------------------------------


Data Structure
------------------------------------------
String: Use regex

Algorithm
------------------------------------------
- Create an object for lookup:
  - Key: number words
  - Value: digit (string)
- Use regex to replace words with digits
  - Match entire words using word boundaries
  - Pass the match to a callback
  - The callback checks if the word is in the lookup object
    - If so, returns digit
    - If not, returns original word

*/

'use strict';

const NUMBER_WORDS = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

function wordToDigit(sentence) {
  return sentence.replace(
    /\b\w+\b/gi,
    (word) => NUMBER_WORDS[word.toLowerCase()] || word
  );
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.')); // "The weight is done."

console.log(wordToDigit('Nine zero two one Zero.')); // "The weight is done."
