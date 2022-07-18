/*
We declare 2 functions with the same name. The second reassigns the first.
Within the first function, we declare yet another variable with the name
`range`, but its scope is the enclosing function, so it does not conflict with
the other 2.

To fix: Consolidate both functions' logic.
Check how many arguments are passed in.

*/

function range(start, end) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return generateRange(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));
