// function runningTotal(array) {
//   let total = 0;
//   let result = [];
//   for (let num of array) {
//     total += num;
//     result.push(total);
//   }
//   return result;
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

// function runningTotalMap(array) {
//   return array.map((elem, index, arr) => {
//     return arr.slice(0, index + 1).reduce((a, b) => a + b)
//   });
// }

// console.log(runningTotalMap([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotalMap([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotalMap([3]));                    // [3]
// console.log(runningTotalMap([]));                     // []

function runningTotal(numbers) {
  let total = 0;
  return numbers.map(number => (total += number, total));
}
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
