let a = 7;

function myValue(a) { // Shadowing
  a += 10;            // Reassignment
}

myValue(a);
console.log(a); // 7