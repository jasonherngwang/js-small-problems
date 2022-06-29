function penultimate(string) {
  // return string.split(' ')[-2]; // Can't use neg indices with Arrays. Key '-2' doesn't exist as a property; returns undefined.
  return string.split(' ').slice(-2, -1)[0]; // slice() does accept neg indices
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"