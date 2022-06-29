const rlSync = require('readline-sync');
const firstNumber = Number(rlSync.question('==> Enter the first number:\n'));
const secondNumber = Number(rlSync.question('==> Enter the second number:\n'));

console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`==> ${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`==> ${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);

