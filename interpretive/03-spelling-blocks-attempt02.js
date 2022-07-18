/*
Problem
------------------------------------------
Now I Know My ABCs
A collection of spelling blocks has 2 letters per block:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

We use the spelling blocks to spell a word. Each block can be used once. A
word cannot contain letters on both sides of a block. For example, a word
cannot contain both "B" and "O".

Inputs: 1 string, a word
Outputs: Boolean true if the word can be spelled using the blocks. false if not

Rules, Requirements, Definitions
- Case-insensitive
- "Letter" means any of the 26 English langauge letters.
- There are 13 blocks, so the longest spellable word has length 13.
- Blocks always have 2 letters.
- Can't reuse blocks.
- Blocks can be used in any order.
- Word does not have to be a legal English word.

Edge Cases
- Empty string as input => Return true.
- Word that uses more than one block => Return false.
- Word contains special characters, spaces, punctuation => Return false.
- Word has whitespace in the middle or on the ends => Return false.
- Word has lowercase letters => Convert to uppercase before checking blocks.
- Word has numbers => Return false.
- Word has duplicated letters => Return false.
- Missing argument => Not possible.


Examples, Test Cases
------------------------------------------
// Empty string
console.log(isBlockWord('')); // true

// General test cases
console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('DOG')); // true

// Spellable but not an English word
console.log(isBlockWord('DGO')); // true

// Uses all letters
console.log(isBlockWord('bxdcngrfjhvlz')); // true

// Lowercase and mixed
console.log(isBlockWord('send')); // true
console.log(isBlockWord('jest')); // true
console.log(isBlockWord('JEst')); // true

// Not spellable
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('hunt')); // false

// Duplicate letter
console.log(isBlockWord('BBB')); // false

// Non letters
console.log(isBlockWord('l4te')); // false
console.log(isBlockWord('late!')); // false
console.log(isBlockWord('  la  te  \n')); // false
console.log(isBlockWord('100')); // false


Data Structure
------------------------------------------
Input: String
- May break into Array of characters

Blocks: Array or Hash
- Array of blocks
  - Each block represented by string: "BO"

Output: Boolean

Algorithm
------------------------------------------
Approach 1: A set of blocks
Main function
- Guard clause: Check if the input string has any non-letter characters.
  - If so, return false.
- Initialize empty set to track blocks that were used during the spelling
  process.
- Iterate over characters in input string.
  - For the current character, check which block should be used to spell it.
  - Check if this block is in our "used blocks" set. If so, we are re-using
    the block, which is not allowed.
    - Return false.
  - If block is not already used, add it to our used blocks set.
- If we complete iteration without reusing any blocks, the word is spellable.
  - Return true.

Helper function: For a character, find the block to be used.
- Create array of blocks.
- Upcase the character to match the case of the elements in the blocks array.
- If the input is one of the 26 English letters, then this function is
  guaranteed to return a block.
- Iterate over the blocks array and check if the character is one of the two
  characters in the string representation of the block.
  - If so, return that string.

Approach 2: Using regex to count occurrences.
- Initialize an array containing the blocks represented as string: 'B:O'.
- Transform the blocks array into RegExp objects in the form 'B|O'.
  - Use the global flag 'g' and case-insensitive flag 'i'.
- For each pattern, use String.prototype.match to retrieve an array of matches
  from the input word.
  - Determine the number of matches, i.e. the resulting array's length.
  - Each block can only be used once, so if the number of matches exceeds 1,
    return false.
- Return true of all counts are <= 1.

*/

'use strict';

function findBlockForLetter(letter) {
  const BLOCKS = [
    'BO',
    'XK',
    'DQ',
    'CP',
    'NA',
    'GT',
    'RE',
    'FS',
    'JW',
    'HU',
    'VI',
    'LY',
    'ZM',
  ];

  letter = letter.toUpperCase();
  return BLOCKS.find((block) => block.includes(letter.toUpperCase()));
}

// console.log(findBlockForLetter('a')); // 'NA'
// console.log(findBlockForLetter('z')); // 'ZM'
// console.log(findBlockForLetter('1')); // undefined

function isBlockWord(string) {
  if (arguments.length < 1) return false;
  if (/[^a-z]/i.test(string)) return false;

  let usedBlocks = new Set();

  for (let char of string) {
    let block = findBlockForLetter(char);
    if (usedBlocks.has(block)) return false;
    usedBlocks.add(block);
  }

  return true;
}

// // Empty string
// console.log(isBlockWord('')); // true

// // General test cases
// console.log(isBlockWord('BATCH')); // true
// console.log(isBlockWord('DOG')); // true

// // Spellable but not an English word
// console.log(isBlockWord('DGO')); // true

// // Uses all letters
// console.log(isBlockWord('bxdcngrfjhvlz')); // true

// // Lowercase and mixed case
// console.log(isBlockWord('send')); // true
// console.log(isBlockWord('jest')); // true
// console.log(isBlockWord('JEst')); // true

// // Not spellable
// console.log(isBlockWord('BUTCH')); // false
// console.log(isBlockWord('hunt')); // false

// // Duplicate letter
// console.log(isBlockWord('BBB')); // false

// // Non letters
// console.log(isBlockWord('l4te')); // false
// console.log(isBlockWord('late!')); // false
// console.log(isBlockWord('  la  te  \n')); // false
// console.log(isBlockWord('100')); // false

// // Missing argument
// console.log(isBlockWord()); // false

function isBlockWordRegex(string) {
  if (arguments.length < 1) return false;
  if (/[^a-z]/i.test(string)) return false;

  const BLOCKS = [
    'B:O',
    'X:K',
    'D:Q',
    'C:P',
    'N:A',
    'G:T',
    'R:E',
    'F:S',
    'J:W',
    'H:U',
    'V:I',
    'L:Y',
    'Z:M',
  ];

  const blockPatterns = BLOCKS.map(
    (block) => new RegExp(block.replace(':', '|'), 'gi')
  );

  return blockPatterns.every(
    (pattern) => (string.match(pattern) || []).length < 2
  );
}

// Empty string
console.log(isBlockWordRegex('')); // true

// General test cases
console.log(isBlockWordRegex('BATCH')); // true
console.log(isBlockWordRegex('DOG')); // true

// Spellable but not an English word
console.log(isBlockWordRegex('DGO')); // true

// Uses all letters
console.log(isBlockWordRegex('bxdcngrfjhvlz')); // true

// Lowercase and mixed case
console.log(isBlockWordRegex('send')); // true
console.log(isBlockWordRegex('jest')); // true
console.log(isBlockWordRegex('JEst')); // true

// Not spellable
console.log(isBlockWordRegex('BUTCH')); // false
console.log(isBlockWordRegex('hunt')); // false

// Duplicate letter
console.log(isBlockWordRegex('BBB')); // false

// Non letters
console.log(isBlockWordRegex('l4te')); // false
console.log(isBlockWordRegex('late!')); // false
console.log(isBlockWordRegex('  la  te  \n')); // false
console.log(isBlockWordRegex('100')); // false

// Missing argument
console.log(isBlockWordRegex()); // false
