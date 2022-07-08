/*
Problem
------------------------------------------
Write a function implementing the Caesar Cipher. It substitutes a letter with
another letter of the same case, right-shifted by `n` positions in the alphabet.
Shifting past 'z' wraps back around to 'a'.

Inputs:
- 1 string, the "plaintext"
  - May contain any character classes, but only letters are shifted. Other
  characters are not left as-is.
- 1 integer, the "key": The number of positions to shift each letter in the
string
  - If positive, shift in a rightward direction
Outputs: 1 string, the encrypted version of the input string

Rules, Requirements, Definitions
- Shifting by 26 positions results in the same character
- Shifting by -26 positions results in the same character
- Shifting by 0 positions results in the same character

Clarifying Questions
- Missing arguments? No
- Incorrect data type arguments? No
- Empty string? Yes
- Float input for key? No

Edge Cases
-


Examples, Test Cases
------------------------------------------
caesarEncrypt('y', 5);       // "d"
y -> z -> a -> b -> c -> d

Data Structure
------------------------------------------
Array for a transformation approach
Regex for a string approach

Algorithm
------------------------------------------
Main Algorithm: Encrypt an entire string
- Split string into array of characters.
- Transform each character:
  - If a letter, use helper method to shift it.
  - If not, leave as-is.
- Join characters back into a string.

Helper method: Shift a single letter by `key` positions
- Find the character codes for 'a', 'z', 'A', 'Z'
- Find the character code for the input letter.
- Add `key` to the letter's code.
- Normalize:
  - While the new char code is greater than the code for 'z' or 'Z',
    subtract 26.
  - While the new char code is lesser than the code for 'a' or 'A', add 26.
- Convert the new char code back to a letter.

*/

const ALPHABET_SIZE = 26;
const LOWERCASE_A = 97;
const LOWERCASE_Z = 122;
const UPPERCASE_A = 65;
const UPPERCASE_Z = 90;

function shiftLetter(letter, key) {
  let [codeA, codeZ] = /[a-z]/.test(letter)
    ? [LOWERCASE_A, LOWERCASE_Z]
    : [UPPERCASE_A, UPPERCASE_Z];

  let newCode = letter.charCodeAt() + key;

  while (newCode > codeZ) newCode -= ALPHABET_SIZE;
  while (newCode < codeA) newCode += ALPHABET_SIZE;

  return String.fromCharCode(newCode);
}

// console.log(shiftLetter('A', 0));  // 'A'
// console.log(shiftLetter('A', 3));  // 'D'
// console.log(shiftLetter('A', 26)); // 'A'
// console.log(shiftLetter('A', 29)); // 'D'
// console.log(shiftLetter('a', 0));  // 'a'
// console.log(shiftLetter('a', 3));  // 'd'
// console.log(shiftLetter('a', 26)); // 'a'
// console.log(shiftLetter('a', 29)); // 'd'

// console.log(shiftLetter('A', -3));  // 'X'
// console.log(shiftLetter('A', -26)); // 'A'
// console.log(shiftLetter('A', -29)); // 'X'
// console.log(shiftLetter('a', -3));  // 'x'
// console.log(shiftLetter('a', -26)); // 'a'
// console.log(shiftLetter('a', -29)); // 'x'

function caesarEncrypt1(plaintext, key) {
  return [...plaintext]
    .map((char) => {
      if (/[a-z]/i.test(char)) {
        return shiftLetter(char, key);
      } else {
        return char;
      }
    })
    .join('');
}

function caesarEncrypt(plaintext, key) {
  return plaintext.replace(/[a-z]/gi, (letter) => shiftLetter(letter, key));
}

// simple shift
console.log(caesarEncrypt('A', 0)); // "A"
console.log(caesarEncrypt('A', 3)); // "D"

// wrap around
console.log(caesarEncrypt('y', 5)); // "d"
console.log(caesarEncrypt('a', 47)); // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// decrypt
console.log(caesarEncrypt('Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!', -5));
// 'The quick brown fox jumps over the lazy dog!'

// many non-letters
console.log(
  caesarEncrypt(
    'There are, as you can see, many punctuations. Right?; Wrong?',
    2
  )
);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// negative key
console.log(
  caesarEncrypt(
    'There are, as you can see, many punctuations. Right?; Wrong?',
    -16
  )
);
