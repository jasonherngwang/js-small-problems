function centerOf(string) {
  let midIndex = Math.ceil(string.length / 2) - 1;
  if (string.length % 2 === 0) return string.slice(midIndex, midIndex + 2);
  return string[midIndex];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"