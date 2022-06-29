function sumArr(arr) {
  return arr.reduce((a, b) => a + b);
}

function productArr(arr) {
  return arr.reduce((a, b) => a * b);
}

const rlSync = require("readline-sync");

let nums = [];
console.log('When finished entering numbers, enter "done"');
while (true) {
  const input = rlSync.question("Enter integer > 0: ");
  if (input === "done") break;
  nums.push(parseInt(input, 10));
}
nums = nums.filter((num) => !Number.isNaN(num));

const op = rlSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product. ',
  {
    limit: /[s|sum|p|produce]/,
    limitMessage: 'Enter "s" or "p": ',
  }
);

const operation = op === "s" ? "sum" : "product";

let result;
if (op === "s") {
  result = sumArr(nums);
} else {
  result = productArr(nums);
}

console.log(`The ${operation} of the provided integers is ${result}.`);
