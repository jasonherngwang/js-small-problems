const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);                    // A COPY of each string is pushed to array2 (pass-by-value)
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
    array2[i] = array2[i].toUpperCase();
  }
}

console.log(array1);
console.log(array2);

/*
str[] is not a mutating function because primitives are immutable.
The elements in array1 are reassigned, but array2 is not affected.

If the elements were objects, and both arrays reference the same objects, then mutating functions would affect both.

To affect the change on both arrays, add a line reassigning elements in array2.
*/