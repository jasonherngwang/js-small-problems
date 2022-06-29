/*
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.
*/

function reverseWord(word) {
  return [...word].reverse().join("");
}

function reverseWords(sentence) {
  let words = sentence.split(" ");
  return words
    .map((word) => {
      if (word.length < 5) return word;
      return reverseWord(word);
    })
    .join(" ");
}

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

function reverseWordsRegex(sentence) {
  return sentence.replace(/\b(\w){5,}\b/g, reverseWord);
}

console.log(reverseWordsRegex("Professional")); // "lanoisseforP"
console.log(reverseWordsRegex("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWordsRegex("Launch School")); // "hcnuaL loohcS"
