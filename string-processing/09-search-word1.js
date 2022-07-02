/*
Problem
------------------------------------------
Write a function that takes two arguments, a word and a string of text, and
returns an integer representing the number of times the word appears in the
text.

Inputs: 1 string (a word), 1 string (some text)
Outputs: 1 number, the number of times the word appears in the text

Rules/Requirements
- Both input strings will be provided
- Inputs could be empty strings
- Word breaks are spaces
- Punctuation may be present, and they will be attached to words
- Case insensitive

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
Algorithm
- Guard clause: Return 0 length if either or both arguments are missing.
- Use regex to match word in text
  - Global match
  - Case-insentive
  - Word must be standalone, i.e. between word boundaries
- Return length of array returned by regex, or 0 if null
*/

'use strict';

function searchWord(word, text) {
  if (!(word && text)) return 0;
  let regex = new RegExp(`\\b${word}\\b`, 'gi');
  return (text.match(regex) || []).length;
}

const text =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text)); // 3
console.log(searchWord('dog', text)); // 0
console.log(searchWord('qui', text)); // 4
console.log(searchWord('qui')); // 0
console.log(searchWord()); // 0
