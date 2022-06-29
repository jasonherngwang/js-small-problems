const rlSync = require("readline-sync");

function numSuffix(num) {
  if ([11, 12, 13].includes(num)) {
    return "th";
  } else if (num % 10 === 1) {
    return 'st';
  } else if (num % 10 === 2) {
    return 'nd';
  } else if (num % 10 === 3) {
    return 'rd';
  } else {
    return "th";
  }
}

const NUMBER_QTY = 5;

let numbers = [];
for (let i = 1; i <= NUMBER_QTY; i += 1) {
  let num = parseInt(rlSync.question(`Enter the ${i}${numSuffix(i)} number: `), 10);
  numbers.push(num)
}

let lastNum = parseInt(rlSync.question('Enter the last number: '), 10);

if (numbers.indexOf(lastNum) === -1) {
  console.log(`The number ${lastNum} does not appear in ${numbers.join(', ')}.`)
} else {
  console.log(`The number ${lastNum} appears in ${numbers.join(', ')}.`)
}