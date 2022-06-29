/*
Algo
- Initialize empty result string
- Iterate over character indices
  - If current char is the same as the next, skip iteration
  - Add char to result string
*/

const crunch = (str) => {
  let result = "";
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === str[idx + 1]) continue;
    result += str[idx];
  }
  return result;
};
console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""

const crunchRegex = (str) => {
  return str.replace(/(.)\1{1,}/g, "$1");
};
console.log(crunchRegex("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunchRegex("4444abcabccba")); // "4abcabcba"
console.log(crunchRegex("ggggggggggggggg")); // "g"
console.log(crunchRegex("a")); // "a"
console.log(crunchRegex("")); // ""
