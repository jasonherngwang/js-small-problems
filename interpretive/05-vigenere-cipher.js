/*
Problem
------------------------------------------
Implement the Vigenere Cipher, which uses Caesar Ciphers based on a keyword.
Each letter of the keyword is used as a shift value.

Inputs: 1 string, the plaintext
Outputs: 1 string, the encrypted plaintext

Rules, Requirements, Definitions
- "Keyword"
  - Case-insensitive when determining shift values, i.e. 'a' is same as 'A'
  - Shift value is position in alphabet (0-indexed)
    - 'a' and 'A' are 0; 'z' and 'Z' are 25
- Non-letter characters may be present in the plaintext, but are left as-is
  - Letters in the plaintext are shifted sequentially, as if non-letters were
    not present.

Clarifying Questions
-

Edge Cases
-


Examples, Test Cases
------------------------------------------
plaintext: Pine, apples!
keyword: meat

plaintext:  Pine, apples!
shift:      meat, meatma!
ciphertext: Bmnx, mtpeqw!

Data Structure
------------------------------------------
Use arrays to hold characters and shift values.

Algorithm
------------------------------------------
Helper method: Caesar Cipher shift letter function (from problem 4)

Main algorithm
- Split keyword into array of characters.
  - Transform array into numbers corresponding to letter position in alphabet.
  - Find char code of lowercase form of each character and subtract char code of
    lowercase 'a'.
- Initialize shiftIndex to 0, to track current index for looking up shift value
- Initialize result string (ciphertext).
- Iterate through letters in input string
  - If letter, perform Caesar Cipher encryption using char and shiftIndex
    - Increment shiftIndex by 1. If return value is greater than largest index
       of shift values array, start over at 0.
  - If not letter, append char as-is to result string
- Return result string
*/

'use strict';

const LOWERCASE_A = 97;
const LOWERCASE_Z = 122;
const UPPERCASE_A = 65;
const UPPERCASE_Z = 90;

function shiftLetter(letter, key) {
  let codeA;
  let codeZ;

  if (/[a-z]/.test(letter)) {
    [codeA, codeZ] = [LOWERCASE_A, LOWERCASE_Z];
  } else {
    [codeA, codeZ] = [UPPERCASE_A, UPPERCASE_Z];
  }

  let code = letter.charCodeAt();
  let newCode = code + key;

  while (newCode > codeZ) newCode -= 26;
  while (newCode < codeA) newCode += 26;

  return String.fromCharCode(newCode);
}

function encryptVigenere(plaintext, keyword) {
  let shiftValues = [...keyword];
  shiftValues = shiftValues.map(
    (char) => char.toLowerCase().charCodeAt() - LOWERCASE_A
  );

  let shiftIndex = 0;
  let ciphertext = '';

  for (let char of plaintext) {
    if (/[a-z]/i.test(char)) {
      ciphertext += shiftLetter(char, shiftValues[shiftIndex]);
      shiftIndex = (shiftIndex + 1) % shiftValues.length;
    } else {
      ciphertext += char;
    }
  }

  return ciphertext;
}

console.log(encryptVigenere("Pineapples don't go on pizzas!", 'A')); // No change
console.log(encryptVigenere("Pineapples don't go on pizzas!", 'a')); // No change
console.log(encryptVigenere("Pineapples don't go on pizzas!", 'Aa')); // No change
console.log(encryptVigenere("Pineapples don't go on pizzas!", 'cab'));
// Riogaqrlfu dpp't hq oo riabat!
console.log(encryptVigenere("Pineapples don't go on pizzas!", 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(encryptVigenere('Dog', 'Rabbit'));
