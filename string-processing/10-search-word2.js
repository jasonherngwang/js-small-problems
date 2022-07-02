/*
Problem
------------------------------------------
write a function that takes a word and a string of text as arguments, and
returns the text with every instance of the word highlighted. To highlight a
word, enclose the word with two asterisks ('**') on each side and change every
letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

Inputs: 1 string (a word), 1 string (some text)
Outputs: The text string, with the word uppercased and highlighted with **

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
- Use regex to match word in text
- Replace all instances of word with its uppercased form, surrounded by **.
*/

'use strict';

function searchWord(word, text) {
  if (!(word && text)) return 'One more both arguments are missing.';
  let regex = new RegExp(`\\b${word}\\b`, 'gi');
  return text.replace(regex, (match) => `**${match.toUpperCase()}**`);
}

const text =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
console.log(searchWord('qui', text)); // 4
console.log(searchWord('qui')); // 0
console.log(searchWord()); // 0
