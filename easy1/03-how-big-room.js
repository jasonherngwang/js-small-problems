const rlSync = require("readline-sync");

const SQFT_PER_SQM = 10.7639;
let unit;

while (true) {
  console.log("Meters or feet? Enter 'm' or 'ft':");
  unit = rlSync.prompt().toLowerCase();
  if (["m", "ft"].includes(unit)) {
    break;
  } else {
    console.log("Please enter an appropriate unit.");
  }
}

console.log("Enter the length of the room:");
const length = parseInt(rlSync.prompt(), 10);
console.log("Enter the width of the room:");
const width = parseInt(rlSync.prompt(), 10);

let outputStr;
if (unit === "m") {
  const area_sqm = (length * width).toFixed(2);
  const area_sqft = (area_sqm * SQFT_PER_SQM).toFixed(2);
  outputStr = `${area_sqm} square meters (${area_sqft} square feet)`;
} else {
  const area_sqft = (length * width).toFixed(2);
  const area_sqm = (area_sqft / SQFT_PER_SQM).toFixed(2);
  outputStr = `${area_sqft} square feet (${area_sqm} square meters)`;
}

console.log(`The area of the room is ${outputStr}.`);
