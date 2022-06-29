function swapFirstLastChar(str) {
  let chars = [...str];
  [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
  return chars.join('');
}

function swap(str) {
  return str.split(' ')
            .map(word => swapFirstLastChar(word))
            .join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"