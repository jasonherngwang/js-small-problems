// Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

function reverseSentence2(string) {
  let words = [];
  let currentWord = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      currentWord += string[i]
    } else {
      words.unshift(currentWord);
      currentWord = '';
    }
  }
  if (currentWord) words.unshift(currentWord);
  return words.join(' ');
}

console.log(reverseSentence2(''));                       // ""
console.log(reverseSentence2('Hello World'));            // "World Hello"
console.log(reverseSentence2('Reverse these words'));    // "words these Reverse"