const rlSync = require('readline-sync');

const SQFT_PER_SQM = 10.7639;
let unit;

while (true) {
  console.log("Meters or feet? Enter 'm' or 'ft':");
  unit = rlSync.prompt().toLowerCase();
  if (['m', 'ft'].includes(unit)) {
    break;
  } else {
    console.log('Please enter an appropriate unit.');
  }
}

console.log('Enter the length of the room:');
const length = parseInt(rlSync.prompt(), 10);
console.log('Enter the width of the room:');
const width = parseInt(rlSync.prompt(), 10);

let outputStr;
if (unit === 'm') {
  const areaSqm = (length * width).toFixed(2);
  const areaSqft = (areaSqm * SQFT_PER_SQM).toFixed(2);
  outputStr = ` square meters (${areaSqft} square feet)`;
} else {
  const areaSqft = (length * width).toFixed(2);
  const areaSqm = (areaSqft / SQFT_PER_SQM).toFixed(2);
  outputStr = `${areaSqft} square feet (${areaSqm} square meters)`;
}

console.log(`The area of the room is ${outputStr}.`);
