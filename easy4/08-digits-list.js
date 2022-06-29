// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

const digitList = (num) => {
  // return String(num).split('').map(digit => Number(digit));
  return [...String(num)].map(Number);
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

const digitList2 = (num) => {
  let result = [];
  
  do {
    let remainder = num % 10;
    result.unshift(remainder);
    num = Math.floor(num / 10);
  } while (num > 0);
  
  return result;
}

console.log(digitList2(12345));       // [1, 2, 3, 4, 5]
console.log(digitList2(7));           // [7]
console.log(digitList2(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList2(444));         // [4, 4, 4]