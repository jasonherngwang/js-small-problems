function productOfSums(array1, array2) {
  let result = total(array1) * total(array2); // undefined * undefined = NaN
  return result;
}

function total(numbers) {
  // let sum; // No initial value; will return undefined
  let sum  = 0; // No initial value; will return undefined

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]; // undefined + anything = NaN
  }

  // sum;  // Missing explicit return statement. Function will return `undefined`
  return sum;
}

console.log(productOfSums([1, 2, 3], [2, 3, 4]));