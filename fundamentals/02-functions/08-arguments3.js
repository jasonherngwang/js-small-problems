let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7; // Bracket operator is mutating.
}

myValue(a);
console.log(a); // [ 1, 2, 10 ]