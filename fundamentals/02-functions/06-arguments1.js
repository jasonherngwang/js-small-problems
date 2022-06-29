let a = 7;

function myValue(b) {
  b += 10; // Reassignment of local variable; no effect on `a`.
}

myValue(a);
console.log(a); // 7