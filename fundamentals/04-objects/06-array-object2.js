const myArray = [5, 5];
myArray[-1] = 5;         // These create non-element properties
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) { // Non-element properties are not considered in Array.prototype.length. Length is 2.
    sum += array[i];                           // sum['-1'] and sum['-2'] return 5. `sum` will be 20.
  }

  // return sum / array.length;                   // 20 / 2 = 10
  return sum / Object.keys(array).length
}

console.log(average(myArray));                 // 10