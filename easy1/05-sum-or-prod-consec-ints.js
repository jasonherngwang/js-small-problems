function sumConsecutive(num) {
  if (num === 1) return 1;
  return num + sumConsecutive(num - 1);
}

function productConsecutive(num) {
  if (num === 1) return 1;
  return num * productConsecutive(num - 1);
}

const rlSync = require("readline-sync");

const num = parseInt(rlSync.question("Enter integer > 0: "), 10);
const op = rlSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product. '
);

const operation = op === "s" ? "sum" : "product";

let result;
if (op === "s") {
  result = sumConsecutive(num);
} else {
  result = productConsecutive(num);
}

console.log(
  `The ${operation} of the integers between 1 and ${num} is ${result}.`
);
