const rlSync = require("readline-sync");

const tipPct = parseFloat(rlSync.question("Tip %? "), 10);

const tipAmt = bill * (tipPct / 100);
const total = bill + tipAmt;
console.log(`The tip is $${tipAmt.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
