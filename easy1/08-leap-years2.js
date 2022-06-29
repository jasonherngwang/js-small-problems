/*
Leap year
- Divisible by 4
- Not divisible by 100, unless also divisible by 400

Input: Integer > 0
Output: `true` if leap year, `false` if not

Algo
- Check if divisible by 4
  - If so
    - If divisible by 100 and not divisible by 400, return false
    - Return `true`
  - If not, return `false`

*/

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year < 1752) return true;
    if (year % 100 === 0 && year % 400 !== 0) return false;
    return true;
  }
  return false;
}

console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === true);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === true);
console.log(isLeapYear(400) === true);
