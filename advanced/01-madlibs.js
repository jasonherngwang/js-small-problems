/*
Problem
------------------------------------------
Madlibs
Build a madlibs programs that:
- Takes text `template` as input
- Plugs in random nouns, verbs, adjectives, and adverbs into the template
- Returns the result

Inputs: 1 string, the template
Outputs: 1 string, the template filled in

Rules, Requirements, Definitions
- Nouns, verbs, adjectives, and adverbs are defined within the program
- Each time the function is run, a new set of randomly-selected words is
  inserted.
    - I.e. it is not a pure function.

Clarifying Questions
- Must have at least 1 word for each set of nouns, verbs, adjectives, and
  adverbs? Yes.
- Can template have no placeholders? Yes.
- Missing arguments? Non-string data type? No.
- Would we be required to use the same word twice in the template, for
  continuity of the story?
  - E.g. {{noun01}} goes to work. {{noun01}} goes home.
         Jason goes to work. Jason goes home.
  - Examining test cases shows the answer is No.

Edge Cases
- Empty string for template
- Template does not allow for nouns, verbs, adjectives, or adverbs
- Template allows for multiple nouns, verbs, adjectives, and adverbs


Examples, Test Cases
------------------------------------------
The {{adjective}} brown {{noun}} {{adverb}}
{{verb}} the {{adjective}} yellow
{{noun}}, who {{adverb}} {{verb}} his
{{noun}} and looks around.

Data Structure
------------------------------------------
Array for words to be inserted
- Randomly select by index

Template
- Must be user-entered, so a String
- Has placeholders to indicate where and what type of word to be inserted
  - Placeholder format: {{wordType}}, e.g. {{noun}}
    - Would these formats ever appear in normal text?

Algorithm
------------------------------------------
- Create 4 arrays of words
- Create a template with placeholders/identifiers
- Use regex to select {{wordType}} and extract `wordType` to use as an argument
  - May need capture group
  - Pass to a callback which determines which array to choose from
  - Randomly select a word
  - Use regex to replace the word
- Return the string

*/

'use strict';

function randomReplacement(wordType) {
  const REPLACEMENTS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  let wordChoices = REPLACEMENTS[wordType];
  if (!wordChoices) return '{{invalid word type}}';
  let randomIndex = Math.floor(Math.random() * wordChoices.length);
  return wordChoices[randomIndex];
}

// console.log(randomReplacement('adjective'));
// console.log(randomReplacement('noun'));
// console.log(randomReplacement('verb'));
// console.log(randomReplacement('adverb'));

function madlibs(template) {
  return template.replace(/{{([a-z]+)}}/gi, (_, wordType) =>
    randomReplacement(wordType)
  );
}

let template1 =
  'The {{adjective}} brown {{noun}} {{adverb}} ' +
  '{{verb}} the {{adjective}} yellow ' +
  '{{noun}}, who {{adverb}} {{verb}} his ' +
  '{{noun}} and looks around.';

console.log(madlibs(template1));

// Invalid word type: 'abc'
let template2 =
  'The {{abc}} brown {{noun}} {{adverb}} ' +
  '{{verb}} the {{adjective}} yellow ' +
  '{{noun}}, who {{adverb}} {{verb}} his ' +
  '{{noun}} and looks around.';

console.log(madlibs(template2));

// Invalid placeholder format: '((wordType))', '{wordType}'
let template3 =
  'The ((abc)) brown {noun} {{adverb}} ' +
  '{{verb}} the {{adjective}} yellow ' +
  '{{noun}}, who {{adverb}} {{verb}} his ' +
  '{{noun}} and looks around.';

console.log(madlibs(template3));
