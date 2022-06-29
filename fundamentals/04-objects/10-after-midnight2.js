/*
After Midnight
Input: String representation of time (24-hr format) after midnight
Output: Integer representing minutes AFTER midnight

Before Midnight
Input: String representation of time (24-hr format) before midnight
Output: Integer representing minutes AFTER midnight

Algo
- After Midnight
  - Create a Date object using the input string
  - Extract hours and minutes from the shifted date
  - Convert hours to minutes, and add to minutes
- Before Midnight
  - Create a Date object using the input string.
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(timeStr) {    
  const afterMid = new Date('1970-01-01 ' + timeStr);
  const minutesAfter = afterMid.getMinutes() + afterMid.getHours() * MINUTES_PER_HOUR;
  return minutesAfter;
}

function beforeMidnight(timeStr) {
  let afterMid = afterMidnight(timeStr);
  let deltaMinutes = MINUTES_PER_DAY - afterMid;
  if (deltaMinutes === MINUTES_PER_DAY) deltaMinutes = 0;
  return deltaMinutes;
}

console.log(afterMidnight('00:00'));
console.log(afterMidnight('12:34'));
console.log(beforeMidnight('00:00'));
console.log(beforeMidnight('12:34'));