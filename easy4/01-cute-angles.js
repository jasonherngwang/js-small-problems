/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Algo
- Convert degree input to seconds
- Divide seconds by seconds-per-degree to find degrees, and the remaining seconds
- Divide remaining seconds by seconds-per-minute to find minutes, and the remaining seconds.
- The seconds value is the remaining seconds.
- Round each value down to nearest lower integer
- Output string using provided symbols.
*/
const RANGE_MAX_DEGREES = 360;
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(angleDegrees) {
  while (angleDegrees < 0) angleDegrees += RANGE_MAX_DEGREES;
  while (angleDegrees > 360) angleDegrees -= RANGE_MAX_DEGREES;
  
  let totalSeconds = angleDegrees * SECONDS_PER_DEGREE;
  let degrees = Math.floor(totalSeconds / SECONDS_PER_DEGREE);
  let remainingSeconds = totalSeconds % SECONDS_PER_DEGREE;
  let minutes = Math.floor(remainingSeconds / SECONDS_PER_MINUTE);
  let seconds = Math.floor(remainingSeconds % SECONDS_PER_MINUTE);
  
  return `${String(degrees)}˚${padZeroes(minutes)}'${padZeroes(seconds)}"`
}

function padZeroes(num) {
  let numStr = String(num);
  return numStr.length < 2 ? `0${numStr}` : numStr;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"