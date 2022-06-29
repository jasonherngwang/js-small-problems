const rlSync = require('readline-sync');
const phrase = rlSync.question('Please enter a phrase: ');
console.log(`There are ${phrase.length} characters in "${phrase}".`);

const phraseNoSpaces = phrase.replaceAll(' ', '');
console.log(`There are ${phraseNoSpaces.length} characters in "${phraseNoSpaces}".`);

const phraseAlphaOnly = phrase.replaceAll(/[^a-z]/gi, '');
console.log(`There are ${phraseAlphaOnly.length} characters in "${phraseAlphaOnly}".`);